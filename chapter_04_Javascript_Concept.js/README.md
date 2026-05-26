# Chapter 04: JavaScript Core Concepts

This chapter covers fundamental JavaScript concepts essential for test automation, including variable declarations, function definitions, scope behavior, and hoisting.

## File Overview

| File | Topic |
|------|-------|
| `09_var_let_const.js` | Introduction to `var`, `let`, and `const` |
| `10_function.js` | Basic Function Definition and Calling |
| `11_var_explained.js` | `var` Scoping Explained |
| `12_let_people_love.js` | `let` Block Scoping |
| `13_const_explained.js` | `const` Immutability |
| `14_var_functionascope.js` | `var` Function Scope Demonstration |
| `15_let_scope.js` | `let` Block Scope Demonstration |
| `16_Hoisting.js` | `var` Hoisting |
| `17_Hoisting_fn.js` | `var` Hoisting Inside Functions |
| `18_let_Hoisting.js` | `let` Hoisting and Temporal Dead Zone (TDZ) |
| `19_let_Hoisting_block.js` | `let` TDZ at Block Level |
| `20_let_const.js` | `const` Hoisting Behavior |
| `21_Jr_QA.js` | `const` Hoisting in Real-world Context |

---

## `09_var_let_const.js`

**Description:** Introduces the three ways to declare variables in JavaScript. Demonstrates that `var` allows both redeclaration and reassignment, and shows a common pitfall where a `for` loop counter declared with `var` leaks into the outer scope.

```javascript
var v = 10;
let l = 30;
const c = 3.14;

var browser = "chrome";
var browser = "firefox"; // redeclaration allowed
browser = "edge"; // reassignment allowed

// for, functions

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);



console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from Function");
}


say();
say();
```

> **Explanation:** The loop variable `i` is declared with `var`, so it is accessible outside the `for` loop. This demonstrates why `let` is preferred for loop counters.

---

## `10_function.js`

**Description:** A simple example showing how to define a function using the `function` keyword and how to invoke it multiple times.

```javascript

// Define of the function
function greet() {
    console.log("Hello, This is Sharad Pareek");

}

// Calling the function
greet();
greet();
```

> **Explanation:** Defines a `greet` function that prints a greeting message, then calls it twice to demonstrate reusability.

---

## `11_var_explained.js`

**Description:** Demonstrates how `var` is function-scoped rather than block-scoped. A variable declared inside a function with `var` is local, but inside a block (like `if`) it is not truly isolated.

```javascript
var a = 10;// Global SCOPE

// var is function scoped


console.log(a);

function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }

}

printHello();

var a = 50;

// var == trump, flipper, dual faced, no trust worthy
```

> **Explanation:** The variable `a` inside `if(true)` overwrites the `a` in the function scope because `var` does not respect block boundaries. The comment humorously calls `var` untrustworthy.

---

## `12_let_people_love.js`

**Description:** Explains why `let` is preferred over `var`. It is block-scoped, does not allow redeclaration in the same scope, and prevents variable leakage.

```javascript
let a = 10;

let retryCount = 0;

retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry Count:", retryCount);


let testStatus = "Pending";

if (testStatus === "Pending") {
    let executiontime = "1000";
    console.log("Inside Block: ", executiontime);
}

// let is loyal
// var is variable/traitor

// let - Block Scoped
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

//let retryCount = 5;

//let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared

// ❌ SyntaxError: redeclaration not allowed

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

console.log(executionTime); // ReferenceError: executionTime is not defined

// {} - Block 
// if(){} 
// funcion name(){}


// let = loyal
// var = varirable / triator



let name = "pending";
name = "done";
```

> **Explanation:** Shows that `let` prevents redeclaration and confines variables to the block they are defined in. Accessing `executionTime` outside the `if` block throws a `ReferenceError`.

---

## `13_const_explained.js`

**Description:** Introduces `const` for declaring values that cannot be reassigned. Like `let`, it is also block-scoped.

```javascript
const BASE_URL = "https://app.thetestingacademy.com";
// const BASE_URL = "https://app.thetestingacademy.com";
//BASE_URL = "https:/ / staging.thetestingacademy.com";
// TypeError: Assignment to constant variable.


let name = "pending";
name = "done";
{
    let name = "Pareek";
}

function say() {
    let name = "Pareek";
}
say();
say();
```

> **Explanation:** `BASE_URL` is a constant; reassigning it would cause a `TypeError`. The file also demonstrates block scoping with `let` inside a plain block `{}`.

---

## `14_var_functionascope.js`

**Description:** A focused demonstration of `var` function scoping. It contrasts global scope vs. local function scope and shows how `var` inside an `if` block affects the enclosing function scope.

```javascript
var a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);
}

console.log("G ->", a);

printHello();
```

> **Explanation:** Inside `printHello`, the `var a` inside `if(true)` re-declares and overwrites the local `a`, so the final value inside the function becomes `30`.

---

## `15_let_scope.js`

**Description:** The `let` equivalent of the previous file. Shows how `let` creates a new binding in every block, keeping variables isolated.

```javascript
let a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let a = 20; // Local Scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);
}

console.log("G ->", a);

printHello();
```

> **Explanation:** With `let`, the `a` inside the `if` block is a completely separate variable. Therefore, after the block ends, the function-level `a` remains `20`.

---

## `16_Hoisting.js`

**Description:** Demonstrates that variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.

```javascript
// JS Engine
// LINE BY LINE, , JIT Compilation

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log(a);
var a = "Pramod";
console.log(a);
```

> **Explanation:** The first `console.log(greeting)` prints `undefined` because the declaration is hoisted, but the assignment is not. The commented-out section shows how the JavaScript engine rewrites the code conceptually.

---

## `17_Hoisting_fn.js`

**Description:** Shows that hoisting with `var` happens at the function scope level, not globally, when the variable is declared inside a function.

```javascript


function getUserStatus() { // JS Engine
    //var status_code; JS Engine (optimized the code)
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

getUserStatus();





// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.
```

> **Explanation:** `status_code` is hoisted to the top of `getUserStatus`, so the first `console.log` outputs `undefined` rather than throwing an error.

---

## `18_let_Hoisting.js`

**Description:** Demonstrates that `let` declarations are also hoisted, but they land in a "Temporal Dead Zone" (TDZ) until the actual declaration line is reached, causing a `ReferenceError` if accessed too early.

```javascript
console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100;


{
    // ---- TDZ for "score" starts here ----
    // console.log(score);  // ReferenceError!
    // score = 50;          // ReferenceError!
    // typeof score;        // ReferenceError!
    // ---- TDZ for "score" ends here ----
    let score = 100;        // Declaration reached, TDZ ends
    console.log(score);     // 100 (safe to access now)
}
```

> **Explanation:** Unlike `var`, accessing a `let` variable before its declaration results in a `ReferenceError`. Inside the block, a new `score` is declared, illustrating block-level scoping.

---

## `19_let_Hoisting_block.js`

**Description:** Further illustrates the Temporal Dead Zone for block-scoped variables. A block-scoped `let` variable shadows the outer one but cannot be accessed before its declaration within that block.

```javascript
let x = "global";

if (true) {
    // TDZ for block-scoped "x" starts here
    // console.log(x);   // ReferenceError (NOT "global"!)
    let x = "block";     // TDZ ends
    console.log(x);      // "block"
}

console.log(x); // "global" (block-scoped "x" does NOT affect this)
```

> **Explanation:** Even though there is an outer `x`, the inner `x` in the `if` block is in a TDZ until its declaration line. The outer `x` remains unaffected after the block ends.

---

## `20_let_const.js`

**Description:** Shows that `const` behaves similarly to `let` regarding hoisting: it is hoisted but remains in the Temporal Dead Zone until the declaration line.

```javascript
console.log(c);
console.log("Hei");
console.log("Hei");
console.log("Hei");
console.log("Hei");
console.log("Hei");

const c = "pramod;"
```

> **Explanation:** The first `console.log(c)` will throw a `ReferenceError` because `const` is hoisted into the TDZ and cannot be accessed before its initialization.

---

## `21_Jr_QA.js`

**Description:** A real-world style snippet demonstrating that `const` hoisting and TDZ behavior applies even in simple scripts, simulating a junior QA interview question.

```javascript
console.log(API_END_APP_VWO_COM);
console.log("dasda")
if (true) {

}

const API_END_APP_VWO_COM = "https://app.vwo.com/login/api";
```

> **Explanation:** The code attempts to log `API_END_APP_VWO_COM` before it is declared with `const`. Because `const` is hoisted into the TDZ, this will throw a `ReferenceError: Cannot access 'API_END_APP_VWO_COM' before initialization`.

---

## Summary

| Concept | Keyword | Scope | Hoisted | Can Re-declare | Can Reassign |
|---------|---------|-------|---------|----------------|--------------|
| Function Scope | `var` | Function | Yes (initialized `undefined`) | Yes | Yes |
| Block Scope | `let` | Block | Yes (TDZ) | No | Yes |
| Block Scope Constant | `const` | Block | Yes (TDZ) | No | No |

Understanding these differences is crucial for writing predictable and bug-free JavaScript code, especially in test automation scenarios where configuration values, loop counters, and API endpoints need reliable scoping behavior.
