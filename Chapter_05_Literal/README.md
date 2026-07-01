# 05 Literals & Data Types

Understanding JavaScript literals, primitive values, and template strings.

## Concepts

- **Literals**: Notations for representing fixed values in source code. Examples include string literals, number literals, boolean literals, null, and undefined.
- **null**: An intentional absence of any object value. `typeof null` returns `"object"` (a known JavaScript bug).
- **undefined**: A variable that has been declared but not assigned a value.
- **Number Literals**: Can be written as decimal, hexadecimal (0x), octal (0o), binary (0b), or exponential (1e3) notation.
- **BigInt**: A numeric primitive that can represent integers with arbitrary precision, created by appending `n` to an integer.
- **Infinity & NaN**: `Infinity` represents mathematical infinity; `NaN` (Not-a-Number) is the result of invalid numeric operations.
- **Strings**: Sequences of characters enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).
- **Template Literals**: Strings enclosed in backticks that support embedded expressions using `${expression}` syntax.

## Examples

```javascript
// String literals
let single = 'Hello';
let double = "World";
let multi = `Hello
World`; // Multi-line string

// Number literals
let decimal = 42;
let hex = 0xFF;      // 255 in decimal
let binary = 0b1010; // 10 in decimal
let big = 9007199254740991n; // BigInt

// null vs undefined
let empty = null;           // intentionally empty
let notSet;                 // undefined by default
console.log(empty == notSet);  // true (loose equality)
console.log(empty === notSet); // false (strict equality)

// Template literals
let user = "Sharad";
let url = `https://api.example.com/users/${user}`;
console.log(url); // https://api.example.com/users/Sharad

// typeof operator
console.log(typeof "hello");  // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof null);     // "object" (quirk!)
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
