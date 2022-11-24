import { Portal } from "solid-js/web"
import { Component, createSignal, For, Show } from "solid-js"
import ThemeToggle from "./ThemeToggle"

const BarsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
)

const NavMenu: Component<{ links: { text: string; route: string }[] }> = props => {
  const [isExpanded, setIsExpanded] = createSignal(false)

  return (
    <>
      <button
        onClick={() => setIsExpanded(!isExpanded())}
        class="flex justify-center items-center w-8 h-8 text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-200"
      >
        {BarsIcon}
      </button>
      <Portal mount={document.getElementById("navbar-wrapper")!}>
        <Show when={isExpanded()}>
          <div class="mx-4 mt-4">
            <ul class="flex justify-between items-center space-x-8">
              <For each={props.links}>
                {item => (
                  <li>
                    <a class="font-medium" href={item.route}>
                      {item.text}
                    </a>
                  </li>
                )}
              </For>
            </ul>
            <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-200/10">
              <div class="flex justify-between items-center">
                <span class="font-medium">Switch Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </Show>
      </Portal>
    </>
  )
}

export default NavMenu
