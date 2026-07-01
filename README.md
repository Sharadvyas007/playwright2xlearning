# Playwright Learning

A collection of **Playwright** and **JavaScript** concept exercises for learning end-to-end testing and core JavaScript fundamentals.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Chapter Guide](#chapter-guide)
- [Chapter 17 — Promises](#chapter-17--promises)
- [Chapter 18 — Async/Await](#chapter-18--asyncawait)
- [Chapter 19 — Playwright Basics](#chapter-19--playwright-basics)
- [Chapter 20 — Export / Import](#chapter-20--export--import)
- [Chapter 21 — Classes and Objects](#chapter-21--classes-and-objects)
- [Chapter 22 — Encapsulation](#chapter-22--encapsulation)
- [Chapter 23 — Inheritance](#chapter-23--inheritance)
- [Chapter 24 — Polymorphism](#chapter-24--polymorphism)
- [Chapter 25 — OOP Interview Questions](#chapter-25--oop-interview-questions)
- [Chapter 26 — TypeScript Basics](#chapter-26--typescript-basics)
- [Chapter 27 — TypeScript Interfaces](#chapter-27--typescript-interfaces)
- [Playwright Testing](#playwright-testing)
- [CI / CD](#ci--cd)
- [Roadmap](#roadmap)
- [Useful Commands](#useful-commands)
- [Author](#author)

---

## Project Overview

This repository is a structured learning path covering JavaScript fundamentals — variables, operators, control flow, arrays, functions, strings, objects, and 2D arrays — up to modern **Playwright** end-to-end browser automation. Each chapter contains focused `.js` files with hands-on examples, interview questions (IQ), and real-world QA scenarios.

**Tech Stack:** JavaScript, TypeScript, Node.js, Playwright, GitHub Actions

---

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── playwright.yml              # GitHub Actions CI workflow
├── tests/
│   └── example.spec.js                 # Sample Playwright E2E tests
├── chapter_01_basics/                  # Hello World, env setup, hot code
│   ├── 01_basic.js
│   ├── 02_JS.js
│   ├── 03_Verify_Setup.js
│   └── 04_HotCode.js
├── chapter_02_Javascript_Concepts.js/  # JS Basics
│   └── 05_JS_Basics.js
├── chapter_03_identifiers_rules.js/      # Identifiers, naming conventions, comments
│   ├── 06_identifiers_rules.js
│   ├── 07_identifiers_Part2.js
│   ├── 08_comments.js
│   ├── VS_Code_short_mac.md
│   └── VS_Code_short_windows.md
├── chapter_04_Javascript_Concept.js/     # var / let / const, hoisting, TDZ
│   ├── 09_var_let_const.js
│   ├── 10_function.js
│   ├── 11_var_explained.js
│   ├── 12_let_people_love.js
│   ├── 13_const_explained.js
│   ├── 14_var_functionascope.js
│   ├── 15_let_scope.js
│   ├── 16_Hoisting.js
│   ├── 17_Hoisting_fn.js
│   ├── 18_let_Hoisting.js
│   ├── 19_let_Hoisting_block.js
│   ├── 20_let_const.js
│   └── 21_Jr_QA.js
├── Chapter_05_Literal/                 # Literals — null, undefined, numbers, strings
│   ├── 22_Literal.js
│   ├── 23_null_undefined.js
│   ├── 24_null.js
│   ├── 25_Literal_All.js
│   ├── 26_Literal_Number_All.js
│   ├── 27_Strings.js
│   ├── 28_Template_Literal.js
│   └── 29_Backtick_single_double.js
├── Chapter_06_operators.js/              # Operators — arithmetic, comparison, logical
│   ├── 30_operators.js
│   ├── 31_Arithmetic_OP.js
│   ├── 32-_Modulus_OP.js
│   ├── 33_Expo_OP.js
│   ├── 34_iq.JS
│   ├── 35_Comparision_OP.js
│   ├── 36_Comparison__Strict_loose.js
│   ├── 37_IQ__Loose_Strict.js
│   ├── 38_Confusing_Comparison.js
│   ├── 39_Logical_OP.js
│   ├── 40_String_Con_OP.js
│   ├── 41_Ternary_OP.js
│   ├── 42_Type_OP.js
│   ├── 43_Incre_Decre_OP.js
│   ├── 44_Null_OP.js
│   ├── 45_Post_Increment.js
│   ├── 46_IQ_INCREMENT_D.js
│   └── 47_Advance_ID_.js
├── Chapter_07_IF_Else.js/              # If / Else — control flow basics
│   ├── 48_IF_Else.js
│   ├── 49_If_elseif_else.js
│   ├── 50_REAL_IF_ELSE.js
│   ├── 51_API_IF_Else.js
│   ├── 52_IQ_IF_ELSE.js
│   ├── 53_IF_ELSE_real.js
│   ├── 54_IQ.js
│   ├── 55_IE.js
│   ├── 56_IQ_EVEN_ODD.js
│   ├── 57_Grade_Calc.js
│   ├── 58_LEAP_YEAR.js
│   ├── 58_Task_20may.js
│   ├── Task_21_May.js
│   ├── Practice_IF_ELSE.js
│   ├── iF_else_Pratcie.js
│   └── task_test.js
├── Chapter_08_Switch_Statement.js/       # Switch cases
│   ├── 59_Switch.js
│   ├── 60_No_Break.js
│   ├── 61_Default.js
│   ├── 62_REAL_TIME_EXAMPLE.js
│   ├── 63_Switch_Group.js
│   ├── 64_IQ_Switch.js
│   ├── 65_IQ2.js
│   ├── 66_IQ3.js
│   ├── 67_IQ4.js
│   ├── Switch_Cases_Test.js
│   └── task_live_test.js
├── chapter_09_UserInput/                 # Reading user input in Node.js
│   ├── 68_User_Input.js
│   ├── 69_NODE_Readline.js
│   └── 70_Prompt_Sync.js
├── chapter_10_Loops/                     # for, while, do-while, break, continue
│   ├── 71_For_loop.js
│   ├── 72_For_loop.js
│   ├── 73_For_Loop2.js
│   ├── 74_IQ.js
│   ├── 75_For_OF_IN_EACH.js
│   ├── 76_While.js
│   ├── 77_Do_While.js
│   ├── 78_Do_While.js
│   ├── 79_IQ.js
│   ├── 80_IQ.js
│   ├── 81_IQ.js
│   ├── 82_IQ.js
│   ├── loops_practice.js
│   └── Task_22nd_may.js
├── chapter_11_Arrays/                    # Arrays — creation, search, iterate, transform
│   ├── 83_Arrays.js
│   ├── 84_Arrays.js
│   ├── 85_Access_Array.js
│   ├── 86_Arrays_Adding_Remove.js
│   ├── 87_Adding_Remove2.js
│   ├── 88_REAL_Example.js
│   ├── 89_Searching.js
│   ├── 90_Iterate.js
│   ├── 91_Transform_Arrays.js
│   ├── 92_Arrays.js
│   ├── 93_Array_Slicing.js
│   ├── 94_Concat_array.js
    │   ├── 95_Array_Checking.js
    │   ├── Practice_arr.js
    │   └── Arrays_Practice.js
├── chapter_12_Funtions/                  # Functions — declarations, arrow, closures
│   ├── 96_Functions.js
│   ├── 97_Type1_Fn_Basic_Functions.js
│   ├── 98_Type2_Fn_With_Param_No_Return.js
│   ├── 99_Type3_Fn_without_Param_Return_Type.js
│   ├── 100_Type4_Fn_With_Param_With_Return.js
│   ├── 101_Template_literal.js
│   ├── 102_Fn_Expression.js
│   ├── 103_Arrow_Fn.js
│   ├── 104_Arrow_Fn_REAL.js
│   ├── 105_IIFE.js
│   ├── 106_Default_Param_Fn.js
│   ├── 107_IQ.js
│   ├── 108_Rest_Param_Fn.js
│   ├── 109_IQ.js
│   ├── 110_Spead_IQ.js
│   ├── 111_Scope._Fn.js
│   ├── 112_IQ.js
│   ├── 113_Closure.js
│   ├── 114_Closure.js
│   ├── 115_API_REAL_Closure.js
│   ├── 116_Higher_Order_Fn.js
│   ├── 117_Pure_Fn.js
│   ├── fn_practices.js
│   ├── Arrow_Fun_pratice.js
│   ├── day_2_practice.js
│   └── function_practice_obj.js
├── chapter_13_Strings/                   # Strings — quotes, search, slice, transform
│   ├── 118_Strings.js
│   ├── 119_String_Properties.js
│   ├── 120_Search_Check_Str.js
│   ├── 121_Substring.js
│   ├── 122_Transform_Str.js
│   ├── 123_SC.js
│   ├── Task_3_June.js
│   └── Practice_str.js
├── chapter_14_Objects/                   # Objects — literals, reference, destructuring
│   ├── 124_Objects.js
│   ├── 125_Objects2.js
│   ├── 126_Objects_Creation.js
│   ├── 127_Objects_REAL.js
│   ├── 128_Primitive_Ref.js
│   ├── 129_Ob_Examples.js
│   ├── 130_IQ.js
│   ├── 131_Object_Fn.js
│   ├── 132_Obj_Decon.js
│   ├── 133_Spead.js
│   ├── 134_Objects_GET_SET_Methods.js
│   ├── 135_IQ.js
    │   ├── 136_Obj_REAL.js
    │   ├── 137_Let_const_obj.js
    │   └── Obj_Practice.js
├── chapter_15_2D_Array/                  # 2D Arrays — grids, nested loops, patterns
│   ├── 138_2D_Array.js
│   ├── 139_2d.js
│   ├── 140_REAL.js
│   ├── 141_2d_Array_Fn.js
│   ├── 142_IQ_Right_Pattern_Py.js
│   ├── 2D_Array_practice.js
│   └── 8th_june_task.js
├── chapter_16_Callback/                  # Callbacks — sync, async, callback hell
│   ├── 143_Callback.js
│   ├── 144_CB.js
│   ├── 145_CB_Fn.js
│   ├── 146_PW_CB.js
│   ├── 147_JS_CB.js
│   ├── 148_Sync_CB.js
│   ├── 149_Async_CB.js
│   ├── 150_CB_Hell.js
│   ├── 151_CB_Hell_20_Steps.js
│   ├── 152_CB_Parameter.js
│   └── 153_CB_Return.js
├── chapter_17_promise/                   # Promises — resolve, reject, chaining, all, allSettled
│   ├── 154_Promise.js
│   ├── 155_Promise_REAL_API.js
│   ├── 156_Promise_REAL_API_PART2.js
│   ├── 157_Finally.js
│   ├── 158_Call_Py_Problem.js
│   ├── 159_Promise_ALL.js
│   └── 160_Promise_IQ.js
├── chapter_18_Async_Await/               # Async/Await — sequential, parallel, error handling, Playwright
│   ├── 161_Async.js
│   ├── 162_Aysnc_P2.js
│   ├── 163_PyODom.js
│   ├── 164_Async_Ex.js
│   ├── 165_AA_Seq.js
│   ├── 165_AA_Parallel.js
│   ├── 166_IQ.js
│   └── 167_ACLogin.js
├── chapter_19_playwright_basics/         # Playwright Basics — first real E2E test
│   └── tta-cart.spec.ts                  # TTACart end-to-end checkout flow
├── chapter_20_Export_Import/             # ES Modules — named, default, and aliased imports
│   └── 01_EXPORT_IMPORT/
│       ├── 168_EXPORT_IMPORT.js
│       ├── 169_Utils.js
│       └── 170_logger.js
├── chapter_21_Classes_and_Objects/       # Classes, constructors, private fields, static members
│   ├── 171_Class_Object.js
│   ├── 172_Class_Object2.js
│   ├── 173_Car.js
│   ├── 174_REAL_Browser.js
│   ├── 175_IQ.js
│   ├── 176_Private_Public.js
│   ├── 177_Static.js
│   └── 178_Static.js
├── chapter_22_Encapsulation/             # Data hiding, getters, setters, real-world examples
│   ├── 179_Ecap.js
│   ├── 180_REAL_EXAMPLE
│   ├── 181_Ecap_Car.js
│   └── 182_ECap_Bank.js
├── chapter_23_Inheritance/               # Single, multiple, multilevel, hierarchical inheritance
│   ├── 183_Single_Inheritance.js
│   ├── 184_SI_Example.js
│   ├── 185_Single_Inheritance_Con.js
│   ├── 186_IQ.js
│   ├── 187_IQ2.js
│   ├── 188_REAL_PageObject_Model.js
│   ├── 189_Multiple_Inheritance.js
│   ├── 190_Multiple_Level_Inheritance.js
│   └── 191_Hierarchial_Inheritance.js
├── chapter_24_Polymorphism/              # Method overriding and runtime polymorphism
│   └── 192_Method_Overriding.js
├── chapter_25_OOP_Interview_Questions/   # OOP coding interview exercises
│   ├── EX1.js
│   ├── EX2.js
│   ├── EX3.js
│   └── EX4.js
├── chapter_26_Typescript/                # TypeScript fundamentals — types, generics, IQ
│   ├── 193_TS.ts
│   ├── 194_TS_HelloWorld.js
│   ├── 194_TS_HelloWorld.ts
│   ├── 195_TS_Part1.ts
│   ├── 196_TS_Part2,ts
│   ├── 197_TS_Part2.ts
│   ├── 198_Part3.ts
│   ├── 199_IQ.ts
│   └── 200_IQ.ts
├── chapter_27_TypeScript_Interface/      # Interfaces, readonly, optional properties
│   ├── 201_IF.ts
│   ├── 202_IF_Part2.ts
│   ├── 203_IF_READONLY.ts
│   ├── 204_IF_READOnly.ts
│   ├── 205_Interface.ts
│   ├── 206_Hooks.ts
│   ├── 207_Bug_REPORT.ts
│   ├── 208_TestConfig.ts
│   ├── 209_REAL_EXAMPLE.ts
│   └── 210_Class_Interface.ts
├── tsconfig.json                         # TypeScript compiler configuration
├── package.json                          # Project manifest
├── package-lock.json                     # Locked dependencies
├── playwright.config.js                    # Playwright test configuration
├── .gitignore                              # Ignores node_modules, test-results, reports
└── README.md                               # You are here
```

---

## Quick Start

### Prerequisites

| Tool       | Version               | Purpose              |
|------------|-----------------------|----------------------|
| Node.js    | 18+ (LTS recommended) | Runs all `.js` files |
| npm        | Bundled with Node     | Package manager      |
| VS Code    | Latest                | Recommended editor   |
| Git        | Latest                | Clone the repo       |

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/Sharadvyas007/playwright2xlearning.git
cd playwright2xlearning

# 2. Install dependencies
npm install

# 3. Verify your setup
node chapter_01_basics/03_Verify_Setup.js

# 4. Run your first JS program
node chapter_01_basics/01_basic.js
```

### Verify it works

```bash
$ node chapter_01_basics/01_basic.js
Hello The Testing Academy
```

If you see that line, you are all set.

---

## Chapter Guide

### Chapter 01 — Basics

Foundational setup and first JavaScript programs.

| File | Topics | Description |
|------|--------|-------------|
| `01_basic.js` | `console.log` | The very first JavaScript program. |
| `02_JS.js` | `let`, arithmetic, `for` loops, functions | Variables, sum computation, and function calls inside loops. |
| `03_Verify_Setup.js` | `process.platform`, `process.arch`, `process.version` | Verifies the Node.js environment. |
| `04_HotCode.js` | Functions, `return` | Defines `add(a, b)`, loops from 0 to 100, and logs the result. |

```javascript
// 01_basic.js
console.log("Hello The Testing Academy");
```

```bash
node chapter_01_basics/01_basic.js   # → Hello The Testing Academy
```

---

### Chapter 02 — JavaScript Concepts

| File | Topics | Description |
|------|--------|-------------|
| `05_JS_Basics.js` | `var` declaration and reassignment | Demonstrates `var`, logging, and reassignment. |

---

### Chapter 03 — Identifiers & Naming Conventions

| File | Topics | Description |
|------|--------|-------------|
| `06_identifiers_rules.js` | Valid identifiers (`$`, `_`, letters, digits) | Rules for naming variables in JavaScript. |
| `07_identifiers_Part2.js` | Naming conventions | camelCase, snake_case, PascalCase, SCREAMING_SNAKE_CASE. |
| `08_comments.js` | Comments | Single-line, multi-line, and JSDoc-style comments. |
| `VS_Code_short_mac.md` | VS Code: shortcuts for macOS | 25+ keyboard shortcuts. |
| `VS_Code_short_windows.md` | VS Code: shortcuts for Windows | 25+ keyboard shortcuts. |

```javascript
// 07_identifiers_Part2.js
let firstName = "Sharad";          // camelCase
let first_name = "Sharad";         // snake_case
let UserProfile = "Admin";         // PascalCase
const MAX_SIZE = 100;              // SCREAMING_SNAKE_CASE
```

---

### Chapter 04 — Variables & Functions

Deep dive into `var`, `let`, `const`, hoisting, and the Temporal Dead Zone (TDZ).

| File | Topics | Description |
|------|--------|-------------|
| `09_var_let_const.js` | `var`, `let`, `const` comparison | Side-by-side declaration behavior. |
| `10_function.js` | Function declarations | Defines and invokes a `greet()` function. |
| `11_var_explained.js` | `var` function-scoped behavior | Global vs local `var` scope. |
| `12_let_people_love.js` | `let` block-scoping, TDZ | Block-scoped `let` and reassignment. |
| `13_const_explained.js` | `const` keyword | Immutable bindings with block scoping. |
| `14_var_functionascope.js` | `var` function scope vs global | Demonstrates scope leakage. |
| `15_let_scope.js` | `let` block scope vs function | `let` creates separate block bindings. |
| `16_Hoisting.js` | `var` hoisting | Hoisted to top with `undefined`. |
| `17_Hoisting_fn.js` | Function-scoped `var` hoisting | Hoisting inside functions. |
| `18_let_Hoisting.js` | `let` hoisting and TDZ | Throws `ReferenceError` in the TDZ. |
| `19_let_Hoisting_block.js` | Block-level TDZ and shadowing | Inner-block `let` shadows outer variable. |
| `20_let_const.js` | `const` hoisting and TDZ | Same TDZ rules apply to `const`. |
| `21_Jr_QA.js` | Junior QA interview | Practical TDZ trap with `const`. |

```javascript
// 18_let_Hoisting.js — TDZ in action
console.log(score);  // ❌ ReferenceError: Cannot access 'score' before initialization
let score = 100;
```

**Key Concepts:**

| Declaration | Scope | Hoisted | Initialized | Can redeclare? |
|-------------|-------|---------|-------------|----------------|
| `var` | Function | Yes | `undefined` | Yes |
| `let` | Block | Yes | No (TDZ) | No |
| `const` | Block | Yes | No (TDZ) | No |

---

### Chapter 05 — Literals & Data Types

| File | Topics | Description |
|------|--------|-------------|
| `22_Literal.js` | String, boolean, number, null, undefined | Basic literals with `typeof`. |
| `23_null_undefined.js` | `null` vs `undefined` | Definitions, `==` vs `===`, use cases. |
| `24_null.js` | `null`, `undefined`, `0`, `""` | Practical comparison of "no value" states. |
| `25_Literal_All.js` | Integer literals | Decimal, hex, octal, exponential. |
| `26_Literal_Number_All.js` | Complete number types | Binary, octal, hex, float, BigInt, Infinity, NaN. |
| `27_Strings.js` | Single vs double quotes | Both create strings; `typeof` on strings. |
| `28_Template_Literal.js` | Template literals with `${}` | Dynamic URLs, locators, log messages for Playwright. |
| `29_Backtick_single_double.js` | `'`, `"`, `` ` `` comparison | When to use each quote style. |

```javascript
// 28_Template_Literal.js
let user = "Sharad";
let url = `https://api.example.com/users/${user}`;
console.log(url);  // → https://api.example.com/users/Sharad
```

---

### Chapter 06 — Operators

| File | Topics | Description |
|------|--------|-------------|
| `30_operators.js` | Assignment (`=`) | Basic assignment and re-assignment. |
| `31_Arithmetic_OP.js` | `+`, `-`, `*`, `/` | Basic arithmetic operations. |
| `32-_Modulus_OP.js` | Modulus (`%`) | Even/odd detection and remainder. |
| `33_Expo_OP.js` | Exponentiation (`**`) | Raising numbers to a power. |
| `34_iq.JS` | Compound assignment | `+=`, `-=`, `*=`, `/=`, `%=`. |
| `35_Comparision_OP.js` | `>`, `<`, `>=`, `<=`, `==`, `===` | Relational and equality operators. |
| `36_Comparison__Strict_loose.js` | Strict (`===`) vs loose (`==`) | Type coercion vs strict comparison. |
| `37_IQ__Loose_Strict.js` | IQ questions | Tricky coercion edge cases. |
| `38_Confusing_Comparison.js` | Confusing comparisons | Transitivity traps, NaN, null weirdness. |
| `39_Logical_OP.js` | `&&`, `||`, `!` | Logical operators with booleans. |
| `40_String_Con_OP.js` | String concatenation | Building strings with `+` and `+=`. |
| `41_Ternary_OP.js` | Ternary (`? :`) | Nested conditions, SLA checks, env URLs. |
| `42_Type_OP.js` | `typeof`, `instanceof` | Type checking and the `typeof null === "object"` quirk. |
| `43_Incre_Decre_OP.js` | `++`, `--` | Pre-increment, post-increment, pre-decrement, post-decrement. |
| `44_Null_OP.js` | Null comparisons | `null >= 0`, `null === 0`, and `??` (nullish coalescing). |
| `45_Post_Increment.js` | Post-increment behavior | Assign-then-increment demonstration. |
| `46_IQ_INCREMENT_D.js` | IQ on increment/decrement | Tracing final values with mixed operators. |
| `47_Advance_ID_.js` | Advanced expressions | Complex `++a + ++a` evaluations. |

```javascript
// 36_Comparison__Strict_loose.js
console.log(42 == "42");   // true  — loose equality coerces types
console.log(42 === "42");  // false — strict equality checks type + value
```

**Best Practice:** Always use `===` and `!==` to avoid unexpected coercion.

---

### Chapter 07 — If-Else Statements

Control flow using conditional if-else logic.

| File | Topics | Description |
|------|--------|-------------|
| `48_IF_Else.js` | Basic if-else | Simple age check. |
| `49_If_elseif_else.js` | If-else if-else ladder | Grade calculator based on score ranges. |
| `50_REAL_IF_ELSE.js` | Nested if-else with user roles | Login + role-based access (admin, editor, viewer). |
| `51_API_IF_Else.js` | API status code handling | Simulates API response validation. |
| `52_IQ_IF_ELSE.js` | Truthy and falsy values | Which values are truthy vs falsy. |
| `53_IF_ELSE_real.js` | Logical operators in conditions | Real-world login check with `&&`. |
| `54_IQ.js` | Single-line if without braces | Valid but risky readability. |
| `55_IE.js` | Standalone single if | Simple guard conditions. |
| `56_IQ_EVEN_ODD.js` | Even / odd check | Modulo operator inside if-else. |
| `57_Grade_Calc.js` | Grade calculator with ranges | A–F grade logic. |
| `58_LEAP_YEAR.js` | Leap year logic | Divisible by 4 and not 100, or divisible by 400. |
| `58_Task_20may.js` | Class task (20 May) | Even/odd, grades, leap year combined. |
| `Task_21_May.js` | Class task (21 May) | HTTP status, test verdict, bug severity, build health. |
| `Practice_IF_ELSE.js` | Practice exercises | Combined even/odd, grade, leap year practice. |
| `iF_else_Pratcie.js` | Extra practice | Expected vs actual result, HTTP status categorization. |
| `task_test.js` | Task test | Additional if-else practice exercises. |

```javascript
// 49_If_elseif_else.js — Grade calculator
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");  // ← prints this
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

---

### Chapter 08 — Switch Statements

Control flow using switch-case constructs.

| File | Topics | Description |
|------|--------|-------------|
| `59_Switch.js` | Basic switch with `break` | Day-of-week switch. |
| `60_No_Break.js` | Fall-through behavior | What happens when `break` is omitted. |
| `61_Default.js` | Switch with `default` | Handling invalid day values. |
| `62_REAL_TIME_EXAMPLE.js` | API response code validation | HTTP status codes with switch. |
| `63_Switch_Group.js` | Grouped case labels | Browser engine families. |
| `64_IQ_Switch.js` | Missing `break` fall-through | IQ trap: starting from `"banana"`. |
| `65_IQ2.js` | `switch(true)` with ranges | Alternative to if-else ladders. |
| `66_IQ3.js` | Duplicate case behavior | Only the first match executes. |
| `67_IQ4.js` | Type coercion in switch | Switch uses strict equality (`===`). |
| `Switch_Cases_Test.js` | HTTP status code switch | Real-world API status code validation (200, 404, 500, etc.). |
| `task_live_test.js` | Live task | Switch-case live coding practice. |

```javascript
// 62_REAL_TIME_EXAMPLE.js
let statusCode = 200;
switch (statusCode) {
    case 200:
        console.log("OK");
        break;
    case 404:
        console.log("Not Found");
        break;
    default:
        console.log("No match");
}
```

---

### Chapter 09 — User Input

Reading user input in JavaScript — browser and Node.js environments.

| File | Topics | Description |
|------|--------|-------------|
| `68_User_Input.js` | Browser `prompt()` | Browser dialog for user input. |
| `69_NODE_Readline.js` | Node.js `readline` module | CLI input with `createInterface`. |
| `70_Prompt_Sync.js` | `prompt-sync` package | Synchronous CLI input in Node.js. |

```javascript
// 69_NODE_Readline.js
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter a number: ", (num) => {
    console.log(num % 2 === 0 ? "Even" : "Odd");
    rl.close();
});
```

---

### Chapter 10 — Loops

Repeating code blocks using `for`, `while`, and `do...while`.

| File | Topics | Description |
|------|--------|-------------|
| `71_For_loop.js` | Introduction to repetition | Manual `console.log` vs loop. |
| `72_For_loop.js` | Basic `for` loop | Syntax with initialization, condition, increment. |
| `73_For_Loop2.js` | Loop variables and ranges | Custom variable names and ranges. |
| `74_IQ.js` | For loop edge cases | Infinite loops, conditions that never execute. |
| `75_For_OF_IN_EACH.js` | `while` loop basics | Runs while a condition is true. |
| `76_While.js` | `while` loop examples | Init, condition, update pattern. |
| `77_Do_While.js` | `do...while` basics | Executes at least once. |
| `78_Do_While.js` | `do...while` retry pattern | Practical retry logic. |
| `79_IQ.js` | While loop patterns | Countdown and star pyramid. |
| `80_IQ.js` | Do-while edge case | Executes once even if condition is false. |
| `81_IQ.js` | `continue` statement | Skips the current iteration. |
| `82_IQ.js` | Do-while missing increment | Common infinite loop bug. |
| `Task_22nd_may.js` | Class task (22 May) | Triangle check and FizzBuzz. |
| `loops_practice.js` | Loop practice | Number sequences, stars, count, sum, even numbers. |

```javascript
// 72_For_loop.js
for (let i = 0; i <= 5; i++) {
    console.log(i);  // → 0 1 2 3 4 5
}
```

---

### Chapter 11 — Arrays

Working with ordered collections — creation, access, mutation, searching, iteration, transformation.

| File | Topics | Description |
|------|--------|-------------|
| `83_Arrays.js` | Array basics | Empty arrays, literal arrays, mixed types. |
| `84_Arrays.js` | Array creation | Literal, constructor, `Array.of()`, `Array.from()`. |
| `85_Access_Array.js` | Index access, `.at()`, mutation | Positive index, `.at(-1)` for last element. |
| `86_Arrays_Adding_Remove.js` | `push`, `pop`, `unshift`, `shift` | Add/remove from both ends. |
| `87_Adding_Remove2.js` | `splice` | Insert, delete, replace in-place. |
| `88_REAL_Example.js` | Real-world manipulation | Browser list management. |
| `89_Searching.js` | `indexOf`, `includes`, `find` | Searching by value or predicate. |
| `90_Iterate.js` | `for`, `for...of`, `forEach` | Five ways to iterate arrays. |
| `91_Transform_Arrays.js` | `map`, `filter`, `reduce`, `flat` | Transform and aggregate arrays. |
| `92_Arrays.js` | `sort` | Lexicographic vs numeric sorting. |
| `93_Array_Slicing.js` | `slice` vs `splice` | Extracting vs removing sub-arrays. |
| `94_Concat_array.js` | `concat`, spread, `join` | Combining and stringifying arrays. |
| `95_Array_Checking.js` | `Array.isArray`, `every`, `some` | Validation and predicate checks. |
| `Practice_arr.js` | Practice exercises | Index search, length, even/odd count, sum, largest. |
| `Arrays_Practice.js` | Array practice | Index access, length, mutation, adding elements. |

```javascript
// 91_Transform_Arrays.js
let scores = [85, 40, 90, 55];
let passed = scores.filter(s => s >= 60);   // [85, 90]
let total  = scores.reduce((a, b) => a + b, 0); // 270
console.log(passed, total);
```

---

### Chapter 12 — Functions

Deep dive into JavaScript functions — declarations, expressions, arrow functions, scope, closures.

| File | Topics | Description |
|------|--------|-------------|
| `96_Functions.js` | Function definition & call | Step-by-step introduction. |
| `97_Type1_Fn_Basic_Functions.js` | Type 1 — no param, no return | Logs a message; returns `undefined`. |
| `98_Type2_Fn_With_Param_No_Return.js` | Type 2 — parameters, no return | Accepts arguments and logs results. |
| `99_Type3_Fn_without_Param_Return_Type.js` | Type 3 — no param, with return | Returns a value without arguments. |
| `100_Type4_Fn_With_Param_With_Return.js` | Type 4 — params + return | Classic parameterized function with `return`. |
| `101_Template_literal.js` | Template literals in functions | Dynamic greeting with `${}`. |
| `102_Fn_Expression.js` | Function expressions | Anonymous functions assigned to variables. |
| `103_Arrow_Fn.js` | Arrow functions (ES6) | Concise syntax, implicit return. |
| `104_Arrow_Fn_REAL.js` | Real-world arrow function | API status validator in all three forms. |
| `105_IIFE.js` | IIFE | Self-executing anonymous functions. |
| `106_Default_Param_Fn.js` | Default parameters | `function retry(name, max = 3)`. |
| `107_IQ.js` | IQ — formatted return | `runTest(name, status, duration)`. |
| `108_Rest_Param_Fn.js` | Rest parameters | `...results` collects variable arguments. |
| `109_IQ.js` | IQ — multi-return logic | `getStatus(code)` with early returns. |
| `110_Spead_IQ.js` | Spread with functions | `add(...nums)` spreads an array into args. |
| `111_Scope._Fn.js` | Scope — global vs local | What a function can reach. |
| `112_IQ.js` | IQ — nested scope | Inner functions access outer variables. |
| `113_Closure.js` | Closure basics | Inner function remembers outer variables. |
| `114_Closure.js` | Closure practical | `makeCounter` with increment/decrement/get. |
| `115_API_REAL_Closure.js` | Real-world closure | API retry tracker with attempt counter. |
| `116_Higher_Order_Fn.js` | Higher-order functions | Accepting functions as arguments. |
| `117_Pure_Fn.js` | Pure vs impure functions | Predictable output and no side effects. |
| `fn_practices.js` | Function practice | All four types, return vs `console.log`. |
| `Arrow_Fun_pratice.js` | Arrow function practice | Simple arrow functions, age check, add, multiply, greet. |
| `day_2_practice.js` | Day 2 practice | Eligibility, voting, even/odd, login validation, marks, status code. |
| `function_practice_obj.js` | Functions with objects | Passing objects to functions, returning objects, and mutating properties. |

```javascript
// 104_Arrow_Fn_REAL.js
const validateStatusCode = (code) => code >= 200 && code < 300;
console.log(validateStatusCode(200)); // true
console.log(validateStatusCode(404)); // false

// 114_Closure.js
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++; },
        decrement() { count--; },
        get()       { return count; }
    };
}
let c = makeCounter(0);
c.increment();
c.increment();
console.log(c.get()); // 2
```

---

### Chapter 13 — Strings

Deep dive into JavaScript strings — literals, properties, searching, substrings, transformations.

| File | Topics | Description |
|------|--------|-------------|
| `118_Strings.js` | String literals | Single, double, backticks, multiline. |
| `119_String_Properties.js` | `length`, index access | `str.length`, `.at(-1)`, `charAt`, `charCodeAt`. |
| `120_Search_Check_Str.js` | `includes`, `startsWith`, `indexOf` | Searching and checking substrings. |
| `121_Substring.js` | `slice` vs `substring` | Negative index support vs argument swapping. |
| `122_Transform_Str.js` | `toUpperCase`, `trim`, `replace` | Case, whitespace, single/global replacement. |
| `123_SC.js` | `replaceAll`, `concat`, conversion | Global replace, joining, string/number conversion. |
| `Task_3_June.js` | Reverse, palindrome, anagram | `split/reverse/join`, manual loop, sort comparison. |
| `Practice_str.js` | Practice exercise | Count vowels in a string. |

```javascript
// 121_Substring.js
let str = "Login_Test_Pass_001";
console.log(str.slice(0, 5));       // "Login"
console.log(str.slice(-3));          // "001" — last 3 chars
console.log(str.substring(10, 6));   // "Test" — silently swaps args!
```

**Rule of thumb:** Use `slice` — it supports negative indexes and never swaps arguments.

---

### Chapter 14 — Objects

Deep dive into JavaScript objects — creation, access, methods, destructuring, spread, getters/setters.

| File | Topics | Description |
|------|--------|-------------|
| `124_Objects.js` | Object literals | Empty object, key-value pairs, JSON vs JS. |
| `125_Objects2.js` | Key-value pairs, dot vs bracket | Reference equality behavior. |
| `126_Objects_Creation.js` | Creation patterns | Literals, constructors, dynamic keys. |
| `127_Objects_REAL.js` | Real-world config | Build, delete, and conditionally access config. |
| `128_Primitive_Ref.js` | Primitive vs reference | Copied by value vs copied by reference. |
| `129_Ob_Examples.js` | JSON vs JS object syntax | Quoted keys (JSON) vs unquoted keys (JS). |
| `130_IQ.js` | Dynamic access | `obj[key]`, `Object.getOwnPropertyDescriptor`. |
| `131_Object_Fn.js` | Methods inside objects | Functions as object properties. |
| `132_Obj_Decon.js` | Destructuring | Rename, default values, nested destructuring. |
| `133_Spead.js` | Object spread | Shallow copy, merge, `const` reassignment block. |
| `134_Objects_GET_SET_Methods.js` | Getters and setters | `get`/`set` accessors and `this`. |
| `135_IQ.js` | Iterate objects | `Object.keys/values/entries`, `for...in`. |
| `136_Obj_REAL.js` | Real-world objects | ENV config, expected response, test config. |
| `137_Let_const_obj.js` | `let` vs `const` with objects | Mutate properties freely; `const` blocks reassignment. |
| `Obj_Practice.js` | Object practice | Dot access, mutation, function + object, dynamic key access. |

```javascript
// 128_Primitive_Ref.js
let a = 10;
let b = a;          // copy the VALUE
b = 99;
console.log(a);     // 10 ← a is untouched

let obj1 = { val: 10 };
let obj2 = obj1;    // copy the REFERENCE (same object)
obj2.val = 99;
console.log(obj1.val); // 99 ← both names point to one object

// Independent copy:
let obj3 = { ...obj1 };
obj3.val = 1;
console.log(obj1.val); // 99 ← obj3 is its own object
```

---

### Chapter 15 — 2D Arrays

Working with two-dimensional arrays — grid traversal, nested loops, test matrices, patterns.

| File | Topics | Description |
|------|--------|-------------|
| `138_2D_Array.js` | 2D array basics | Grid literal, nested `for`, `grid[i][j]` access. |
| `139_2d.js` | Rows × columns | `grid.length` vs `grid[0].length`. |
| `140_REAL.js` | Real-world test matrix | Test results with nested loops and `forEach`. |
| `141_2d_Array_Fn.js` | `map` + `reduce` on rows | Row sums, filtering failed tests. |
| `142_IQ_Right_Pattern_Py.js` | Right-triangle stars | Nested-loop pattern programming. |
| `2D_Array_practice.js` | 2D array practice | Grid traversal and manipulation exercises. |
| `8th_june_task.js` | Class task (8 June) | Reverse star triangle and full pyramid. |

```javascript
// 138_2D_Array.js
let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
    }
}
// → 10, 20, 30, 40, 50, 60, 70, 80, 90
```

### Chapter 16 — Callbacks

Understanding callback functions — the foundation of asynchronous JavaScript.

| File | Topics | Description |
|------|--------|-------------|
| `143_Callback.js` | Callback basics | Passing named, anonymous, and arrow functions as arguments. |
| `144_CB.js` | Simple callback pattern | Basic callback invocation inside a test wrapper. |
| `145_CB_Fn.js` | Real-world callback | Cafe order simulation with named and anonymous callbacks. |
| `146_PW_CB.js` | Playwright-style callback | Custom `test(name, callback)` wrapper mimicking test frameworks. |
| `147_JS_CB.js` | Async introduction | `setTimeout` callback and the event loop order. |
| `148_Sync_CB.js` | Synchronous callback | `forEach` iteration with an inline callback function. |
| `149_Async_CB.js` | Asynchronous callback | `setTimeout` deferred execution vs immediate logs. |
| `150_CB_Hell.js` | Callback hell (4-step) | Nested async callbacks for login flow — pyramid begins. |
| `151_CB_Hell_20_Steps.js` | Callback hell (24-step) | Full e-commerce checkout pyramid — the "Pyramid of Doom". |
| `152_CB_Parameter.js` | Callbacks with parameters | Passing data into callbacks and tester greeting examples. |
| `153_CB_Return.js` | Callbacks that return | Higher-order `calculate` with an operation callback and nesting. |

```javascript
// 150_CB_Hell.js — 4-step nested async callback
openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test Complete!");
            });
        });
    });
});
```

---

### Chapter 17 — Promises

Understanding JavaScript Promises — the modern way to handle asynchronous operations.

| File | Topics | Description |
|------|--------|-------------|
| `154_Promise.js` | Promise basics | Creating a promise with `resolve` and `reject`. |
| `155_Promise_REAL_API.js` | Real-world API promise | Simulating an API call that resolves with status and body. |
| `156_Promise_REAL_API_PART2.js` | API promise patterns | Multiple `.then()` chaining and error handling. |
| `157_Finally.js` | `.finally()` | Cleanup logic that runs regardless of resolve or reject. |
| `158_Call_Py_Problem.js` | Callback vs Promise | Converting callback hell into flat promise chains. |
| `159_Promise_ALL.js` | `Promise.all` & `Promise.allSettled` | Running multiple promises in parallel and handling mixed results. |
| `160_Promise_IQ.js` | Promise IQ | Chaining, error propagation, `resolve`/`reject` shortcuts, and `allSettled`. |

```javascript
// 154_Promise.js
let order = new Promise(function (resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("Pizza is delivered. Food is ready.");
    } else {
        reject("Order cancelled because of rain.");
    }
});
console.log(order);
```

```javascript
// 159_Promise_ALL.js — Promise.allSettled for test reports
Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
});
```

---

### Chapter 18 — Async/Await

Writing asynchronous code that reads like synchronous code using `async` and `await`.

| File | Topics | Description |
|------|--------|-------------|
| `161_Async.js` | `async` / `await` basics | Declaring async functions and awaiting promises. |
| `162_Aysnc_P2.js` | Error handling with `try/catch` | Catching rejected promises inside async functions. |
| `163_PyODom.js` | Converting callbacks to async/await | Flattening the "Pyramid of Doom" into sequential `await` calls. |
| `164_Async_Ex.js` | Async execution flow | Understanding when `await` pauses and when it doesn't. |
| `165_AA_Seq.js` | Sequential async | Running dependent async steps one after another. |
| `165_AA_Parallel.js` | Parallel async with `Promise.all` | Running independent API calls in parallel inside an async function. |
| `166_IQ.js` | Async/await IQ | Common traps and edge cases with `async` functions. |
| `167_ACLogin.js` | Playwright async/await | Real-world Playwright test patterns with `test.step` and `await`. |

```javascript
// 163_PyODom.js — Flattened callback pyramid
async function runTheE2E() {
    let msg1 = await openBrowser();
    console.log("Step 1:", msg1);

    let msg2 = await goToLogin();
    console.log("Step 2:", msg2);

    let msg3 = await enterCredentials();
    console.log("Step 3:", msg3);

    let msg4 = await clickLogin();
    console.log("Step 4:", msg4);
}
runTheE2E();
```

---

### Chapter 19 — Playwright Basics

First real-world end-to-end test using Playwright — automating a full e-commerce checkout flow.

| File | Topics | Description |
|------|--------|-------------|
| `tta-cart.spec.ts` | E2E test with Playwright | Login, add to cart, checkout, and order completion on TTACart. |

**Test Flow:**
1. Navigate to `https://app.thetestingacademy.com/playwright/ttacart/`
2. Login with `standard_user` / `tta_secret`
3. Add two items to cart (T-Shirt Red, Bike Light)
4. Go to cart and click checkout
5. Fill shipping details (First Name, Last Name, Postal Code)
6. Continue and finish the order
7. Verify checkout complete

```bash
# Run the TTACart test
npx playwright test tta-cart.spec.ts

# Run in headed mode (see the browser)
npx playwright test tta-cart.spec.ts --headed

# Run with HTML report
npx playwright test tta-cart.spec.ts --reporter=html
```

---

### Chapter 20 — Export / Import

ES module patterns — named imports, default imports, and aliased imports.

| File | Topics | Description |
|------|--------|-------------|
| `168_EXPORT_IMPORT.js` | Named `import` | Importing named exports from utility modules. |
| `169_Utils.js` | Aliased imports (`as`) | Importing the same export with different aliases. |
| `170_logger.js` | Default `import` | Importing a default-exported logger function. |

```javascript
// 168_EXPORT_IMPORT.js
import { add, subtract } from './math.js';
console.log(add(2, 3));        // 5
console.log(subtract(5, 2));   // 3
```

---

### Chapter 21 — Classes and Objects

Object-Oriented Programming fundamentals — classes, constructors, private fields, and static members.

| File | Topics | Description |
|------|--------|-------------|
| `171_Class_Object.js` | Class definition | Empty class with attributes and behaviours. |
| `172_Class_Object2.js` | Constructor | `constructor()` runs automatically on `new`. |
| `173_Car.js` | Constructor with parameters | Passing arguments to constructor (`new Car("Model S")`). |
| `174_REAL_Browser.js` | Real-world class | `TestCase` class with constructor and `display()` method. |
| `175_IQ.js` | Interview question — Browser class | Parametric constructor launching browser instances. |
| `176_Private_Public.js` | Private fields (`#`) | Hiding sensitive data with private class fields. |
| `177_Static.js` | Static properties & methods | Shared class-level data and behaviour. |
| `178_Static.js` | Static vs instance | Accessing static members on the class, not the object. |

```javascript
// 174_REAL_Browser.js — Real-world TestCase class
class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() {
        console.log(this.name + " → " + this.status + " → " + this.priority);
    }
}
let loginTC = new TestCase("Login Test", "Pass", "P0");
loginTC.display();  // Login Test → Pass → P0
```

```javascript
// 176_Private_Public.js — Private fields
class Credentials {
    #apiKey;
    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;
    }
    getAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}
let cred = new Credentials("admin", "secret_key_1234");
console.log(cred.getAuthHeader());  // Bearer secret_key_1234
```

---

### Chapter 22 — Encapsulation

Data hiding and controlled access using getters, setters, and private fields.

| File | Topics | Description |
|------|--------|-------------|
| `179_Ecap.js` | Encapsulation basics | Private fields with public getter/setter methods. |
| `180_REAL_EXAMPLE` | Real-world example | Encapsulated API config with validation. |
| `181_Ecap_Car.js` | Car class encapsulation | Speed validation via setter methods. |
| `182_ECap_Bank.js` | Bank account encapsulation | Balance protection with deposit/withdraw rules. |

---

### Chapter 23 — Inheritance

Reusing and extending class behaviour — single, multiple, multilevel, and hierarchical inheritance patterns.

| File | Topics | Description |
|------|--------|-------------|
| `183_Single_Inheritance.js` | Single inheritance basics | `extends` keyword and `super()` call. |
| `184_SI_Example.js` | Single inheritance example | QA Engineer extends Employee. |
| `185_Single_Inheritance_Con.js` | Constructor inheritance | Passing parameters to parent constructor. |
| `186_IQ.js` | Inheritance IQ | Method overriding and `super` usage. |
| `187_IQ2.js` | Inheritance IQ 2 | Shadowing and prototype chain traps. |
| `188_REAL_PageObject_Model.js` | Real-world POM | Page Object Model using inheritance. |
| `189_Multiple_Inheritance.js` | Multiple inheritance | Mix-ins and composition patterns. |
| `190_Multiple_Level_Inheritance.js` | Multilevel inheritance | Grandparent → Parent → Child chain. |
| `191_Hierarchial_Inheritance.js` | Hierarchical inheritance | One parent, multiple child classes. |

```javascript
// 183_Single_Inheritance.js
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}
let d = new Dog();
d.speak();  // Dog barks
```

---

### Chapter 24 — Polymorphism

Runtime polymorphism through method overriding.

| File | Topics | Description |
|------|--------|-------------|
| `192_Method_Overriding.js` | Method overriding | Child class overrides parent method. |

```javascript
// 192_Method_Overriding.js
class Browser {
    launch() { console.log("Launching generic browser"); }
}
class Chrome extends Browser {
    launch() { console.log("Launching Chrome"); }
}
new Chrome().launch();  // Launching Chrome
```

---

### Chapter 25 — OOP Interview Questions

Hands-on OOP coding exercises for interviews.

| File | Topics | Description |
|------|--------|-------------|
| `EX1.js` | Design a `Student` class | Encapsulation + inheritance exercise. |
| `EX2.js` | Design a `Shape` hierarchy | Polymorphism with area calculation. |
| `EX3.js` | Design a `BankAccount` | Encapsulation with transaction history. |
| `EX4.js` | Design a `Vehicle` fleet | Hierarchical inheritance exercise. |

---

### Chapter 26 — TypeScript Basics

Type-safe JavaScript — static types, interfaces, generics, and compilation.

| File | Topics | Description |
|------|--------|-------------|
| `193_TS.ts` | TypeScript intro | Why TypeScript and basic type annotations. |
| `194_TS_HelloWorld.js` | Hello World in JS | JavaScript version of the hello-world example. |
| `194_TS_HelloWorld.ts` | First TS program | Compiling and running `.ts` files. |
| `195_TS_Part1.ts` | Primitive types | `string`, `number`, `boolean`, `any`, `unknown`. |
| `196_TS_Part2,ts` | Arrays & tuples | Typed arrays and fixed-length tuples. |
| `197_TS_Part2.ts` | Functions in TS | Parameter and return type annotations. |
| `198_Part3.ts` | Objects & enums | Typed object shapes and enum declarations. |
| `199_IQ.ts` | TypeScript IQ 1 | Common type inference traps. |
| `200_IQ.ts` | TypeScript IQ 2 | `any` vs `unknown` and strict mode. |

```bash
# Compile TypeScript
npx tsc chapter_26_Typescript/194_TS_HelloWorld.ts

# Run with ts-node
npx ts-node chapter_26_Typescript/194_TS_HelloWorld.ts
```

---

### Chapter 27 — TypeScript Interfaces

Defining contracts with interfaces — optional properties, readonly modifiers, and extension.

| File | Topics | Description |
|------|--------|-------------|
| `201_IF.ts` | Interface basics | Declaring object shapes with `interface`. |
| `202_IF_Part2.ts` | Optional & nested properties | `?` for optional fields and nested interfaces. |
| `203_IF_READONLY.ts` | Readonly properties | Immutable interface fields with `readonly`. |
| `204_IF_READOnly.ts` | Readonly arrays & objects | Deep readonly patterns. |
| `205_Interface.ts` | Method signatures in interfaces | Function declarations and arrow-function syntax inside interfaces. |
| `206_Hooks.ts` | Callable interfaces & test hooks | Function-type interfaces for `beforeEach`/`afterEach` patterns. |
| `207_Bug_REPORT.ts` | Interface for bug reports | Structuring bug-report data with typed arrays. |
| `208_TestConfig.ts` | Optional config fields | Playwright-style config objects with optional `timeout` and `retries`. |
| `209_REAL_EXAMPLE.ts` | Interface inheritance | Extending base interfaces for Page Object Model shapes. |
| `210_Class_Interface.ts` | Class implements interface | Enforcing contracts on classes with `implements`. |

```typescript
// 201_IF.ts
interface User {
    name: string;
    age: number;
    isAdmin?: boolean;
}
let u: User = { name: "Sharad", age: 30 };
```

---

## Playwright Testing

This repository includes a full **Playwright** setup for end-to-end browser automation.

| File | Purpose |
|------|---------|
| `playwright.config.js` | Cross-browser config (Chromium, Firefox, WebKit) with HTML reporting |
| `chapter_19_playwright_basics/tta-cart.spec.ts` | Real E2E test — TTACart checkout flow |
| `tests/example.spec.js` | Sample E2E tests on [playwright.dev](https://playwright.dev/) |
| `package.json` | `@playwright/test` as a dev dependency |

### Run Tests Locally

```bash
# Install Playwright browsers (one-time)
npx playwright install

# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tta-cart.spec.ts

# Run in headed mode (visible browser)
npx playwright test tta-cart.spec.ts --headed

# Run with HTML report
npx playwright test --reporter=html

# Interactive UI mode
npx playwright test --ui

# Debug with inspector
npx playwright test --debug

# Record a new test
npx playwright codegen <url>
```

### Configuration Highlights

- **Parallel execution:** `fullyParallel: true`
- **Retry on CI:** `retries: 2` when `CI` env is set
- **Cross-browser:** Desktop Chrome, Firefox, and Safari
- **Tracing:** Enabled on first retry for debugging

---

## CI / CD

A GitHub Actions workflow (`.github/workflows/playwright.yml`) automatically runs the Playwright test suite on every **push** and **pull request** to `main` and `master`.

| Step | Action |
|------|--------|
| Checkout code | `actions/checkout@v4` |
| Setup Node.js LTS | `actions/setup-node@v4` |
| Install dependencies | `npm ci` |
| Install browsers | `npx playwright install --with-deps` |
| Run tests | `npx playwright test` |
| Upload report | `actions/upload-artifact@v4` (retained for 30 days) |

---

## Roadmap

### Completed

- [x] Chapter 1 — Basics: Node.js setup, first programs
- [x] Chapter 2 — JavaScript Concepts: Variables & output
- [x] Chapter 3 — Identifiers & Naming: Rules, conventions, comments
- [x] Chapter 4 — var / let / const: Hoisting, TDZ, scope
- [x] Chapter 5 — Literals: null, undefined, numbers, strings, template literals
- [x] Chapter 6 — Operators: Arithmetic, comparison, logical, ternary, increment/decrement
- [x] Chapter 7 — If / Else: Control flow, truthy/falsy, real-world conditions
- [x] Chapter 8 — Switch: Cases, fall-through, grouped labels, IQ traps
- [x] Chapter 9 — User Input: prompt, readline, prompt-sync
- [x] Chapter 10 — Loops: for, while, do-while, break, continue
- [x] Chapter 11 — Arrays: Creation, mutation, search, iteration, transformation, sort
- [x] Chapter 12 — Functions: Types, arrow, IIFE, default/rest/spread, scope, closures, HOF, pure
- [x] Chapter 13 — Strings: Quotes, search, slice, transform, conversion
- [x] Chapter 14 — Objects: Literals, reference, destructuring, spread, getters/setters
- [x] Chapter 15 — 2D Arrays: Grids, nested loops, test matrices, patterns
- [x] Chapter 16 — Callbacks: Sync, async, callback hell, pyramid of doom
- [x] Chapter 17 — Promises: resolve, reject, chaining, Promise.all, Promise.allSettled
- [x] Chapter 18 — Async/Await: sequential, parallel, error handling, Playwright patterns
- [x] Chapter 19 — Playwright Basics: first real E2E test (TTACart checkout flow)
- [x] Chapter 20 — Export / Import: named, default, and aliased imports
- [x] Chapter 21 — Classes and Objects: constructors, private fields, static members
- [x] Chapter 22 — Encapsulation: getters, setters, data hiding
- [x] Chapter 23 — Inheritance: single, multiple, multilevel, hierarchical
- [x] Chapter 24 — Polymorphism: method overriding
- [x] Chapter 25 — OOP Interview Questions: hands-on coding exercises
- [x] Chapter 26 — TypeScript Basics: types, generics, compilation
- [x] Chapter 27 — TypeScript Interfaces: contracts, readonly, optional
- [x] Playwright setup with sample tests
- [x] GitHub Actions CI workflow

### Coming Soon

- [ ] Advanced Playwright — Page Object Model, fixtures, API testing
- [ ] AI Agents — Self-healing tests, MCP-driven STLC
- [ ] Interview Q&A Bank

---

## Useful Commands

### JavaScript

```bash
node <file.js>                           # Run any chapter file
```

### TypeScript

```bash
npx tsc <file.ts>                        # Compile TS -> JS
npx ts-node <file.ts>                    # Run TS directly
npx tsc --init                           # Create tsconfig.json
npx tsc                                  # Compile all TS files in project
```

### Playwright

```bash
npm init playwright@latest               # Scaffold Playwright project
npx playwright test                      # Run all tests
npx playwright test --ui                 # Interactive UI mode
npx playwright test --debug              # Debug with inspector
npx playwright codegen <url>             # Record a test
npx playwright show-report               # Open HTML report
npx playwright show-trace <trace.zip>    # Open trace viewer
```

---

## Author

**Sharad Pareek**

*Happy Learning!*
