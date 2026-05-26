# Chapter 9: User Input

This chapter covers different ways to accept user input in JavaScript, from browser prompts to Node.js readline and synchronous prompt modules.

---

## Files in this Chapter

### 1. `68_User_Input.js`

**Description:** Demonstrates how to use the browser's built-in `prompt()` function to accept user input, convert the input string to a number, and determine whether the entered number is even or odd.

```javascript
let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
```

**What it does:**
- Displays a dialog box asking the user to enter a number.
- Converts the user's input (which is initially a string) into a number using `Number()`.
- Uses the modulo operator `%` to check if the number is divisible by 2.
- Logs whether the number is Even or Odd to the console.

---

### 2. `69_NODE_Readline.js`

**Description:** Demonstrates accepting user input in a Node.js environment using the built-in `readline` module. It asks the user for a number and checks if it is even or odd.

```javascript
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

rl.question("Enter a number: ", (input) => {
    let num = Number(input);

    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }

    r1.close();
});
```

**What it does:**
- Shows the commented-out setup code for creating a `readline` interface using `process.stdin` and `process.stdout`.
- Uses `rl.question()` to prompt the user and read a line of input asynchronously.
- Converts the input to a number and evaluates whether it is even or odd.
- Closes the readline interface. *(Note: there is a typo in the file — `r1.close()` should be `rl.close()`.)*

---

### 3. `70_Prompt_Sync.js`

**Description:** Demonstrates using the third-party `prompt-sync` npm package to synchronously capture user input in Node.js, then checks if the number is even or odd.

```javascript
// const prompt = require("prompt-sync")();

// let num = Number(prompt("Enter a number: "));

// if (num % 2 === 0) {
//     console.log(num + " is Even");
// } else {
//     console.log(num + " is Odd");
// }


const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
```

**What it does:**
- Shows commented-out example code at the top for reference.
- Imports the `prompt-sync` package to create a synchronous `prompt()` function in Node.js.
- Prompts the user to enter a number and converts the response to a number.
- Evaluates the number with an `if...else` block and prints whether it is Even or Odd.

---

## Summary

| File | Method | Environment |
|------|--------|-------------|
| `68_User_Input.js` | `prompt()` | Browser |
| `69_NODE_Readline.js` | `readline` module | Node.js |
| `70_Prompt_Sync.js` | `prompt-sync` package | Node.js |

All three examples follow the same core logic: read a number from the user, convert it from a string to a numeric type, and determine if it is even or odd.
