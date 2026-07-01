# 07 If-Else Statements

Control flow using conditional if-else logic.

## Concepts

- **if Statement**: Executes a block of code only if a specified condition is true.
- **if-else Statement**: Provides an alternative block of code to execute when the condition is false.
- **if-else if-else Ladder**: Chains multiple conditions together, executing the first matching block.
- **Nested if-else**: Placing if-else statements inside other if-else blocks for complex decision trees.
- **Truthy & Falsy Values**: Values that evaluate to `true` or `false` in boolean contexts. Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`, `0n`.
- **Logical Operators in Conditions**: Using `&&` (AND) and `||` (OR) to combine multiple conditions.
- **Guard Conditions**: Simple standalone `if` statements used to exit early or skip code when conditions are not met.

## Examples

```javascript
// Basic if statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult");
}

// if-else statement
let temperature = 15;
if (temperature > 30) {
    console.log("It's hot");
} else {
    console.log("It's not hot");
}

// if-else if-else ladder
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Logical operators in conditions
let isLoggedIn = true;
let role = "admin";
if (isLoggedIn && role === "admin") {
    console.log("Access granted to admin panel");
}

// Guard condition
function greet(name) {
    if (!name) return; // Exit early if no name
    console.log("Hello, " + name);
}
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
