# Chapter 10: Loops in JavaScript

This chapter covers different types of loops in JavaScript, including `for`, `while`, and `do...while` loops. It also includes various interview questions (IQ) and practical tasks to reinforce the concepts.

---

## File Index

| File | Description |
|------|-------------|
| `71_For_loop.js` | Introduction to the problem of repetitive logging and the need for loops |
| `72_For_loop.js` | Basic `for` loop syntax with examples |
| `73_For_Loop2.js` | More `for` loop examples with custom variable names and ranges |
| `74_IQ.js` | Interview questions and edge cases with `for` loops |
| `75_For_OF_IN_EACH.js` | A `while` loop example (covered here before arrays topic) |
| `76_While.js` | Introduction to `while` loops with examples |
| `77_Do_While.js` | `do...while` loop example showing it runs at least once |
| `78_Do_While.js` | Practical `do...while` loop with a retry counter |
| `79_IQ.js` | Interview questions using `while` loops, including a star pattern |
| `80_IQ.js` | Interview question with a `do...while` loop and decrement |
| `81_IQ.js` | Using `continue` inside a `for` loop |
| `82_IQ.js` | Comparing `while` and `do...while` behavior with a false condition |
| `Task_22nd_may.js` | Practical task: Triangle classification and the classic FizzBuzz problem |

---

## 71_For_loop.js

This file demonstrates the repetitive nature of writing multiple `console.log` statements and introduces the concept of loops to help repeat a block of code efficiently.

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log("...");
console.log(10);

// For Loop
// Help you to repeat a block of code.
```

---

## 72_For_loop.js

Basic `for` loop examples showing how to initialize a counter, check a condition, and increment the counter. The first loop runs from `0` to `4`, and the second runs from `0` to `5`.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// 0, 1, 2, 3, 4, 5
```

---

## 73_For_Loop2.js

Additional `for` loop examples using custom variable names (`vedika`) and underscore-prefixed names (`_1`), demonstrating that loop variables can have any valid identifier name.

```javascript
// for (let vedika = 0; vedika < 10; vedika++) {
//     console.log(vedika);
// }
// // 0 to 9, Times -> 10

// //var, let, const

for (let vedika = 0; vedika < 10; vedika++) { // 0 to 9, Times -> 10
    console.log(vedika);
}

for (let _1 = 0; _1 <= 10; _1++) { // 0 to 10, Times -> 11
    console.log(_1);
}
```

---

## 74_IQ.js

Interview-style questions exploring edge cases of `for` loops, such as conditions that are never true and loops that run exactly once.

```javascript
// // for (let sharad = 0; sharad > 1; sharad++) {
// //     console.log(sharad);
// // }

// // for (let sharad = 0; ; sharad++) {
// //     console.log(sharad);
// // }


// for (let vedika = 0; vedika < 18; vedika++) {
//     if (vedika > 15) {
//         console.log("Gift from papa, iphone this year")
//     } else {
//         console.log("No Gift,only barbie doll")
//     }
// }

for (let i = 0; i < 1; i++) {
    console.log(i);
}
```

---

## 75_For_OF_IN_EACH.js

Although the file name suggests `for...of` / `for...in` topics (to be covered later with arrays), this file contains a simple `while` loop that runs while `attempt` is less than `3`.

```javascript
// We will cover this with the arrays concept. let attempt = 0; // Init

while (attempt < 3) {

    console.log(attempt);

    attempt++;

}
```

---

## 76_While.js

Introduction to `while` loops. The first example counts attempts from `0` to `2`. The second example logs a message multiple times while incrementing `modi` from `1` to `15`.

```javascript
let attempt = 0; // Init
while (attempt < 3) { // Condition
    console.log(attempt);
    attempt++; // Updation
}

let modi = 1;
while (modi <= 15) { // 1 to 15,Times -> 

    console.log("Modi will do 15+ years");
    modi++;

}   
```

---

## 77_Do_While.js

Demonstrates the `do...while` loop, which executes the block at least once before checking the condition. Here, `a` starts at `10`, so the condition `a < 10` is false, but the loop body still runs once.

```javascript
let a = 10;

// while (a < 10) {
//     console.log(a);
//     a++;
// }

do {
    console.log(a);
    a++;
} while (a < 10);
```

---

## 78_Do_While.js

A practical `do...while` example simulating a retry mechanism. The code executes and retries up to 3 times.

```javascript
let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;
} while (retry < 3);
```

---

## 79_IQ.js

Interview questions using `while` loops. The first counts down from `5` to `1`. The second uses a nested `while` loop to print a right-angled triangle of stars.

```javascript
let i = 5;
while (i > 0) {
    console.log(i);
    i--;
}


let a = 1;

while (a <= 10) {
    let stars = "";
    let count = 1;

    while (count <= a) {
        stars += "*";
        count++;
    }

    console.log(stars);
    a++;
}
```

---

## 80_IQ.js

A `do...while` loop interview question. The loop starts at `0` and decrements `i`, but because it is a `do...while`, it prints `0` once before the condition `i > 0` stops further execution.

```javascript
let i = 0;
do {
    console.log(i);
    i--;
} while (i > 0);
```

---

## 81_IQ.js

Demonstrates the `continue` statement inside a `for` loop. When `i` equals `1`, the `continue` skips the rest of the iteration, so only `0` and `2` are printed.

```javascript
for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
    console.log(i);
}
```

---

## 82_IQ.js

Compares `while` and `do...while` behavior when the starting condition is already false. The `while` loop does not execute at all, but the `do...while` loop runs once. Note: the second example contains an infinite loop because `n` is never incremented.

```javascript
let count = 10;
while (count < 5) {
    console.log(count);
    count++;
}

let n = 1;
do {
    console.log(n);
} while (n < 3);
```

---

## Task_22nd_may.js

A practical task file containing two programs:
1. **Triangle Classification** — checks if a triangle is Equilateral, Isosceles, or Scalene based on side lengths.
2. **FizzBuzz** — a classic programming challenge using a `while` loop to print numbers from `1` to `100`, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".

```javascript
// Triangle side check matching

let side1 = 10;
let side2 = 10;
let side3 = 10;

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
}
else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalene Triangle");
}

// Fitbuzz program

let num = 1;

while (num <= 100) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(num);
    }

    num++;
}
```
