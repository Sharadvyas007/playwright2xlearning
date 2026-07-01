# 08 Switch Statements

Control flow using switch-case constructs.

## Concepts

- **switch Statement**: Evaluates an expression and executes the case clause that matches the expression's value.
- **case**: A label within a switch statement that identifies a value to compare against the expression.
- **break**: Exits the switch statement. Without it, execution "falls through" to the next case.
- **Fall-through Behavior**: When multiple cases share the same code by omitting `break` between them.
- **default**: A catch-all clause that executes when no case matches the expression value.
- **Grouped Cases**: Multiple case labels sharing the same block of code.
- **switch(true) Pattern**: Using boolean expressions in case labels as an alternative to if-else ladders.
- **Strict Comparison**: Switch uses strict equality (`===`) for matching, so type matters.

## Examples

```javascript
// Basic switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// Fall-through / grouped cases
let grade = "B";
switch (grade) {
    case "A":
    case "B":
    case "C":
        console.log("Passed");
        break;
    case "D":
    case "F":
        console.log("Failed");
        break;
}

// switch with HTTP status codes
let statusCode = 404;
switch (statusCode) {
    case 200:
        console.log("OK");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Server Error");
        break;
    default:
        console.log("Unknown status");
}
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
