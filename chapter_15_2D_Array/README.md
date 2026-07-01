# 15 2D Arrays

Working with two-dimensional arrays — grid traversal, nested loops, test matrices, patterns.

## Concepts

- **2D Array**: An array of arrays, forming a grid or matrix with rows and columns.
- **Row × Column**: A 2D array is accessed using two indices: `array[row][column]`.
- **Nested Loops**: Using a loop inside another loop to traverse all elements of a 2D array.
- **Matrix Operations**: Row sums, column sums, transposing, and pattern generation.
- **Test Matrix**: A real-world application where 2D arrays represent test results across browsers and test cases.

## Examples

```javascript
// Creating a 2D array
let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// Accessing elements
console.log(grid[0][0]); // 10 (first row, first column)
console.log(grid[1][2]); // 60 (second row, third column)

// Traversing with nested loops
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
    }
}

// Row sum
let row = [10, 20, 30];
let sum = row.reduce((a, b) => a + b, 0);
console.log(sum); // 60

// Right triangle pattern
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
}
// *
// * *
// * * *
// * * * *
// * * * * *

// Test matrix example
let results = [
    ["Pass", "Fail", "Pass"],
    ["Pass", "Pass", "Pass"],
    ["Fail", "Pass", "Skip"]
];
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
