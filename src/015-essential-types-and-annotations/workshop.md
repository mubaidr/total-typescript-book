# Fast Track

## Section 1

### 021 - Annotating Empty Parameters

Give the parameters of the `concatTwoStrings` function a type annotation to make the errors go away.

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#parameter-type-annotations

### 023 - Optional Function Parameters

Work out how to make the `last` parameter optional in `concatName`.

https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters

### 025 - Object Literal Types

Figure out the correct type for `user` in `concatName`.

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types

### 026 - Optional Properties

Figure out how to make the `last` property optional in the `user` parameter of `concatName`.

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties

### 027 - Type Keyword

We've got a bit of duplication between getRectangleArea and getRectanglePerimeter. See if you can use the `type` keyword to remove this duplication.

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

## Section 2

### 028 - Arrays

Add a type for `items` in the `ShoppingCart` type.

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays

### 032.5 - Any

This code appears to be working fine in the IDE, but it's broken at runtime. See if you can figure out why, and fix the bug.

Once you've figured out the bug, try to work out WHY TypeScript isn't yelling at you.

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any

### 033 - Function Types

Add a type definition to the `makeChange` function.

https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions

### 035 - Pass Types To Set

Find a way to tell `userIds` that it's supposed to be a set of numbers, but nothing else. Do this by passing a type argument to the `Set` function.

https://www.totaltypescript.com/no-such-thing-as-a-generic#type-arguments

### 038 - Type Async Functions

Add a return type annotation to the `fetchData` function to make it return a `Promise` of a `number`.

Because it's `async`, you'll probably need the `Promise` helper type.

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions-which-return-promises
