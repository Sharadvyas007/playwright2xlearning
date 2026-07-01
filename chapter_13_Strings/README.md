# 13 Strings

Deep dive into JavaScript strings — literals, properties, searching, substrings, transformations.

## Concepts

- **String**: A sequence of characters used to represent text. Immutable in JavaScript.
- **length**: A property that returns the number of characters in a string.
- **charAt() / charCodeAt()**: Return the character or Unicode value at a specific index.
- **indexOf() / lastIndexOf()**: Return the position of the first/last occurrence of a substring.
- **includes() / startsWith() / endsWith()**: Check if a string contains, starts with, or ends with a substring.
- **slice() / substring()**: Extract a portion of a string. `slice()` supports negative indexes; `substring()` does not.
- **toUpperCase() / toLowerCase()**: Convert the entire string to uppercase or lowercase.
- **trim()**: Remove whitespace from both ends of a string.
- **replace() / replaceAll()**: Replace the first or all occurrences of a substring.
- **split()**: Divide a string into an array of substrings based on a separator.
- **concat() / Template Literals**: Ways to combine strings.

## Examples

```javascript
// String properties
let str = "Hello World";
console.log(str.length);        // 11
console.log(str.charAt(0));     // H
console.log(str.charCodeAt(0)); // 72

// Searching
console.log(str.indexOf("World"));   // 6
console.log(str.includes("Hello"));  // true
console.log(str.startsWith("He"));   // true

// Extracting substrings
console.log(str.slice(0, 5));       // Hello
console.log(str.slice(-5));          // World
console.log(str.substring(6, 11));   // World

// Transforming
console.log(str.toUpperCase());      // HELLO WORLD
console.log(str.toLowerCase());      // hello world
console.log("  hello  ".trim());     // hello

// Replacing
console.log(str.replace("World", "JS"));     // Hello JS
console.log("a-b-c".replaceAll("-", ":"));  // a:b:c

// Splitting
console.log("apple,banana,cherry".split(",")); // ["apple", "banana", "cherry"]

// Template literals
let user = "Sharad";
console.log(`Welcome, ${user}!`); // Welcome, Sharad!
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
