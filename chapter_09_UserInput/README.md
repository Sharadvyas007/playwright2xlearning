# 09 User Input

Reading user input in JavaScript — browser and Node.js environments.

## Concepts

- **prompt()**: A browser function that displays a dialog box for user input. Returns the entered string or `null` if cancelled.
- **readline**: A Node.js built-in module for reading input from the command line asynchronously.
- **prompt-sync**: A third-party npm package that provides synchronous user input in Node.js.
- **Standard Input (stdin)**: The default input stream in a program, typically the keyboard in terminal environments.
- **Standard Output (stdout)**: The default output stream where a program writes its output, typically the terminal screen.

## Examples

```javascript
// Browser prompt
let name = prompt("Enter your name:");
console.log("Hello, " + name);

// Node.js readline
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter your age: ", (age) => {
    console.log("You are " + age + " years old");
    rl.close();
});

// Using prompt-sync package
const prompt = require("prompt-sync")();
let city = prompt("Enter your city: ");
console.log("You live in " + city);
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
