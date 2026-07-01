# 06 Operators

JavaScript operators for performing calculations, comparisons, and logical decisions.

## Concepts

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%` (modulus), `**` (exponentiation). Used for mathematical calculations.
- **Modulus (`%`)**: Returns the remainder of a division. Commonly used to check even/odd numbers.
- **Comparison Operators**: `>`, `<`, `>=`, `<=`, `==` (loose equality), `===` (strict equality). Compare values and return booleans.
- **Strict vs Loose Equality**: `===` checks both value and type; `==` performs type coercion before comparison. Always prefer `===`.
- **Logical Operators**: `&&` (AND), `||` (OR), `!` (NOT). Used to combine or invert boolean expressions.
- **Ternary Operator**: `condition ? valueIfTrue : valueIfFalse`. A concise way to write simple if-else statements.
- **Nullish Coalescing (`??`)**: Returns the right-hand operand when the left is `null` or `undefined`.
- **Increment/Decrement**: `++` and `--` operators. Pre-increment (`++a`) increments before use; post-increment (`a++`) increments after use.
- **Type Coercion**: JavaScript's automatic conversion of values from one type to another during operations.

## Examples

```javascript
// Arithmetic operators
let sum = 10 + 5;      // 15
let diff = 10 - 5;     // 5
let prod = 10 * 5;     // 50
let div = 10 / 3;      // 3.333...
let rem = 10 % 3;      // 1 (remainder)
let pow = 2 ** 3;      // 8 (2 cubed)

// Comparison operators
console.log(5 == "5");   // true (loose equality, type coercion)
console.log(5 === "5");  // false (strict equality, different types)
console.log(10 > 5);     // true
console.log(10 <= 10);   // true

// Logical operators
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin); // false (both must be true)
console.log(isLoggedIn || isAdmin); // true (at least one is true)
console.log(!isLoggedIn);           // false (negation)

// Ternary operator
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult

// Nullish coalescing
let userInput = null;
let defaultValue = userInput ?? "Default";
console.log(defaultValue); // Default

// Increment operators
let count = 5;
console.log(count++); // 5 (returns first, then increments)
console.log(++count); // 7 (increments first, then returns)
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
