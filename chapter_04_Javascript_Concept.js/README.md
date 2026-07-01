# 04 Variables & Functions

Deep dive into variable declarations, function definitions, hoisting, and the Temporal Dead Zone (TDZ).

## Concepts

- **var**: Function-scoped variable declaration. Hoisted to the top with an initial value of `undefined`. Can be redeclared.
- **let**: Block-scoped variable declaration. Hoisted but not initialized (Temporal Dead Zone). Cannot be redeclared in the same scope.
- **const**: Block-scoped constant declaration. Must be initialized at declaration and cannot be reassigned.
- **Hoisting**: JavaScript's behavior of moving declarations to the top of their scope before execution.
- **Temporal Dead Zone (TDZ)**: The period between entering a block and the actual declaration of a `let` or `const` variable, where accessing it throws a ReferenceError.
- **Scope**: The accessibility of variables. Types include global scope, function scope, and block scope.
- **Function Declaration**: A named function defined with the `function` keyword. Hoisted completely.
- **Function Expression**: A function assigned to a variable. Not hoisted.
- **Shadowing**: When a variable in an inner scope has the same name as one in an outer scope, masking the outer variable.

## Examples

```javascript
// var is function-scoped
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 (accessible outside block)
}

// let is block-scoped
function testLet() {
    if (true) {
        let y = 20;
    }
    // console.log(y); // Error: y is not defined
}

// const cannot be reassigned
const PI = 3.14;
// PI = 3.15; // Error: Assignment to constant variable

// Hoisting with var
console.log(a); // undefined (hoisted)
var a = 5;

// TDZ with let
// console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;

// Function declaration (hoisted)
sayHello(); // Works!
function sayHello() {
    console.log("Hello");
}

// Function expression (not hoisted)
// sayHi(); // Error: sayHi is not a function
var sayHi = function() {
    console.log("Hi");
};
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
