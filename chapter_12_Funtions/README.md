# 12 Functions

Deep dive into JavaScript functions — declarations, expressions, arrow functions, scope, closures.

## Concepts

- **Function Declaration**: A named function created with the `function` keyword. Hoisted completely.
- **Function Expression**: A function assigned to a variable. Not hoisted.
- **Arrow Function**: A concise syntax introduced in ES6. Does not have its own `this`.
- **Parameters vs Arguments**: Parameters are variables in the function definition; arguments are actual values passed during the call.
- **Default Parameters**: Predefined values for parameters if no argument is provided.
- **Rest Parameters (`...`)**: Collects remaining arguments into an array.
- **IIFE (Immediately Invoked Function Expression)**: A function that runs immediately after being defined.
- **Scope**: The accessibility of variables — global, function, and block scope.
- **Closure**: A function that remembers variables from its outer scope even after the outer function has finished executing.
- **Higher-Order Function**: A function that accepts another function as an argument or returns a function.
- **Pure Function**: A function that always produces the same output for the same input and has no side effects.

## Examples

```javascript
// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Default parameters
function greetUser(name = "Guest") {
    console.log("Welcome, " + name);
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Closure
function makeCounter() {
    let count = 0;
    return {
        increment: () => count++,
        getCount: () => count
    };
}
let counter = makeCounter();
counter.increment();
console.log(counter.getCount()); // 1

// Higher-order function
function operate(a, b, fn) {
    return fn(a, b);
}
console.log(operate(5, 3, (x, y) => x - y)); // 2
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
