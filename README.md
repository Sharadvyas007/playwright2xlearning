# Playwright Learning

A collection of Playwright and JavaScript concept exercises for learning end-to-end testing and core JavaScript fundamentals.

## Project Structure

```
.
├── .gitignore
├── README.md
├── .vscode/
│   └── launch.json              # VS Code: debug configuration for Node.js
├── chapter_01_basics/
│   ├── 01_basic.js            # First JavaScript code (console.log)
│   ├── 02_JS.js               # Variable declaration, arithmetic, loops, and functions
│   ├── 03_Verify_Setup.js     # Verify Node.js environment (process.platform, process.arch, process.version)
│   └── 04_HotCode.js          # Function definition and hot code reloading
├── chapter_02_Javascript_Concepts.js/
│   └── 05_JS_Basics.js        # Variable declaration with var and reassignment
├── chapter_03_identifiers_rules.js/
│   ├── 06_identifiers_rules.js   # Identifier naming rules with valid/invalid examples
│   ├── 07_identifiers_Part2.js   # Naming conventions — camelCase, snake_case, PascalCase, SCREAMING_SNAKE_CASE, Hungarian
│   ├── 08_comments.js            # Single-line, multi-line, and JSDoc-style comments
│   ├── VS_Code_short_mac.md      # VS Code: shortcuts for Mac
│   └── VS_Code_short_windows.md  # VS Code: shortcuts for Windows
├── chapter_04_Javascript_Concept.js/
│   ├── 09_var_let_const.js         # var, let, const comparison with loops and functions
│   ├── 10_function.js              # Function examples
│   ├── 11_var_explained.js         # var function-scoped behavior and hoisting
│   ├── 12_let_people_love.js       # let block-scoping, TDZ, and reassignment
│   ├── 13_const_explained.js       # const keyword and block scoping
│   ├── 14_var_functionascope.js    # var function scope vs global scope demonstration
│   ├── 15_let_scope.js             # let block scope vs function scope demonstration
│   ├── 16_Hoisting.js              # var hoisting with undefined initialization
│   ├── 17_Hoisting_fn.js           # Function-scoped var hoisting inside functions
│   ├── 18_let_Hoisting.js          # let hoisting and Temporal Dead Zone (TDZ)
│   ├── 19_let_Hoisting_block.js    # let block-level TDZ and shadowing
│   ├── 20_let_const.js             # const hoisting and TDZ behavior
│   └── 21_Jr_QA.js                 # Junior QA interview — const TDZ practical example
├── Chapter_05_Literal/
│   ├── 22_Literal.js                   # String, boolean, number, null, undefined literals with typeof
│   ├── 23_null_undefined.js            # null vs undefined — definitions, comparisons, and use cases
│   ├── 24_null.js                      # null, undefined, empty string, and zero comparisons
│   ├── 25_Literal_All.js               # Integer literals — decimal, hex, octal, and exponential
│   ├── 26_Literal_Number_All.js        # Complete number types — binary, octal, hex, float, BigInt, Infinity, NaN
│   ├── 27_Strings.js                   # Single quotes, double quotes, and typeof strings
│   ├── 28_Template_Literal.js          # Template literals with variable interpolation for Playwright
│   └── 29_Backtick_single_double.js    # Single vs double quotes vs backticks — comparison and examples
├── Chapter_06_operators.js/
│   ├── 30_operators.js                 # Operators overview
│   ├── 31_Arithmetic_OP.js             # Arithmetic operators (+, -, *, /)
│   ├── 32-_Modulus_OP.js               # Modulus operator (%) and even/odd logic
│   ├── 33_Expo_OP.js                   # Exponentiation operator (**)
│   ├── 34_iq.JS                        # Compound / assignment operators
│   ├── 35_Comparision_OP.js            # Comparison operators (>, <, >=, <=, ==, ===)
│   ├── 36_Comparison__Strict_loose.js  # Strict vs loose comparison
│   ├── 37_IQ__Loose_Strict.js          # IQ questions on loose vs strict equality
│   ├── 38_Confusing_Comparison.js      # Confusing comparison cases
│   ├── 39_Logical_OP.js                # Logical operators (&&, ||, !)
│   ├── 40_String_Con_OP.js             # String concatenation with +
│   ├── 41_Ternary_OP.js                # Ternary (conditional) operator
│   ├── 42_Type_OP.js                   # typeof and instanceof operators
│   ├── 43_Incre_Decre_OP.js            # Increment (++) and decrement (--) operators
│   ├── 44_Null_OP.js                   # Null comparisons and coercion behavior
│   ├── 45_Post_Increment.js            # Post-increment behavior (assign then increase)
│   ├── 46_IQ_INCREMENT_D.js            # IQ questions on increment and decrement
│   └── 47_Advance_ID_.js               # Advanced increment/decrement expressions
├── Chapter_07_IF_Else.js/
│   ├── 48_IF_Else.js                   # Basic if-else statement
│   ├── 49_If_elseif_else.js            # If-else if-else ladder (grade calculator)
│   ├── 50_REAL_IF_ELSE.js              # Nested if-else with user roles (admin, editor, viewer)
│   ├── 51_API_IF_Else.js               # API status code handling with if-else
│   ├── 52_IQ_IF_ELSE.js                # Truthy and falsy values in conditions
│   ├── 53_IF_ELSE_real.js              # Real-world login check with logical operators
│   ├── 54_IQ.js                        # Single-line if without braces
│   ├── 55_IE.js                        # Standalone single if statement
│   ├── 56_IQ_EVEN_ODD.js               # Even / odd check using if-else
│   ├── 57_Grade_Calc.js                # Grade calculator with range checks
│   ├── 58_LEAP_YEAR.js                 # Leap year logic with modulo operators
│   ├── 58_Task_20may.js                # Class task — even/odd, grades, leap year
│   ├── Task_21_May.js                  # Class task — HTTP status, test verdict, bug severity, build health, login lockout
│   └── Practice_IF_ELSE.js             # Practice exercises — even/odd, grades, leap year
├── Chapter_08_Switch_Statement.js/
│   ├── 59_Switch.js                    # Basic switch statement with break
│   ├── 60_No_Break.js                  # Switch without break — fall-through behavior
│   ├── 61_Default.js                   # Switch with default case
│   ├── 62_REAL_TIME_EXAMPLE.js         # API response code validation with switch
│   ├── 63_Switch_Group.js              # Grouped case labels (browser engine families)
│   ├── 64_IQ_Switch.js                 # IQ — missing break and fall-through
│   ├── 65_IQ2.js                       # IQ — switch(true) with range expressions
│   ├── 66_IQ3.js                       # IQ — duplicate case behavior
│   └── 67_IQ4.js                       # IQ — type coercion in switch cases
├── chapter_09_UserInput/
│   ├── 68_User_Input.js                # Browser prompt for user input
│   ├── 69_NODE_Readline.js             # Node.js readline module for CLI input
│   └── 70_Prompt_Sync.js               # prompt-sync package for synchronous CLI input
└── chapter_10_Loops/
    ├── 71_For_loop.js                  # Introduction to repeating code
    ├── 72_For_loop.js                  # Basic for loop examples
    ├── 73_For_Loop2.js                 # For loop with different variables and ranges
    ├── 74_IQ.js                        # For loop edge cases and IQ questions
    ├── 75_For_OF_IN_EACH.js            # While loop basics
    ├── 76_While.js                     # While loop examples
    ├── 77_Do_While.js                  # Do-while loop with initial false condition
    ├── 78_Do_While.js                  # Do-while retry example
    ├── 79_IQ.js                        # While loop patterns and star pattern
    ├── 80_IQ.js                        # Do-while edge case
    ├── 81_IQ.js                        # Continue statement in for loop
    ├── 82_IQ.js                        # Do-while with missing increment
    └── Task_22nd_may.js              # Class task — triangle check and FizzBuzz
├── chapter_11_Arrays/
│   ├── 83_Arrays.js                  # Array basics — empty arrays, indexed access, mixed types
│   ├── 84_Arrays.js                  # Array creation — literal, constructor, Array.of, Array.from
│   ├── 85_Access_Array.js            # Accessing & modifying elements, .at() with negative indices
│   ├── 86_Arrays_Adding_Remove.js    # push, pop, unshift, shift — adding/removing from ends
│   ├── 87_Adding_Remove2.js          # splice — insert, delete, replace elements in-place
│   ├── 88_REAL_Example.js            # Real-world browser list manipulation with loops
│   ├── 89_Searching.js               # indexOf, lastIndexOf, includes, find, findIndex, findLast
│   ├── 90_Iterate.js                 # Iteration — for, for...of, forEach, for...in, entries()
│   ├── 91_Transform_Arrays.js        # map, filter, reduce, flat — transform and aggregate arrays
│   ├── 92_Arrays.js                  # sort — natural vs numeric sorting with compare functions
│   ├── 93_Array_Slicing.js           # slice and splice — extracting and removing sub-arrays
    │   ├── 94_Concat_array.js            # concat, spread (...), join — combining and stringifying arrays
    │   ├── 95_Array_Checking.js          # Array.isArray, every, some — validation and predicate checks
    │   └── Practice_arr.js               # Practice exercises — index search, length, even/odd count, sum, largest number
    ├── chapter_12_Funtions/
│   ├── 96_Functions.js                 # Function definition and invocation basics
│   ├── 97_Type1_Fn_Basic_Functions.js  # Type 1 — no parameters, no return
│   ├── 98_Type2_Fn_With_Param_No_Return.js   # Type 2 — with parameters, no return
│   ├── 99_Type3_Fn_without_Param_Return_Type.js  # Type 3 — no parameters, with return
│   ├── 100_Type4_Fn_With_Param_With_Return.js   # Type 4 — with parameters and return
│   ├── 101_Template_literal.js         # Template literals inside functions (greet with ${})
│   ├── 102_Fn_Expression.js           # Function expressions vs function declarations
│   ├── 103_Arrow_Fn.js               # Arrow functions (ES6) — concise syntax, implicit return
│   ├── 104_Arrow_Fn_REAL.js          # Real-world arrow function — API status validation
│   ├── 105_IIFE.js                   # Immediately Invoked Function Expressions (IIFE)
│   ├── 106_Default_Param_Fn.js       # Default parameters in functions
│   ├── 107_IQ.js                     # IQ — function returning formatted strings
│   ├── 108_Rest_Param_Fn.js          # Rest parameters (...args)
│   ├── 109_IQ.js                     # IQ — multi-return function with HTTP status logic
│   ├── 110_Spead_IQ.js              # Spread operator with functions (...array)
│   ├── 111_Scope._Fn.js             # Function scope — global vs local variable access
│   ├── 112_IQ.js                    # IQ — nested scope and closure scope access
│   ├── 113_Closure.js               # Closure basics — inner function accessing outer variable
│   ├── 114_Closure.js               # Closure practical — makeCounter with increment/decrement/get
│   ├── 115_API_REAL_Closure.js      # Real-world closure — API retry tracker with attempt counter
│   ├── 116_Higher_Order_Fn.js       # Higher-order functions — passing functions as arguments
│   └── 117_Pure_Fn.js               # Pure vs impure functions — predictable output and side effects
└── chapter_13_Strings/
    ├── 118_Strings.js                  # String literals — single, double, backticks, multiline
    ├── 119_String_Properties.js        # String properties — length, index access, charAt, charCodeAt
    ├── 120_Search_Check_Str.js         # Searching & checking — includes, startsWith, endsWith, indexOf, search
    ├── 121_Substring.js                # Substring extraction — slice, substring, includes
    ├── 122_Transform_Str.js            # String transformation — toUpperCase, toLowerCase, trim, replace, split, join
    ├── 123_SC.js                       # String transformation & concatenation — replaceAll, regex, concat
    ├── Task_3_June.js                  # Task — reverse a string using split, reverse, join
    └── Practice_str.js                 # Practice exercise — count vowels in a string
```

---

## Chapter 01 — Basics

Foundational setup and first JavaScript programs.

| File | Topics Covered | Description |
|------|----------------|-------------|
| `01_basic.js` | `console.log` | The very first JavaScript program. Prints a greeting message to the console. |
| `02_JS.js` | `let` variables, arithmetic, `for` loops, functions | Declares two variables, computes their sum, and logs the result. Also includes a `for` loop calling a `print()` function to demonstrate loops and function invocation. |
| `03_Verify_Setup.js` | `process.platform`, `process.arch`, `process.version` | Verifies the Node.js environment by logging the operating system platform, system architecture, and Node.js version. |
| `04_HotCode.js` | Functions (`function` declaration, `return`) | Defines an `add(a, b)` function, loops from 0 to 100 calling it, and logs the final result. Demonstrates function definitions and `for` loops. |

---

## Chapter 02 — JavaScript Concepts

| File | Topics Covered | Description |
|------|----------------|-------------|
| `05_JS_Basics.js` | `var` declaration and reassignment | Demonstrates `var` declaration, logging, and reassignment. Entry point to understanding variable declarations and mutability. |

---

## Chapter 03 — Identifiers & Naming Conventions

| File | Topics Covered | Description |
|------|----------------|-------------|
| `06_identifiers_rules.js` | Valid identifiers (`$`, `_`, letters, digits; case sensitivity) | Expanded examples of valid identifiers: `$`, `_a`, `ab123`, `Name` vs `name`, `pramod_dutta`, `pramod$dutta`, `pramodu1232`. Reinforces that identifiers cannot start with a number or contain spaces. |
| `07_identifiers_Part2.js` | Naming conventions — camelCase, snake_case, PascalCase, SCREAMING_SNAKE_CASE, Hungarian | Practical examples of all major naming conventions: `firstName` (camelCase), `first_name` (snake_case), `UserProfile` (PascalCase), `MAX_SIZE` / `API_KEY` / `DATABASE_URL` (SCREAMING_SNAKE_CASE), and Hungarian notation (`strName`, `bActive`, `nCount`, `arrItems`). |
| `08_comments.js` | Single-line, multi-line, and JSDoc-style comments | Shows `//` single-line comments, `/* */` multi-line comments, `/** */` JSDoc-style blocks, and inline comments. Includes multi-line comment alignment examples. |
| `VS_Code_short_mac.md` | VS Code: keyboard shortcuts for macOS | Comprehensive reference of 25+ VS Code: shortcuts for Mac users including Command Palette, Quick Open, terminal, multi-cursor, formatting, and navigation. |
| `VS_Code_short_windows.md` | VS Code: keyboard shortcuts for Windows | Comprehensive reference of 25+ VS Code: shortcuts for Windows users including Command Palette, Quick Open, terminal, multi-cursor, formatting, and navigation. |

---

## Chapter 04 — Variables & Functions

| File | Topics Covered | Description |
|------|----------------|-------------|
| `09_var_let_const.js` | Comparison of var, let, const declarations | Side-by-side examples of `var`, `let`, and `const`. Demonstrates `var` re-declaration and re-assignment. Includes a `for` loop with `var` showing loop counter leakage, plus a `say()` function called multiple times. |
| `10_function.js` | Function declarations and expressions | Defines a `greet()` function that logs a greeting message, then calls it twice to demonstrate function invocation. |
| `11_var_explained.js` | `var` keyword behavior, hoisting, and re-declaration | Deep dive into `var` function-scoped behavior with global vs local scope. Shows how `var` inside a function and inside an `if` block all refer to the same variable. Demonstrates global `var` re-declaration. |
| `12_let_people_love.js` | `let` block-scoping, TDZ, and reassignment | Demonstrates `let` block-scoping with `retryCount` incrementing, `testStatus` with `executionTime` scoped inside an `if` block (throws `ReferenceError` when accessed outside). |
| `13_const_explained.js` | `const` keyword, block scoping, and naming conventions | Shows `const BASE_URL` that cannot be reassigned (throws `TypeError`). Demonstrates block scoping with `let name` inside a block and inside a function. Uses `SCREAMING_SNAKE_CASE` for constants. |
| `14_var_functionascope.js` | `var` function scope vs global scope | Side-by-side demonstration of global `var a = 10` vs local `var a = 20` inside a function, and how `var` inside an `if` block mutates the function-scoped variable. Logs global vs function values separately. |
| `15_let_scope.js` | `let` block scope vs function scope | Identical structure to `14_var_functionascope.js` but using `let`. Shows how `let` inside an `if` block creates a separate block-scoped binding that does not affect the function-scoped `let`. |
| `16_Hoisting.js` | `var` hoisting with undefined initialization | Demonstrates how `var` declarations are hoisted to the top with value `undefined`. Shows the "behind the scenes" transformation the JS engine performs before execution. |
| `17_Hoisting_fn.js` | Function-scoped `var` hoisting | Shows that `var` is hoisted to the top of the enclosing function scope, not the global scope. Demonstrates hoisting inside `getUserStatus()`. |
| `18_let_Hoisting.js` | `let` hoisting and Temporal Dead Zone (TDZ) | Demonstrates that `let` is hoisted but remains in the Temporal Dead Zone until declaration, throwing `ReferenceError` if accessed early. Shows TDZ boundaries with a block-scoped example. |
| `19_let_Hoisting_block.js` | `let` block-level TDZ and shadowing | Demonstrates how a block-scoped `let` creates its own TDZ and shadows the outer variable. Accessing the block variable before declaration throws `ReferenceError`. |
| `20_let_const.js` | `const` hoisting and TDZ | Demonstrates that `const` is also hoisted but uninitialized, throwing `ReferenceError` when accessed before declaration. |
| `21_Jr_QA.js` | Junior QA interview — const TDZ practical example | Practical example of accessing a `const` before its declaration inside an `if` block, simulating a common interview question about hoisting and TDZ. |

---

## Chapter 05 — Literals & Data Types

| File | Topics Covered | Description |
|------|----------------|-------------|
| `22_Literal.js` | String, boolean, number, null, undefined literals | Introduces basic literals with `typeof` operator: string, boolean, number, null, and undefined. |
| `23_null_undefined.js` | `null` vs `undefined` — definitions, comparisons, and use cases | Comprehensive guide: `undefined` (auto-set by JS when not assigned) vs `null` (developer-assigned empty value). Covers `==` vs `===`, `typeof` quirks (`typeof null === "object"`), and a `checkValue()` helper function. |
| `24_null.js` | `null`, `undefined`, empty string, and zero | Practical comparison of "no value" states: `null`, uninitialized variable, `0`, and `""`. Demonstrates `typeof` behavior for each. |
| `25_Literal_All.js` | Integer literals — decimal, hex, octal, exponential | Covers decimal, hexadecimal, octal, and exponential notation. |
| `26_Literal_Number_All.js` | Complete number types in JavaScript | Exhaustive reference: binary, octal, hexadecimal, floats, exponential notation, numeric separators, BigInt, Infinity, NaN, and Number properties (MAX_VALUE, MAX_SAFE_INTEGER, EPSILON). |
| `27_Strings.js` | Single quotes, double quotes, and `typeof` | Shows that both single and double quotes create strings. Demonstrates `typeof` on single-character and multi-character strings. |
| `28_Template_Literal.js` | Template literals with `${}` interpolation | Practical template literal examples for Playwright automation: dynamic API URLs, locators with variables, log messages with status, and JSON payload construction. |
| `29_Backtick_single_double.js` | Single vs double quotes vs backticks | Side-by-side comparison table showing that `''` and `""` are identical for plain text, while backticks support variable injection, multi-line strings, and expressions inside `${}`. |

---

## Chapter 06 — Operators

| File | Topics Covered | Description |
|------|----------------|-------------|
| `30_operators.js` | Assignment operators (`=`) | Demonstrates the assignment operator which assigns the right-hand side value to the left-hand side variable. Shows re-assignment behavior. |
| `31_Arithmetic_OP.js` | Arithmetic operators (`+`, `-`, `*`, `/`) | Demonstrates basic arithmetic operations: addition, subtraction, multiplication, and division using variables. |
| `32-_Modulus_OP.js` | Modulus operator (`%`) | Demonstrates the remainder/modulus operator. Includes even/odd detection logic and additional examples with division by 3. |
| `33_Expo_OP.js` | Exponentiation operator (`**`) | Demonstrates the exponentiation operator for raising a number to a power. |
| `34_iq.JS` | Compound / assignment operators | Demonstrates compound assignment operators like `+=` with `x += 10` which is shorthand for `x = x + 10`. |
| `35_Comparision_OP.js` | Comparison operators (`>`, `<`, `>=`, `<=`, `==`, `===`) | Explains comparison operators with examples. Includes the analogy of `==` as "loose comparison" while `===` is "strict comparison". Demonstrates relational comparisons. |
| `36_Comparison__Strict_loose.js` | Strict (`===`) vs loose (`==`) equality | Side-by-side comparison showing `42 == "42"` returns `true` (type coercion) while `42 === "42"` returns `false` (strict type + value check). |
| `37_IQ__Loose_Strict.js` | IQ questions on loose vs strict equality | Tricky interview questions exploring JavaScript coercion edge cases: `"" == 0`, `0 == "0"`, `"" == "0"` (transitivity broken!), `0 == false`, `null == 0`, `null == undefined`, and `null === undefined`. |
| `38_Confusing_Comparison.js` | Tricky comparison cases | Comprehensive collection of JavaScript's most confusing comparison behaviors: transitivity traps, boolean coercion surprises, null & undefined edge cases, array/object weirdness, and NaN behavior. Concludes with best practice: always use `===`. |
| `39_Logical_OP.js` | Logical operators (`&&`, `||`, `!`) | Demonstrates AND, OR, and NOT logical operators with boolean variables. Also shows loose inequality between a number and a string. |
| `40_String_Con_OP.js` | String concatenation with `+` | Demonstrates string concatenation using the `+=` compound assignment operator to build strings incrementally. |
| `41_Ternary_OP.js` | Ternary (conditional) operator (`? :`) | Demonstrates the ternary operator syntax with simple, nested, and multi-level examples: age check, temperature feelings, two-number max, three-number max, and a practical decision example. |
| `42_Type_OP.js` | `typeof` and `instanceof` operators | Shows how `typeof` returns the type of a variable and the known `typeof null === "object"` quirk. Includes a practical `if (typeof value === "number")` use case. |
| `43_Incre_Decre_OP.js` | Increment (`++`) and decrement (`--`) | Explains pre-increment, post-increment, pre-decrement, and post-decrement with examples. Also includes compound expression evaluations to practice operator precedence. |
| `44_Null_OP.js` | Nullish coalescing and null comparisons | Demonstrates null comparisons: `null >= 0` and `null === 0`, showing how null behaves unexpectedly in comparisons due to type coercion rules. Also demonstrates the nullish coalescing operator (`??`). |
| `45_Post_Increment.js` | Post-increment behavior | Shows that post-increment assigns the current value first and then increments. Logs both the original and incremented values. |
| `46_IQ_INCREMENT_D.js` | IQ questions on increment and decrement | Practice problems combining pre-increment, post-increment, and post-decrement on multiple variables to trace final values. |
| `47_Advance_ID_.js` | Advanced increment/decrement expressions | Complex expression evaluations like `++a + ++a` to understand operator precedence and sequence of evaluation. |

---

## Chapter 07 — If-Else Statements

Control flow using conditional if-else logic.

| File | Topics Covered | Description |
|------|----------------|-------------|
| `48_IF_Else.js` | Basic if-else | Simple age check: if `age > 18`, print "You are allowed to vote!", else print "You are not allowed to vote!". |
| `49_If_elseif_else.js` | If-else if-else ladder | Grade calculator based on score ranges: A (>=90), B (>=80), C (>=70), D (>=60), else Fail. |
| `50_REAL_IF_ELSE.js` | Nested if-else with user roles | Real-world example of login + role-based access: checks `isLoggedIn`, then checks `userRole` (admin, editor, viewer, guest) with nested if-else. |
| `51_API_IF_Else.js` | API status code handling | Simulates API response validation: if status is 200, API is fine; if 404, not found; else no match. |
| `52_IQ_IF_ELSE.js` | Truthy and falsy values | Demonstrates which values are truthy (non-zero numbers, non-empty strings, objects, arrays) and which are falsy (`""`, `null`, `undefined`, `NaN`, `0`). |
| `53_IF_ELSE_real.js` | Logical operators in conditions | Real-world login check combining `&&` and checking username, password, and account lock status. |
| `54_IQ.js` | Single-line if without braces | Shows that a single statement after `if` does not require braces, but warns about readability risks. |
| `55_IE.js` | Standalone single if | Demonstrates a single `if` block without an `else` — valid and commonly used for simple guards. |
| `56_IQ_EVEN_ODD.js` | Even / odd check | Uses modulo operator inside if-else to determine if a number is even or odd. |
| `57_Grade_Calc.js` | Grade calculator with range checks | More detailed grade calculator using combined range conditions. |
| `58_LEAP_YEAR.js` | Leap year logic | Implements leap year rules: divisible by 4 and not by 100, OR divisible by 400. Tests with multiple years. |
| `58_Task_20may.js` | Class task — even/odd, grades, leap year | Consolidated practice file from 20th May class covering even/odd check, grade calculator (A–F), and leap year verification. |
| `Task_21_May.js` | Class task — real-world QA scenarios | Five practical exercises: HTTP status code categorizer, test case pass/fail verdict, bug severity classifier, build health reporter, and login lockout after failed attempts. |
| `Practice_IF_ELSE.js` | Practice exercises | Combined practice file covering even/odd check, student grade calculator, and leap year verification. |

---

## Chapter 08 — Switch Statements

Control flow using switch-case constructs.

| File | Topics Covered | Description |
|------|----------------|-------------|
| `59_Switch.js` | Basic switch with break | Day-of-week switch: case 1 = Monday, case 2 = Tuesday, etc. Includes variable declaration inside a case with `break`. |
| `60_No_Break.js` | Fall-through behavior | Demonstrates what happens when `break` is omitted — all subsequent cases execute until a `break` or `default` is hit. |
| `61_Default.js` | Switch with default case | Same day-of-week example but with `break` in every case and a `default` for invalid day values. |
| `62_REAL_TIME_EXAMPLE.js` | API response code validation | Real-world switch for HTTP status codes: 200 = OK, 404 = Not Found, default = no match. |
| `63_Switch_Group.js` | Grouped case labels | Groups browser engines under shared cases: Chrome/Edge/Brave/Opera → Chromium, Firefox → Mozilla, Safari → Apple. |
| `64_IQ_Switch.js` | Missing break fall-through | IQ question: without `break`, starting from `"banana"` falls through to cherry, date, and default. |
| `65_IQ2.js` | Switch with boolean expression | Uses `switch(true)` with relational expressions to evaluate score ranges — an alternative to if-else ladders. |
| `66_IQ3.js` | Duplicate case behavior | Demonstrates that duplicate case values are allowed in syntax but only the first match executes. |
| `67_IQ4.js` | Type coercion in switch | Shows that `switch` uses strict equality (`===`) internally, so `0` does not match `false` even though `0 == false` is `true`. |

---

## Chapter 09 — User Input

Reading user input in JavaScript — browser and Node.js environments.

| File | Topics Covered | Description |
|------|----------------|-------------|
| `68_User_Input.js` | Browser `prompt()` | Uses the browser's `prompt()` dialog to read a number, converts it with `Number()`, then checks even/odd with if-else. |
| `69_NODE_Readline.js` | Node.js `readline` module | Demonstrates reading input from the command line using Node.js built-in `readline` module with `createInterface` and `question()`. |
| `70_Prompt_Sync.js` | `prompt-sync` package | Uses the `prompt-sync` npm package for synchronous CLI input in Node.js, converting input to a number and checking even/odd. |

---

## Chapter 10 — Loops

Repeating code blocks using `for`, `while`, and `do...while` loops.

| File | Topics Covered | Description |
|------|----------------|-------------|
| `71_For_loop.js` | Introduction to repetition | Shows manual `console.log` repetition versus using a loop to repeat a block of code. |
| `72_For_loop.js` | Basic `for` loop | Demonstrates `for` loop syntax with initialization, condition, and increment expressions. Logs numbers from 0 to 5. |
| `73_For_Loop2.js` | Loop variables and ranges | Uses custom variable names and ranges to show loop flexibility. |
| `74_IQ.js` | For loop edge cases | IQ questions exploring loop conditions that never execute, infinite loops, and conditional logic inside loops. |
| `75_For_OF_IN_EACH.js` | While loop introduction | Basic `while` loop that runs while a condition is true, with manual increment. |
| `76_While.js` | `while` loop examples | Demonstrates `while` loops with initialization, condition, and update. Includes a practical example with 15 iterations. |
| `77_Do_While.js` | `do...while` basics | Shows that `do...while` executes the block at least once even if the condition is initially false. |
| `78_Do_While.js` | `do...while` retry pattern | Practical retry pattern using `do...while` — executes code then checks retry count. |
| `79_IQ.js` | While loop patterns | Countdown `while` loop and nested `while` loops to print a star pyramid pattern. |
| `80_IQ.js` | Do-while edge case | Demonstrates a `do...while` loop that executes once even though the condition becomes false immediately. |
| `81_IQ.js` | `continue` statement | Shows how `continue` skips the current iteration when `i === 1` in a `for` loop. |
| `82_IQ.js` | Do-while missing increment | Demonstrates a common bug where the increment is missing, causing an infinite loop. |
| `Task_22nd_may.js` | Class task — triangle check & FizzBuzz | Combined practice file from 22nd May class: triangle type detection (equilateral, isosceles, scalene) and the classic FizzBuzz program using a `while` loop. |

---

## Chapter 11 — Arrays

Working with ordered collections in JavaScript — creation, access, mutation, searching, iteration, transformation, and validation.

| File | Topics Covered | Description |
|------|----------------|-------------|
| `83_Arrays.js` | Array basics, `length`, index access | Introduces empty arrays, literal arrays with strings, numeric arrays, and accessing elements by index. Shows `undefined` for out-of-bounds access and mixed-type arrays. |
| `84_Arrays.js` | Array creation methods | Covers array literal, `new Array(length)`, `new Array(elements...)`, `Array.of()`, and `Array.from(string)`. |
| `85_Access_Array.js` | Index access, `.at()`, mutation | Demonstrates reading elements by positive index, `.at(-1)` for last element, and modifying elements by assignment. |
| `86_Arrays_Adding_Remove.js` | `push`, `pop`, `unshift`, `shift` | Adds and removes elements from both ends of an array. Shows chaining multiple operations. |
| `87_Adding_Remove2.js` | `splice` | In-place insertion, deletion, and replacement using `splice(start, deleteCount, ...items)`. |
| `88_REAL_Example.js` | Real-world array manipulation | Manages a browser list: checks length, removes last/first elements, loops to find and log a specific browser. |
| `89_Searching.js` | `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex` | Searching arrays by value or predicate. Includes `findLast` and `findLastIndex` for reverse search. |
| `90_Iterate.js` | `for`, `for...of`, `forEach`, `for...in`, `entries()` | Five ways to iterate arrays with practical examples and index-vs-value distinction. |
| `91_Transform_Arrays.js` | `map`, `filter`, `reduce`, `flat` | Transforms arrays: map to pass/fail grades, filter passing scores, reduce to sum, and flatten nested arrays. |
| `92_Arrays.js` | `sort` | Natural (lexicographic) sorting vs numeric sorting using `(a, b) => a - b` for ascending/descending. |
| `93_Array_Slicing.js` | `slice`, `splice` | Extracts sub-arrays with `slice(start, end)` and removes elements with `splice(start, deleteCount)`. |
| `94_Concat_array.js` | `concat`, spread `...`, `join` | Combines arrays with `concat` and modern spread syntax. Joins array elements into a delimited string. |
| `95_Array_Checking.js` | `Array.isArray`, `every`, `some` | Validates arrays and tests predicates across all or some elements. Includes a Playwright API status example. |
| `Practice_arr.js` | Array practice exercises | Covers `indexOf`, `length`, `at()`, `includes`, counting even/odd numbers, sum of elements, second-last element, and finding the largest number. |

---

## Chapter 12 — Functions

Deep dive into JavaScript functions — declarations, expressions, arrow functions, parameters, scope, closures, and functional patterns.

| File | Topics Covered | Description |
|------|----------------|-------------|
| `96_Functions.js` | Function definition & call | Step-by-step introduction: define a function with `function`, then invoke it. |
| `97_Type1_Fn_Basic_Functions.js` | Type 1 — no param, no return | Basic function that logs a message. Shows that calling a no-return function yields `undefined`. |
| `98_Type2_Fn_With_Param_No_Return.js` | Type 2 — parameters, no return | Functions accepting arguments and logging results. Demonstrates parameter passing and `undefined` return. |
| `99_Type3_Fn_without_Param_Return_Type.js` | Type 3 — no param, with return | Function that returns a value without taking any arguments. Captures return value into a variable. |
| `100_Type4_Fn_With_Param_With_Return.js` | Type 4 — parameters + return | Classic parameterized function with `return`: `sumOfTwoNumner(a, b)` returns the computed sum. |
| `101_Template_literal.js` | Template literals in functions | Returns a dynamic greeting string using backticks and `${}` interpolation. |
| `102_Fn_Expression.js` | Function expressions | Assigns anonymous functions to variables. Compares function declarations vs function expressions side-by-side. |
| `103_Arrow_Fn.js` | Arrow functions (ES6) | Converts normal functions to arrow functions. Covers implicit return, single-parameter shorthand, and zero-parameter syntax. |
| `104_Arrow_Fn_REAL.js` | Real-world arrow function | Refactors an API status validator from normal function → expression → arrow function. |
| `105_IIFE.js` | IIFE | Immediately Invoked Function Expressions — self-executing anonymous functions for isolated scopes. |
| `106_Default_Param_Fn.js` | Default parameters | Sets default values for function parameters (`maxRetries = 3`, `delay = 1000`). |
| `107_IQ.js` | IQ — formatted return | `runTest(name, status, duration)` returns a structured test result string. |
| `108_Rest_Param_Fn.js` | Rest parameters | `...results` collects variable arguments into an array inside `logResult(suiteName, ...results)`. |
| `109_IQ.js` | IQ — multi-return logic | `getStatus(code)` returns categorized HTTP status strings using early returns. |
| `110_Spead_IQ.js` | Spread with functions | Spreads an array into individual arguments with `add(...num)`. Also shows rest + spread combined. |
| `111_Scope._Fn.js` | Scope — global vs local | Demonstrates that local variables are accessible only inside their function, while global variables are accessible everywhere. |
| `112_IQ.js` | IQ — nested scope | Inner functions can access outer variables, but outer cannot access inner variables. |
| `113_Closure.js` | Closure basics | Inner function retains access to outer variable even after outer function completes. Returns the inner function. |
| `114_Closure.js` | Closure practical | `makeCounter(start)` returns an object with `increment`, `decrement`, and `get` methods using closure. |
| `115_API_REAL_Closure.js` | Real-world closure | `makeRetryTracker(max)` builds a retry tracker that keeps attempt count private via closure. |
| `116_Higher_Order_Fn.js` | Higher-order functions | A function that accepts another function as an argument (`runWithLoggin(testFn, testName)`). |
| `117_Pure_Fn.js` | Pure vs impure functions | Contrasts a pure function (predictable, no side effects) with an impure function (depends on external state). |

---

## Chapter 13 — Strings

Deep dive into JavaScript strings — literals, properties, searching, substrings, transformations, and practical tasks.

| File | Topics Covered | Description |
|------|----------------|-------------|
| `118_Strings.js` | String literals — single quotes, double quotes, backticks, multiline | Covers string creation with `''`, `""`, and `` ` ``. Demonstrates template literals with `${}` interpolation, multiline strings using backticks, and the `String()` constructor for coercion. |
| `119_String_Properties.js` | `length`, index access, `charAt()`, `charCodeAt()` | Shows `str.length`, bracket index access (`str[0]`), `.at(-1)` for negative indexing, `charAt()`, and `charCodeAt()` to get character codes. |
| `120_Search_Check_Str.js` | `includes()`, `startsWith()`, `endsWith()`, `indexOf()`, `search()` | Practical searching examples on a URL string. Demonstrates boolean checks and positional searches, plus an introduction to regular expressions with `search(/regex/)`. |
| `121_Substring.js` | `slice()`, `substring()`, `includes()` | Extracts substrings using `slice()` with positive and negative indices, `substring()`, and validates substrings with `includes()`. |
| `122_Transform_Str.js` | `toUpperCase()`, `toLowerCase()`, `trim()`, `replace()`, `split()`, `join()` | Transforms strings: case conversion, whitespace trimming, single and global replacement, splitting into arrays, and joining arrays back into strings. |
| `123_SC.js` | `replaceAll()`, regex replacement, `concat()`, template literals | Extended string transformations including `replaceAll()`, regex-based global replace, and three ways to concatenate strings: `+`, `concat()`, and template literals. |
| `Task_3_June.js` | Reverse a string, palindrome check | Classic string reversal using `split("")`, `reverse()`, and `join("")`. Also includes manual reversal with a `for` loop (no built-ins) and a palindrome check comparing the original and reversed strings. |
| `Practice_str.js` | String practice exercise | Counts vowels in a given string using `includes()` and a loop. Demonstrates basic string iteration and conditional counting. |

---

*Happy Learning! — Sharad Pareek*
