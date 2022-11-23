---
layout: ../../layouts/BlogLayout.astro
title: Zig Language Cheatsheet
pubDate: 2022-07-21
tags: ["zig"]
language: en
---

## Arrays

```zig
// array declaration and array literal
var foo: [3]u32 = [3]u32{ 2, 3, 3 };
// the size of the array literal can be inferred
var bar = [_]u32{ 1, 2, 3 };

// use `++` operator to concatenate arrays
const foo = [_]u8 { 0, 1 } ++ [_]u8 { 1, 0 };
// use `**` operator to repeat an array
const bar = [_]u8 { 0, 1 } ** 2;
// the two operations are done during compilation
```

## Strings

```zig
// `++` and `**` can also be applied to strings
const foo = "lol " ** 3;
const bar = "Hello," + " " + "Zig!";

// multiline strings begin with `\\` in each line
const lines =
    \\I have to say that
    \\this is kinda weird.
;
```

## Control Flow

```zig
// condition clause only accepts boolean type value
if (foo == 233) {
    std.debug.print("233\n", .{});
} else {
	  std.debug.print("not 233\n", .{});
}

// `if` can also be used as expression
var price: u8 = if (discount) 17 else 20;

// `while` loop
while (n < 1024) {
    std.debug.print("{}\n", .{n});
    n *= 2;
}
// `while` can have an optional continue expression
// which runs every time the loop continues
while (n < 1024) : (n *= 2) {
	  std.debug.print("{}\n", .{n});
}

// use `for` to loop through each element of an array
const digits = [_]u8 { 1, 3, 5, 7, 9};
for (digits) |digit| {
	  std.debug.print("{}\n", .{digit});
}
// loop with index is also possible
for (digits) |digit, index| {
	  std.debug.print("{}:{}\n", .{index, digit});
}

// use `switch` to match multiple values of an expression
switch (players) {
	  1 => single(),
    2 => double(),
    else => {
    	  alert();
        return GameError.TooManyPlayers;
    }
}

// `switch` can also used as an expression
var n = switch (x) {
	  1 => 'A',
    2 => 'B',
    3 => 'C',
    else => '?',
};

// `unreachable` tells the compiler that a block of code
// should never be executed, and reaching it is just an error
if (true) {
	  // always executed
} else {
	  unreachable;
}
```

## Functions
```zig
fn increment(n: u8) u8 {
  	return n + 1;
}
```

## Defer

```zig
// deferred statement runs after a block of code
// has finished
{
  	defer runLater();
    runNow();
}

// there's also an `errdefer` that only runs if
// a block of code exits with an error
{
  	errdefer cleanup();
    try canFail();
}
```

## Errors

```zig
// errors in Zig are just values
// they can be defined in error sets
const NumberError = error{
  	TooBig,
    TooSmall
}

// error union type can be created
// it is just like Result Monad
var number_result: NumberError!usize = NumberError.TooSmall;
number_result = 233;

// error hanlding in `if`
const result: Error!Value = canFail();
if (result) |value| {
  	// result is not an error
    // value is the non-error value of result
} else |err| {
  	// result is an error
    // err is the error value of result
}

// `switch` is also possible for captured error value
if (result) |value| {
  	// ...
} else |err| switch(err) {
  	// ...
}

// use `catch` to provide a fallback value for errors
fn double(n: isize) NumberError!isize {
  	if (n < 100) return NumberError.TooSmall;
    if (n > 999) return NumberError.TooBig;
    return n * 2;
}
const number = double(5) catch 10;

// the error value can also be captured in `catch`
const number = double(5) catch |err| {
  	if (err == NumberError.TooSmall) return 10;
    if (err == NumberError.TooBig) return 1000;
}

// shorhand `try` for re-returning the error value
const number = try double(5);
// which is the same as:
const number = double(5) catch |err| return err;
```

## Optionals

```zig
// a variable of optional type can be null 
var foo: ?u32 = null;
foo = 32;

// perform a null check before using an nullable value
if (foo != null) {
    foo += 1;
}

// use `orelse` to provide a fallback value for null
const result = foo orelse 0;

// use `.?` to get the non-null value
const result = foo.?;
// which is the same as
const result = foo orelse unreachable;
```

## Enums

```zig
// enums are just a collection of numbers
const Fruit = enum{ apple, pear, orange };

// you can optionally specify the numeric type
const Color = enum(u32) {
    red = 0xff0000,
    green = 0x00ff00,
    blue = 0x0000ff,
};
// use the builtin function `@enumToInt()` to
// convert an enum value to its corresponding numeric value
const red: u32 = @enumToInt(Color.red);
```

## Structs

```zig
// struct definition and initilization
const Point = struct {
  	x: i32,
    y: i32
};
const p1 = Point{ .x=1, .y=1 };
```

## Unions

```zig
// union type can hold one of the items
// of diffrent types at one time
const Foo = union{
  	small: u8,
    medium: u32,
    large: u64,
};
var foo = Foo{ .small = 2 };
foo.small += 1;
foo = Foo{ .medium = 233 };

// tagged unions can be conveniently defined
const SizeTag = enum{ small, medium, large };
const Size = union(SizeTag) {
  	small: u8,
    medium: u32,
    large: u64,
};
// use `switch` to check union type
var size = Size{ .small = 10 };
switch (size) {
  	.small => |s| act(s),
    .medium => |m| act(m),
    .large => |l| act(l),
}

// the enum type for tagging can be inferred
// the example above can be written as:
const Size = union(enum) {
  	small: u8,
    medium: u32,
    large: u64,
};
```

## Pointers
```zig
// pointer type is declared as `*type`
// `&` operator is used to create a reference
// `.*` is used to dereference a pointer
var foo: usize = 233;
var bar: *usize = &foo;
var val: usize = bar.*

// pointers to `var` and `const` are different
var foo: usize = 233; // &foo: *usize
const bar: uszie = 233; // &bar: *const usize

// when use pointer to access struct field
// you don't need to dereference it
fn add(p1: *Point, p2: *Point) void {
  	p1.x += p2.x;
    p1.y += p2.y;
}
```

## Methods

```zig
// struct can have attached functions
const Foo = struct {
  	pub fn hello() void {
    	std.debug.print("Hello!\n", .{});
    }
}
Foo.hello();

// struct functions can have a `self` parameter
// as the receiver
const Bar = struct {
  	number: u32,
    pub fn inc(self: *Bar) void {
    	self.number += 1;
    }
}
var bar = Bar{ .number = 1 };
bar.inc();

// enum type can also have methods
```

## Slices

```zig
// array type must have an explicit length
// slice lets you dynamically point to a
// start item and provide a length
var digits = [_]u8{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
const foo: []u8 = digits[0..1]; // 0
const bar = digits[3..9]; // 3, 4, 5, 6, 7, 8
const all = digits[0..]; // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// we can also create slices from string
// but do remember that string is immutable
const text = "Hello, World!";
const foo: []const u8 = text[0..5];

// many-item pointer points to unknown number of items
// it is more like array in C
var foo = [_]u8{ 1, 2, 3, 4 };
var bar: [*]u8 = &foo;
```

## No-Value Value

```zig
// undefined can be coerced to any type
// it is used to leave variables uninitialized
// it should not be considered as a value
const foo: u32 = undefined;

// null is used in optional type
// it represents an empty value
const foo: ?u32 = null;

// void is a type, not a value
// it is a zero bit type which takes up no space
const foo: void = {}
```
