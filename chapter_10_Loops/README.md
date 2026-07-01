# 10 Loops

Repeating code blocks using `for`, `while`, and `do...while`.

## Concepts

- **for Loop**: A loop with initialization, condition, and increment expressions. Best when the number of iterations is known.
- **while Loop**: Executes a block of code as long as a specified condition is true. Best when iterations depend on a dynamic condition.
- **do...while Loop**: Similar to while, but guarantees the block executes at least once before checking the condition.
- **break**: Immediately exits the entire loop.
- **continue**: Skips the current iteration and moves to the next one.
- **for...of**: Iterates over values of iterable objects (arrays, strings, Maps, Sets).
- **for...in**: Iterates over enumerable property names (keys) of an object.
- **Infinite Loop**: A loop that never terminates because its condition always remains true.

## Examples

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// do...while loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);

// break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// continue statement
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0, 1, 3, 4
}

// for...of loop
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
