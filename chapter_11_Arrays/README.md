# 11 Arrays

Working with ordered collections — creation, access, mutation, searching, iteration, transformation.

## Concepts

- **Array**: An ordered list of values stored in a single variable. Can hold mixed data types.
- **Index**: A zero-based numeric position used to access array elements.
- **push() / pop()**: Add/remove elements from the end of an array.
- **unshift() / shift()**: Add/remove elements from the beginning of an array.
- **splice()**: Add, remove, or replace elements at any position in an array.
- **slice()**: Returns a shallow copy of a portion of an array without modifying the original.
- **indexOf() / includes()**: Search for elements by value.
- **map()**: Creates a new array by applying a function to every element.
- **filter()**: Creates a new array with elements that pass a test.
- **reduce()**: Reduces an array to a single value by applying a function cumulatively.
- **sort()**: Sorts elements in place (alphabetically by default; numeric sort requires a compare function).
- **concat() / spread (...)**: Combine multiple arrays into one.
- **forEach()**: Executes a function for each array element.

## Examples

```javascript
// Creating arrays
let numbers = [10, 20, 30];
let mixed = [1, "hello", true, null];

// Accessing elements
console.log(numbers[0]);  // 10
console.log(numbers.at(-1)); // 30 (last element)

// Adding and removing
let arr = [1, 2, 3];
arr.push(4);      // [1, 2, 3, 4]
arr.pop();        // [1, 2, 3]
arr.unshift(0);   // [0, 1, 2, 3]
arr.shift();      // [1, 2, 3]

// Transforming arrays
let scores = [85, 40, 90, 55];
let passed = scores.filter(s => s >= 60);     // [85, 90]
let doubled = scores.map(s => s * 2);         // [170, 80, 180, 110]
let total = scores.reduce((a, b) => a + b, 0); // 270

// Searching
console.log(scores.includes(90));  // true
console.log(scores.indexOf(40));   // 1

// Sorting
let items = ["banana", "apple", "cherry"];
items.sort(); // ["apple", "banana", "cherry"]
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
