# Chapter 3: Identifiers, Naming Rules, and Comments

This chapter covers the fundamental rules for naming identifiers in JavaScript, common naming conventions, and how to write comments in your code.

## Files in this Chapter

1. **06_identifiers_rules.js** — Demonstrates valid and invalid JavaScript identifier naming rules.
2. **07_identifiers_Part2.js** — Explores JavaScript naming conventions (camelCase, PascalCase, snake_case, etc.).
3. **08_comments.js** — Shows different types of comments in JavaScript (single-line, multi-line, JSDoc-style).

---

## 06_identifiers_rules.js

This file demonstrates the basic rules for valid identifiers in JavaScript. It shows which characters and patterns are allowed (letters, digits, `$`, and `_`) and which are not (starting with a number, containing spaces).

```javascript
var $ = 10;
var _abc = 12;
var x = 15;

var abc123 = 34;

// var 123 = 123; // Invalid identifier, cannot start with a number

var Name = "Sharad";
var name = "Pareek";

//var sharad pareek = "sharad";
var sharad_pareek = "hello";
var sharad$pareek = "sharad";
var sharadpareek123 = "pareek";


console.log($);
console.log(_abc);
console.log(x);
console.log(abc123);
console.log(Name);
console.log(name);
console.log(sharad_pareek);
console.log(sharad$pareek);
console.log(sharadpareek123);

var $ = 10;
var _a = 12;
var p = 10;

var ab123 = 34;

// var 123 = 123;

var Name = "pramod";
var name = "Amit";
//var pramod dutta = "hello";
var pramod_dutta = "hello";
var pramod$dutta = "hello";
var pramodu1232 = "hello";
```

### What it does
- Declares variables using valid characters: `$`, `_`, letters, and numbers (as long as the identifier does not start with a number).
- Shows that JavaScript identifiers are case-sensitive (`Name` and `name` are different variables).
- Demonstrates that spaces in identifiers are invalid (commented out).
- Logs the values of the valid variables to the console.

---

## 07_identifiers_Part2.js

This file explains and demonstrates popular JavaScript naming conventions. Following consistent naming conventions improves code readability and maintainability.

```javascript
var name = "Sharad";

var firstName = "Sharad";
var lastName = "Pareek"; // CamelCase

var first_name = "Amit"; // Snake Case

// Naming Conventions (Cases)
// ============================================
// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;



// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";



// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;


// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";


// 5. Hungarian Notation (prefix with type - older style)
let strName = "string prefix";
let bActive = true;       // boolean
let nCount = 5;           // number
let arrItems = [];        // array
```

### What it does
- Shows **camelCase** (e.g., `firstName`, `totalPrice`) — the standard convention for variables and functions in JavaScript.
- Shows **PascalCase** (e.g., `UserProfile`, `ShoppingCart`) — commonly used for class names and constructors.
- Shows **snake_case** (e.g., `first_name`, `total_price`) — words separated by underscores.
- Shows **SCREAMING_SNAKE_CASE** (e.g., `MAX_SIZE`, `API_KEY`) — used for constants.
- Shows **Hungarian Notation** (e.g., `strName`, `bActive`) — an older style that prefixes variable names with their type.

---

## 08_comments.js

This file demonstrates the different ways to write comments in JavaScript. Comments are ignored by the interpreter and are used to explain code, leave notes, or temporarily disable code.

```javascript
// This is sinle comment this will be ignore 
// this line will be not executed


/*
 *  This is multi line
 *  Author : Prrmmod Dutta
 *  Date : 14-Feb-2026
 */

/**
 *  This is multi line
 *  Author : Prrmmod Dutta
 *  Date : 14-Feb-2026
 **/

// var g = 10;

// this adjasdasdsa
// this adjasdasdsa
// this adjasdasdsa
// this adjasdasdsa
// this              adjasdasdsa
// this adjasdasdsa
// this adjasdasdsa
//          this adjasdasdsa
// this adjasdasdsa
// this adjasdasdsa
//           this adjasdasdsa
// this adjasdasdsa
// this         adjasdasdsa
// this adjasdasdsa
// this adjasdasdsa
// this          adjasdasdsa
// this adjasdasdsa
// this adjasdasdsa

var a = 10
```

### What it does
- Uses **single-line comments** (`//`) to describe that the line is ignored and will not be executed.
- Uses a **multi-line block comment** (`/* ... */`) to include metadata such as author and date.
- Uses a **JSDoc-style block comment** (`/** ... **/`) which is often used for documentation generation.
- Shows how commenting out code (e.g., `// var g = 10;`) prevents it from running.
- Declares a variable `a` at the end, demonstrating that only uncommented code is executed.
