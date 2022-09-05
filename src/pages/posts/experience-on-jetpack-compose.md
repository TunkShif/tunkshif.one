---
layout: ../../layouts/BlogLayout.astro
title: Jetpack Compose 初尝体验
date: 2022-03-10
tags: ["android", "kotlin"]
language: zh
---

最近上手在用 Jetpack Compose，原本以为熟悉 React 的话写起来会比较容易...对于简单的 demo 看上去是这样的，但实际对于较复杂的应用场景还是比较麻烦，翻来覆去看了官方的文档和 [compose-samples](https://github.com/android/compose-samples)，总结了一些 patterns 和用到的技巧。

# TextField

官方的给的 Jetpack Compose 的 Material Design 组件库本来组件就少，一些组件的默认行为还跟旧的 View 系统的组件还不一致，最无语的就是这个 TextField， 点击文本框用输入法输完内容后点击文本框以外的区域并不会取消这个聚焦的状态，甚至连输入法都不会自动给你收回去，这些都是得自己覆盖掉的默认行为，具体怎样较为优雅的解决这个问题，顺带后面讲状态管理部分一起写。

![textfield](https://s2.loli.net/2022/02/22/85T1jQlkcnv9BbX.png)

另外提到组件少的问题，View 系统里都有的下拉选择输入的组件，到 Jetpack Compose 里就没了，还得自己造轮子封装一个。还好的是至少还有现成的 DropdownMenu 组件，只需要和 TextField 组合一下就好了。

![auto-complete-textfield](https://s2.loli.net/2022/02/22/ft147eCxJEYh26H.png)

先直接放上最终的代码，其中 props 里只需要传入选中的值 `value`，当下拉选项栏的项目被选中的回调函数 `onItemSelected`，以及所有的选项即可，其余的都是 TextField 组件自身的 props 提升上来的。

```kotlin
@Composable
fun AutoCompleteTextField(
    value: String,
    onItemSelected: (String) -> Unit,
    items: List<String>,
    modifier: Modifier = Modifier,
    textStyle: TextStyle = LocalTextStyle.current,
    label: @Composable (() -> Unit)? = null,
    placeholder: @Composable (() -> Unit)? = null,
    leadingIcon: @Composable (() -> Unit)? = null,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions.Default,
    shape: Shape = MaterialTheme.shapes.small,
) {

    var textFieldSize by remember { mutableStateOf(Size.Zero) }
    var expanded by remember { mutableStateOf(false) }

    Box(
        modifier = modifier.onGloballyPositioned { textFieldSize = it.size.toSize() },
    ) {
        OutlinedTextField(
            value = value,
            onValueChange = onItemSelected,
            enabled = false,
            singleLine = true,
            label = label,
            shape = shape,
            textStyle = textStyle,
            keyboardActions = keyboardActions,
            keyboardOptions = keyboardOptions,
            placeholder = placeholder,
            leadingIcon = leadingIcon,
            trailingIcon = {
                IconButton(onClick = { expanded = true }) {
                    if (expanded) {
                        Icon(
                            painter = painterResource(id = R.drawable.ic_chevron_up_outline),
                            contentDescription = "collapse"
                        )
                    } else {
                        Icon(
                            painter = painterResource(id = R.drawable.ic_chevron_down_outline),
                            contentDescription = "expand"
                        )
                    }
                }
            },
            colors = textFieldColors(),
            modifier = modifier
        )

        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false },
            modifier = Modifier
                .width(with(LocalDensity.current) { textFieldSize.width.toDp() })
        ) {
            items.forEachIndexed { index, item ->
                DropdownMenuItem(
                    onClick = {
                        onItemSelected(items[index])
                        expanded = false
                    }) {
                    Text(text = item)
                }
            }
        }
    }
}

@Composable
private fun textFieldColors(): TextFieldColors {
    return TextFieldDefaults.outlinedTextFieldColors(
        disabledTextColor = LocalContentColor.current.copy(LocalContentAlpha.current),
        disabledLabelColor = MaterialTheme.colors.onSurface.copy(ContentAlpha.medium),
        disabledLeadingIconColor = MaterialTheme.colors.onSurface.copy(alpha = TextFieldDefaults.IconOpacity),
        disabledPlaceholderColor = MaterialTheme.colors.onSurface.copy(ContentAlpha.medium),
        disabledTrailingIconColor = MaterialTheme.colors.onSurface.copy(alpha = TextFieldDefaults.IconOpacity),
    )
}
```

值得提一下的是，`expanded` 状态初始化为 `false`，表示下拉选项栏未展开，`textFieldSize` 这个状态最初始化为 `0`，在整个组件被渲染后，通过 `Modifier` 的 `onGloballyPositioned()` 方法将 `textFieldSize` 设置为当前组件的尺寸，然后将这个尺寸的宽度设置给 `DropdownMenu`，从而实现了下拉选项栏和文本框宽度一致。

另外还需要禁止用户能够输入或编辑 `TextField` 内的文本，在网上搜来搜去最后找到一个折衷的办法，就是直接向 `TextField` 传入 `enabled = false` 来禁用该文本输入框，只能通过点击右侧的展开下拉选项按钮选择条目。但是将文本框禁用后其样式也变成了对应的 `disabled` 状态下的样式，所以又很蛋疼的用 `TextFieldColors` 把 `disabled` 状态下的样式覆盖成默认状态下的样式。

最终得到的效果图如下

![dropdown](https://s2.loli.net/2022/02/22/caYB1i6IurXKPFR.png)

# State Management

目前 Jetpack Compose 生态下没有像 React 那样产生出各种状态管理的轮子，所以目前唯一的办法同时也是官方给出的办法就是**状态提升**。但是一旦界面逻辑复杂起来后会很麻烦。按照官方文档的 [State and Jetpack Compose](https://developer.android.com/jetpack/compose/state) 里给出的方案，再配合官方给出的那些 samples，个人总结出下面这套方案。

## State Holder

对于单个具有一定复杂逻辑的组件，可以创建相应的 State Holder 来处理。

例如像用户输入用户名或密码的 `TextField` 组件，我们需要对用户输入进行校验，展示错误，以及前文提到的处理聚焦的问题。所以我们可以创建一个 `TextFIeldState` 类：

```kotlin
class TextFieldState(
    private val validator: (String) -> Boolean = { it.isNotEmpty() },
    private val errorFor: (String) -> String = { "Cannot be empty." }
) {
    var text by mutableStateOf("")
    var isFocusedEver by mutableStateOf(false)
    var isFocused by mutableStateOf(false)
    private var showError by mutableStateOf(false)

    val isValid
        get() = validator(text)

    val shouldShowError
        get() = !isValid && showError

    fun onFocusChange(focused: Boolean) {
        isFocused = focused
        if (focused) isFocusedEver = true
    }

    fun enableShowError() {
        if (isFocusedEver) showError = true
    }

    fun getError() = if (shouldShowError) errorFor(text) else null
}
```

其中我们可以自定义校验器和需要展示的错误信息，同时我们希望的是当用户还未点击过输入框时不进行校验，当输入了文本内容并 unfocus 后才进行校验，所以最终的使用例子如下：

```kotlin
@Composable
fun MyInput(
    textState: TextFieldState,
    onImeAction: () -> Unit = {}
) {
    Column {
        OutlinedTextField(
            value = textState.text,
            onValueChange = { textState.text = it },
            keyboardOptions = KeyboardOptions.Default.copy(
                keyboardType = KeyboardType.Text,
                imeAction = ImeAction.Done
            ),
            keyboardActions = KeyboardActions(onDone = { onImeAction() }),
            isError = textState.shouldShowError,
            modifier = Modifier
                .fillMaxWidth()
                .onFocusChanged {
                    val focused = it.isFocused
                    textState.onFocusChange(focused)
                    if (!focused) textState.enableShowError()
                }
        )
        textState.getError()?.let {
            Text(
                text = it,
                color = MaterialTheme.colors.error,
                style = MaterialTheme.typography.caption
            )
        }
    }
}
```

我们需要用 `Modifier` 的 `onFocusChanged()` 方法来设置 focus 的状态，另外我们需要手动设置 `keyboardOptions` 和 `keyboardActions` 来指定输入法的行为，其中的 `onImeAction()` 需要由上一级组件传入，就像下面这样

```kotlin
Column {
  val focusManager = LocalFocusManager.current

  MyInput(
      textState = schemaName,
      onImeAction = { focusManager.clearFocus() }
  )
}
```

同样我们可以给刚刚自己封装的 `AutoCompleteTextField` 组件也创建对应的 State Holder，对于多个输入框组成的表单还可以创建对应的 `FormState` 类，由多个 `TextFieldState` 组成。

## View Model

State Holder 包含了 UI 的状态与逻辑，而对于业务相关的逻辑应放在 View Model 当中呈现，并且 View Model 应用来呈现某一页面下的状态。

例如对于一个表单填写的页面，可以创建下面这样的 ViewModel 类：

```kotlin
class FormViewModel(
    private val repository: Repository
) : ViewModel() {
    var formState = FormState()
        private set

    fun save() {
        viewModelScope.launch {
          repository.save(...)
        }
    }

    fun update() {
        viewModelScope.launch {
          repository.update(...)
        }
    }
}
```
