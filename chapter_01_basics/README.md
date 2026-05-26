# Chapter 1: Basics

This chapter covers the fundamental concepts of JavaScript and environment verification. It includes introductory scripts, basic syntax, setup verification, and a simple computational example.

---

## File Overview

| File | Description |
|------|-------------|
| `01_basic.js` | A simple introductory script with a console log message and a variable declaration. |
| `02_JS.js` | Demonstrates variables, arithmetic operations, loops, and function definitions in JavaScript. |
| `03_Verify_Setup.js` | Verifies the Node.js environment by logging platform, architecture, and Node version. |
| `04_HotCode.js` | A small computational script with a function and a loop to calculate and display a result. |

---

## 01_basic.js

This file contains a basic introductory JavaScript statement and starts a variable declaration.

```javascript
console.log("Hello, This is my first JavaScript code!");

let a = 
```

**Explanation:**
- Prints a greeting message to the console indicating this is the user's first JavaScript code.
- Begins to declare a variable `a` but the assignment is incomplete.

---

## 02_JS.js

This file demonstrates core JavaScript concepts including variables, arithmetic, a loop, and a custom function.

```javascript

let x = 10;
let y = 20;
let sum = x + y;
console.log("The sum of x and y is: " + sum);


let a = 10;
console.log(a);


for (let a = 0; a < 100; a++) {
    console.log(a);
    print();
}

function print() {
    console.log("Hello");
}
```

**Explanation:**
- Declares two numbers (`x` and `y`), calculates their sum, and logs it.
- Declares a variable `a` and logs its value.
- Runs a `for` loop from `0` to `99`, logging the counter and calling the `print()` function on each iteration.
- Defines a `print()` function that outputs `"Hello"` to the console.

---

## 03_Verify_Setup.js

This file verifies the Node.js runtime environment by inspecting the `process` object.

```javascript
console.log(process.platform);

// MAC - DARWIN
// WINDOWS - WIN32
// LINUX - LINUX

console.log(process.arch);
// x64
// arm64

console.log("Node Version:", process.version);
```

**Explanation:**
- `process.platform` outputs the operating system platform (e.g., `darwin`, `win32`, `linux`).
- `process.arch` outputs the CPU architecture (e.g., `x64`, `arm64`).
- `process.version` outputs the version of Node.js currently running.
- This is useful for confirming that Node.js is installed and running correctly.

---

## 04_HotCode.js

This file contains a simple function and a loop that performs repeated addition.

```javascript
console.log("Hello");

function add(a, b) {
    return a + b;
}
let result;
for (let a = 0; a <= 100; a++) {
    result = add(a, a + 1);
}
console.log("Result: ", result);
```

**Explanation:**
- Prints an initial greeting.
- Defines an `add(a, b)` function that returns the sum of two numbers.
- Loops from `0` to `100`, each time calling `add(a, a + 1)` and storing the result.
- After the loop, logs the final result, which will be `201` (from `add(100, 101)`).
