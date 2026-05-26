# Chapter 05 - Literals in JavaScript

This chapter covers different types of literals in JavaScript, including string literals, numeric literals, boolean literals, `null`, `undefined`, and template literals.

## Files Overview

| # | File | Description |
|---|------|-------------|
| 1 | `22_Literal.js` | Introduction to basic literals (string, boolean, number, `null`, `undefined`) and the `typeof` operator. |
| 2 | `23_null_undefined.js` | Detailed comparison between `null` and `undefined`, their differences, and when to use each. |
| 3 | `24_null.js` | Practical examples of `null` and `undefined` in variable declarations. |
| 4 | `25_Literal_All.js` | Examples of numeric literals including hexadecimal, octal, and exponential notation. |
| 5 | `26_Literal_Number_All.js` | Comprehensive guide to all number types in JavaScript, including BigInt, special numeric values, and number properties. |
| 6 | `27_Strings.js` | Examples of strings using single quotes and double quotes. |
| 7 | `28_Template_Literal.js` | Practical examples of template literals (backticks) for string interpolation, especially useful in Playwright testing. |
| 8 | `29_Backtick_single_double.js` | Comparison of single quotes, double quotes, and backticks (template literals) with use cases. |

---

## 1. 22_Literal.js

**Description:** Introduces basic JavaScript literals (string, boolean, number, `null`, `undefined`) and demonstrates the `typeof` operator to check data types.

```javascript
let age = "pramod"; // This is a string literal assigned to the variable 'age'.
let isStudent = true; // This is a boolean literal assigned to the variable 'isStudent'.
let pi = 3.14; // This is a numeric literal assigned to the variable 'pi'.
let name = 'Alice'; // This is a string literal assigned to the variable 'name'.
let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.
let undefinedValue; // This variable is declared but not assigned, so it has the value 'undefined'.

// typeof - operatr - It will tell you what is a data type that it has. 
console.log(typeof age);
console.log(typeof pi);
console.log(typeof isStudent);
console.log(typeof nullValue);
console.log(typeof undefinedValue);
```

This file declares variables of different primitive types and uses the `typeof` operator to log their respective data types to the console. Note that `typeof null` returns `"object"`, which is a well-known quirk in JavaScript.

---

## 2. 23_null_undefined.js

**Description:** Provides a detailed explanation and comparison of `null` and `undefined`, including simple definitions, practical comparisons, a summary table, and a quick check function.

```javascript
// ============================================================
// Topic: null vs undefined in JavaScript
// File: 23_null_undefined.js
// ============================================================

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns "no value" or "empty".
                 It is intentional absence of any value.
*/


// --------------------------------------------------------
// 1. undefined
// --------------------------------------------------------

let userName; // declared but not assigned
console.log(userName);        // undefined
console.log(typeof userName); // "undefined"

function greet() {
    // no return statement
}
console.log(greet());         // undefined


// --------------------------------------------------------
// 2. null
// --------------------------------------------------------

let profilePicture = null; // developer explicitly says "no picture yet"
console.log(profilePicture);        // null
console.log(typeof profilePicture); // "object"  <-- known JS quirk!

let score = 100;
score = null; // developer clears the value intentionally
console.log(score); // null


// --------------------------------------------------------
// 3. Key Differences (Summary Table)
// --------------------------------------------------------

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | == comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/


// --------------------------------------------------------
// 4. Practical Comparisons
// --------------------------------------------------------

let a;
let b = null;

console.log(a == b);   // true  (loose equality sees them as similar)
console.log(a === b);  // false (strict equality: different types)

console.log(typeof a); // "undefined"
console.log(typeof b); // "object"


// --------------------------------------------------------
// 5. When to use what?
// --------------------------------------------------------

/*
  Use undefined:
  - When checking if a variable/property has been initialized.
  - Let JS handle it; don’t assign undefined manually.

  Use null:
  - When you want to deliberately clear or reset a value.
  - When a function should return "nothing" on purpose.
  - To represent an empty or unknown object reference.
*/


// --------------------------------------------------------
// 6. Quick Check Function
// --------------------------------------------------------

function checkValue(value) {
    if (value === undefined) {
        return "Value is undefined (not assigned yet)";
    }
    if (value === null) {
        return "Value is null (explicitly empty)";
    }
    return "Value is: " + value;
}

console.log(checkValue());           // undefined
console.log(checkValue(null));       // null
console.log(checkValue("hello"));    // hello


// ============================================================
// END
// ============================================================
```

This file explains that `undefined` is automatically assigned by JavaScript when a variable is declared but not initialized, while `null` is an intentional absence of value assigned by the developer. It also covers the difference between loose (`==`) and strict (`===`) equality comparisons and provides a helper function to check values.

---

## 3. 24_null.js

**Description:** Practical examples of `null` and `undefined` in variable declarations, along with empty string and zero value examples.

```javascript
let no_audi_pramod_sir_has = null;
let pramod_has_two_wives;

let age = 0;

let audi = "";
console.log(typeof audi);
console.log(typeof age);
```

This file demonstrates the difference between explicitly assigning `null`, leaving a variable `undefined`, assigning `0` as a number, and assigning an empty string `""`. It also logs the types of `audi` (string) and `age` (number).

---

## 4. 25_Literal_All.js

**Description:** Examples of numeric literals including hexadecimal, octal, and exponential notation.

```javascript
let count = 42;
let negative = -100;
let zero = 0;

let h = 0xFF;
console.log(typeof h);
let color_hex = 0xFF0000;

let octal = 0o77; //base

let million = 1e6;
let tiny = 1.5e-4;
```

This file demonstrates various ways to write number literals in JavaScript: decimal integers, negative numbers, hexadecimal (`0x`), octal (`0o`), and scientific/exponential notation (`1e6`). Despite different literal formats, the `typeof` result for all is `"number"`.

---

## 5. 26_Literal_Number_All.js

**Description:** Comprehensive guide to all number types in JavaScript, including BigInt, special numeric values, and number properties.

```javascript
// ============================================================
// Topic: All Number Types in JavaScript
// File: 26_Literal_Number_all.js
// ============================================================

/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
  JS uses IEEE 754 double-precision 64-bit binary format.
*/


// --------------------------------------------------------
// 1. INTEGER LITERALS
// --------------------------------------------------------

// Decimal (Base 10) - most common
let decimal = 42;
console.log("Decimal:", decimal); // 42

// Binary (Base 2) - starts with 0b or 0B
let binary = 0b1010; // 10 in decimal
console.log("Binary 0b1010:", binary); // 10

// Octal (Base 8) - starts with 0o or 0O
let octal = 0o52; // 42 in decimal
console.log("Octal 0o52:", octal); // 42

// Hexadecimal (Base 16) - starts with 0x or 0X
let hex = 0x2A; // 42 in decimal
console.log("Hexadecimal 0x2A:", hex); // 42


// --------------------------------------------------------
// 2. FLOATING-POINT LITERALS
// --------------------------------------------------------

let float1 = 3.14;
let float2 = -0.5;
let float3 = .5;    // valid, but avoid for readability
let float4 = 5.;    // valid, but avoid for readability

console.log("Float 3.14:", float1);
console.log("Float -0.5:", float2);
console.log("Float .5:", float3);
console.log("Float 5.:", float4);

// Exponential notation
let exp1 = 1.5e3;   // 1.5 * 10^3 = 1500
let exp2 = 1.5e-3;  // 1.5 * 10^-3 = 0.0015
let exp3 = 2E10;    // 2 * 10^10 = 20000000000

console.log("Exponential 1.5e3:", exp1);   // 1500
console.log("Exponential 1.5e-3:", exp2);  // 0.0015
console.log("Exponential 2E10:", exp3);    // 20000000000


// --------------------------------------------------------
// 3. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------

let million = 1_000_000;
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;

console.log("Separator 1_000_000:", million);      // 1000000
console.log("Separator 0b1010_0001:", binarySep);  // 161
console.log("Separator 0xFF_FF:", hexSep);         // 65535


// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------

let big = 123456789012345678901234567890n;
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big); // "bigint"

// BigInt operations
console.log("BigInt + 1n:", big + 1n);
// Cannot mix BigInt with Number: 10n + 5 -> TypeError


// --------------------------------------------------------
// 5. SPECIAL NUMERIC VALUES
// --------------------------------------------------------

// Infinity
console.log("Infinity:", Infinity);           // Infinity
console.log("1 / 0:", 1 / 0);                 // Infinity
console.log("-1 / 0:", -1 / 0);               // -Infinity
console.log("typeof Infinity:", typeof Infinity); // "number"

// -Infinity
console.log("-Infinity:", -Infinity);

// NaN (Not a Number) - result of invalid math
console.log("NaN:", NaN);                     // NaN
console.log("0 / 0:", 0 / 0);                 // NaN
console.log("'hello' * 2:", "hello" * 2);     // NaN
console.log("typeof NaN:", typeof NaN);       // "number" (quirky!)




// --------------------------------------------------------
// 7. NUMBER PROPERTIES (Constants)
// --------------------------------------------------------

console.log("\n--- Number Properties ---");
console.log("MAX_VALUE:", Number.MAX_VALUE);             // ~1.79e308
console.log("MIN_VALUE:", Number.MIN_VALUE);             // ~5e-324
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("NaN property:", Number.NaN);
console.log("EPSILON:", Number.EPSILON);                 // smallest diff between 2 numbers


// --------------------------------------------------------
// 8. NUMBER METHODS
// --------------------------------------------------------


// --------------------------------------------------------
// SUMMARY TABLE
// --------------------------------------------------------

/*
  | Type/Form          | Example            | Notes                          |
  |--------------------|--------------------|--------------------------------|
  | Decimal Integer    | 42                 | Standard whole numbers         |
  | Binary             | 0b1010             | Base 2, starts with 0b         |
  | Octal              | 0o52               | Base 8, starts with 0o         |
  | Hexadecimal        | 0x2A               | Base 16, starts with 0x        |
  | Float              | 3.14               | Decimal numbers                |
  | Exponential        | 1.5e3              | Scientific notation            |
  | Numeric Separator  | 1_000_000          | ES2021+, for readability       |
  | BigInt             | 123n or BigInt(123)| Arbitrary large integers       |
  | Infinity           | Infinity           | Result of division by zero     |
  | NaN                | NaN                | Invalid numeric operation      |
  | Number Object      | new Number(42)     | Avoid, use primitive           |
*/


// ============================================================
// END
// ============================================================
```

This file provides an exhaustive overview of number literals in JavaScript: decimal, binary, octal, hexadecimal, floating-point, exponential notation, numeric separators, BigInt, and special values like `Infinity` and `NaN`. It also logs important `Number` constants.

---

## 6. 27_Strings.js

**Description:** Examples of strings using single quotes and double quotes, including mixing quotes and checking string types.

```javascript
// Single quotes
let single = 'Hello World';
let withDouble = 'She said "hi"';

// Double quotes
let double = "Hello World";
let withSingle = "It's a test";


let c = 'c';
let c1 = 'cc';
console.log(typeof c);
console.log(typeof c1);
console.log(typeof double);

// 'JavaScript prefers to use single code. '
```

This file demonstrates that JavaScript strings can be enclosed in single (`'`) or double (`"`) quotes. It also shows that both a single character (`'c'`) and multiple characters (`'cc'`, `"Hello World"`) are of type `"string"`.

---

## 7. 28_Template_Literal.js

**Description:** Practical examples of template literals (backticks) for string interpolation, especially useful in Playwright testing, API URL construction, logging, and JSON payload generation.

```javascript
// Template literally. 

let firstname = "Prrammod";
let fullname = `Hi ${firstname} Dutta`;
console.log(fullname);


let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);

// Playwright
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();

// Logs
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);


const testCase = "checkout_flow";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });


const username = "pramod";
const role = "admin";

const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);
```

This file showcases the power of template literals (backticks) for embedding expressions directly inside strings using `${...}`. It includes real-world examples relevant to Playwright automation, such as building dynamic locators, generating screenshot file paths, constructing API URLs, formatting test logs, and building JSON payloads.

> **Note:** The `await` calls assume this code runs inside an async function or module.

---

## 8. 29_Backtick_single_double.js

**Description:** Comparison of single quotes, double quotes, and backticks (template literals) with use cases, a feature comparison table, and a real example showing the old vs. new way of building strings.

```javascript
// ============================================================
// Topic: Single Quote vs Double Quote vs Backtick in JS
// File: 29_Backtick_single_double.js
// ============================================================

/*
  ONE SIMPLE EXPLANATION:

  Single ('') and Double ("") quotes are almost the same — both create simple strings.
  Backticks (``) are special — they allow variables inside (${}) and multi-line text.

  Think of it like this:
  - '' or "" -> Plain text
  - ``       -> Smart text (can inject values & line breaks)
*/


// --------------------------------------------------------
// 1. Single Quotes
// --------------------------------------------------------
let single = 'Hello World';
console.log("Single Quote:", single);


// --------------------------------------------------------
// 2. Double Quotes
// --------------------------------------------------------
let double = "Hello World";
console.log("Double Quote:", double);

// NOTE: Single and Double are identical in behavior.
// Use whichever you prefer, just be consistent.


// --------------------------------------------------------
// 3. Backticks (Template Literals)
// --------------------------------------------------------
let name = "Harish";
let age = 25;

// Variable interpolation
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("Backtick with variable:", greeting);

// Multi-line string
let multiLine = `
  Line 1
  Line 2
  Line 3
`;
console.log("Backtick multi-line:", multiLine);

// Expression inside ${}
let sum = `10 + 20 = ${10 + 20}`;
console.log("Backtick expression:", sum);


// --------------------------------------------------------
// 4. Quick Comparison
// --------------------------------------------------------

/*
  Feature              |  '' or ""  |  ``
  ---------------------|------------|------------
  Simple text          |     ✓      |   ✓
  Variable injection   |     ✗      |   ✓  -> ${var}
  Multi-line           |     ✗      |   ✓
  Expression inside    |     ✗      |   ✓  -> ${a + b}
*/


// --------------------------------------------------------
// 5. Real Example
// --------------------------------------------------------

let product = "Laptop";
let price = 50000;

// Old way (using + to combine)
let oldWay = "The " + product + " costs " + price + " rupees.";

// New way (using backticks)
let newWay = `The ${product} costs ${price} rupees.`;

console.log("Old way:", oldWay);
console.log("New way:", newWay);


// ============================================================
// END
// ============================================================
```

This file highlights that single and double quotes behave identically for creating simple strings, while backticks (template literals) add powerful features like variable interpolation, multi-line strings, and inline expressions. It contrasts the old string concatenation approach with the cleaner template literal syntax.

---

*End of Chapter 05 - Literals in JavaScript*
