# 01 Basics

Foundational setup and first JavaScript programs.

## Concepts

- **console.log**: A function used to print output to the console. It is the most basic way to display information in JavaScript.
- **Node.js**: A JavaScript runtime that allows you to execute JavaScript code outside of a browser.
- **process.platform / process.arch / process.version**: Built-in Node.js properties that provide information about the operating system, CPU architecture, and Node.js version.
- **Functions**: Reusable blocks of code that perform a specific task. They can accept inputs (parameters) and return outputs.
- **Return Statement**: Exits a function and optionally passes a value back to the caller.

## Examples

```javascript
// First JavaScript program
console.log("Hello World");

// Function that adds two numbers
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // 8

// Checking Node.js environment
console.log(process.platform);  // e.g., "win32"
console.log(process.version);   // e.g., "v18.17.0"
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
