# Playwright Learning

A collection of Playwright and JavaScript concept exercises for learning end-to-end testing and core JavaScript fundamentals.

## Project Structure

```
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
    └── 82_IQ.js                        # Do-while with missing increment
```

---

## Chapter 01 — Playwright Basics

Foundational setup and first JavaScript programs.

| File | Topics Covered | Description |
|------|----------------|-------------|
| `01_basic.js` | `console.log` | The very first JavaScript program. Prints `"Hello, This is my first JavaScript code!"` to the console. |
| `02_JS.js` | `let` variables, arithmetic, `for` loops, functions | Declares two variables `x = 10` and `y = 20`, computes their sum, and logs the result. Also includes a `for` loop from 0 to 100 calling a `print()` function to demonstrate loops and function invocation. |
| `03_Verify_Setup.js` | `process.platform`, `process.arch`, `process.version` | Verifies the Node.js environment by logging the operating system platform (`darwin`/`win32`/`linux`), system architecture (`x64`/`arm64`), and Node.js version. |
| `04_HotCode.js` | Functions (`function` declaration, `return`) | Defines an `add(a, b)` function, loops from 0 to 100 calling it, and logs the final result. Demonstrates function definitions and `for` loops. |

---

## Chapter 02 — JavaScript Concepts (Legacy)

| File | Topics Covered | Description |
|------|----------------|-------------|
| `05_JS_Basics.js` | `var` declaration and reassignment | Demonstrates `var` declaration (`var v = 10`), logging, and reassignment (`v = 12`). Entry point to understanding variable declarations and mutability. |

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
| `09_var_let_const.js` | Comparison of var, let, const declarations | Side-by-side examples of `var`, `let`, and `const`. Demonstrates `var` re-declaration (`var browser` declared twice) and re-assignment. Includes a `for` loop with `var` showing loop counter leakage, plus a `say()` function called multiple times. |
| `10_function.js` | Function declarations and expressions | Defines a `greet()` function that logs a greeting message, then calls it twice to demonstrate function invocation. |
| `11_var_explained.js` | var keyword behavior, hoisting, and re-declaration | Deep dive into `var` function-scoped behavior with global vs local scope. Shows how `var` inside a function and inside an `if` block all refer to the same variable. Demonstrates global `var` re-declaration (`var a = 50`). |
| `12_let_people_love.js` | let block-scoping, TDZ, and reassignment | Demonstrates `let` block-scoping with `retryCount` incrementing, `testStatus` with `executionTime` scoped inside an `if` block (throws `ReferenceError` when accessed outside). Reinforces: "let is loyal, var is variable/traitor". |
| `13_const_explained.js` | const keyword, block scoping, and naming conventions | Shows `const BASE_URL` that cannot be reassigned (throws `TypeError`). Demonstrates block scoping with `let name` inside a block and inside a function. Uses `SCREAMING_SNAKE_CASE` for constants. |
| `14_var_functionascope.js` | var function scope vs global scope | Side-by-side demonstration of global `var a = 10` vs local `var a = 20` inside a function, and how `var` inside an `if` block mutates the function-scoped variable. Logs global vs function values separately. |
| `15_let_scope.js` | let block scope vs function scope | Identical structure to `14_var_functionascope.js` but using `let`. Shows how `let` inside an `if` block creates a separate block-scoped binding that does not affect the function-scoped `let`. |
| `16_Hoisting.js` | var hoisting with undefined initialization | Demonstrates how `var` declarations are hoisted to the top with value `undefined`. Shows the "behind the scenes" transformation the JS engine performs before execution. |
| `17_Hoisting_fn.js` | Function-scoped var hoisting | Shows that `var` is hoisted to the top of the enclosing function scope, not the global scope. Demonstrates hoisting inside `getUserStatus()`. |
| `18_let_Hoisting.js` | let hoisting and Temporal Dead Zone (TDZ) | Demonstrates that `let` is hoisted but remains in the Temporal Dead Zone until declaration, throwing `ReferenceError` if accessed early. Shows TDZ boundaries with a block-scoped example. |
| `19_let_Hoisting_block.js` | let block-level TDZ and shadowing | Demonstrates how a block-scoped `let` creates its own TDZ and shadows the outer variable. Accessing the block variable before declaration throws `ReferenceError` — it does not fall back to the global. |
| `20_let_const.js` | const hoisting and TDZ | Demonstrates that `const` is also hoisted but uninitialized, throwing `ReferenceError` when accessed before declaration. |
| `21_Jr_QA.js` | Junior QA interview — const TDZ practical example | Practical example of accessing a `const` before its declaration inside an `if` block, simulating a common interview question about hoisting and TDZ. |

---

## Chapter 05 — Literals & Data Types

Exploring JavaScript literals, data types, and string handling.

| File | Topics Covered | Description |
|------|----------------|-------------|
| `22_Literal.js` | String, boolean, number, null, undefined literals | Introduces basic literals with `typeof` operator: string (`"pramod"`), boolean (`true`), number (`3.14`), null, and undefined. |
| `23_null_undefined.js` | `null` vs `undefined` — definitions, comparisons, and use cases | Comprehensive guide: `undefined` (auto-set by JS when not assigned) vs `null` (developer-assigned empty value). Covers `==` vs `===`, `typeof` quirks (`typeof null === "object"`), and a `checkValue()` helper function. |
| `24_null.js` | `null`, `undefined`, empty string, and zero | Practical comparison of "no value" states: `null`, uninitialized variable, `0`, and `""`. Demonstrates `typeof` behavior for each. |
| `25_Literal_All.js` | Integer literals — decimal, hex, octal, exponential | Covers decimal (`42`), hexadecimal (`0xFF`), octal (`0o77`), and exponential notation (`1e6`, `1.5e-4`). |
| `26_Literal_Number_All.js` | Complete number types in JavaScript | Exhaustive reference: binary (`0b1010`), octal (`0o52`), hexadecimal (`0x2A`), floats, exponential notation, numeric separators (`1_000_000`), BigInt (`123n`), `Infinity`, `NaN`, and `Number` properties (`MAX_VALUE`, `MAX_SAFE_INTEGER`, `EPSILON`). |
| `27_Strings.js` | Single quotes, double quotes, and `typeof` | Shows that both single (`'Hello'`) and double (`"Hello"`) quotes create strings. Demonstrates `typeof` on single-character and multi-character strings. |
| `28_Template_Literal.js` | Template literals with `${}` interpolation | Practical template literal examples for Playwright automation: dynamic API URLs (`api-${env}.tekion.com`), locators with variables (`[data-row="${rowIndex}"]`), log messages with status, and JSON payload construction. |
| `29_Backtick_single_double.js` | Single vs double quotes vs backticks | Side-by-side comparison table showing that `''` and `""` are identical for plain text, while `` ` ` `` (backticks) support variable injection, multi-line strings, and expressions inside `${}`. |

---

## Chapter 06 — Operators

| File | Topics Covered | Description |
|------|----------------|-------------|
| `30_operators.js` | Assignment operators (`=`) | Demonstrates the assignment operator which assigns the right-hand side value to the left-hand side variable. Shows re-assignment behavior (`x = 10; x = 11; x = 90`). |
| `31_Arithmetic_OP.js` | Arithmetic operators (`+`, `-`, `*`, `/`) | Demonstrates basic arithmetic operations: addition, subtraction, multiplication, and division using variables `a = 5` and `b = 10`. |
| `32-_Modulus_OP.js` | Modulus operator (`%`) | Demonstrates the remainder/modulus operator which returns the remainder of a division operation. Includes even/odd detection logic (`n % 2 === 0` for even, `n % 2 === 1` for odd) and additional examples with division by 3. |
| `33_Expo_OP.js` | Exponentiation operator (`**`) | Demonstrates the exponentiation operator for raising a number to a power (e.g., `2 ** 3 = 8`). |
| `34_iq.JS` | Compound / assignment operators | Demonstrates compound assignment operators like `+=` with `x += 10` which is shorthand for `x = x + 10`. |
| `35_Comparision_OP.js` | Comparison operators (`>`, `<`, `>=`, `<=`, `==`, `===`) | Explains comparison operators with examples. Includes the analogy: `==` is "loose comparison" while `===` is "strict comparison". Demonstrates relational comparisons and introduces logical OR concepts. |
| `36_Comparison__Strict_loose.js` | Strict (`===`) vs loose (`==`) equality | Side-by-side comparison showing `42 == "42"` returns `true` (type coercion) while `42 === "42"` returns `false` (strict type + value check). |
| `37_IQ__Loose_Strict.js` | IQ questions on loose vs strict equality | Tricky interview questions exploring JavaScript coercion edge cases: `"" == 0`, `0 == "0"`, `"" == "0"` (transitivity broken!), `0 == false`, `null == 0`, `null == undefined`, and `null === undefined`. |
| `38_Confusing_Comparison.js` | Tricky comparison cases | Comprehensive collection of JavaScript's most confusing comparison behaviors: transitivity traps, boolean coercion surprises (`false == []`), null & undefined edge cases, array/object weirdness (`[] == ![]` is `true`), and NaN behavior (`NaN == NaN` is `false`). Concludes with best practice: always use `===`. |
| `39_Logical_OP.js` | Logical operators (`&&`, `\|\|`, `!`) | Demonstrates AND (`&&`), OR (`\|\|`), and NOT (`!`) logical operators with boolean variables. Also shows loose inequality (`!=`) between a number and a string. |
| `40_String_Con_OP.js` | String concatenation with `+` | Demonstrates string concatenation using the `+=` compound assignment operator to build strings incrementally. |
| `41_Ternary_OP.js` | Ternary (conditional) operator (`? :`) | Demonstrates the ternary operator syntax with simple, nested, and multi-level examples: age check, temperature feelings, two-number max, three-number max, and a practical "go to Goa" decision. |
| `42_Type_OP.js` | `typeof` and `instanceof` operators | Shows how `typeof` returns the type of a variable (string, number, boolean, undefined, object, function) and the known `typeof null === "object"` quirk. Includes a practical `if (typeof value === "number")` use case. |
| `43_Incre_Decre_OP.js` | Increment (`++`) and decrement (`--`) | Explains pre-increment (`++x`), post-increment (`x++`), pre-decrement (`--x`), and post-decrement (`x--`) with examples. Also includes compound expression evaluations (`++a + a`, `a++ + ++a - --a + a-- + ++a`) to practice operator precedence. |
| `44_Null_OP.js` | Nullish coalescing and null comparisons | Demonstrates null comparisons: `null >= 0` and `null === 0`, showing how null behaves unexpectedly in comparisons due to type coercion rules. |
| `45_Post_Increment.js` | Post-increment behavior | Shows that post-increment (`a_post++`) assigns the current value first and then increments. Logs both the original and incremented values. |
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
| `57_Grade_Calc.js` | Grade calculator with range checks | More detailed grade calculator using combined range conditions (`marks >= 80 && marks <= 89`). |
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
| `73_For_Loop2.js` | Loop variables and ranges | Uses custom variable names and ranges (`vedika` from 0 to 9, `_1` from 0 to 10) to show loop flexibility. |
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

## JavaScript Concepts

### Variables

A **variable** is a named container that stores a value in memory. JavaScript provides three ways to declare variables:

### `var`

- Function-scoped (not block-scoped)
- Can be redeclared and updated
- Hoisted to the top of its scope (initialized with `undefined`)

```js
var name = "John";
var name = "Doe"; // redeclaration allowed
```

### `let`

- Block-scoped (`{}`)
- Can be updated but **not** redeclared in the same scope
- Hoisted but not initialized (Temporal Dead Zone)

```js
let age = 25;
age = 26;       // allowed
// let age = 30; // error — redeclaration not allowed
```

### `const`

- Block-scoped
- Cannot be updated or redeclared
- Must be initialized at declaration
- For objects/arrays, the reference is constant but contents can be mutated

```js
const pi = 3.14;
// pi = 3.15;  // error — assignment to constant
const colors = ["red", "blue"];
colors.push("green"); // allowed — mutating contents
```

### Comparison Table — `var` vs `let` vs `const`

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function-scoped | Block-scoped `{}` | Block-scoped `{}` |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Initialization | Optional (default `undefined`) | Optional (default `undefined`) | Required at declaration |
| Hoisting | Hoisted, initialized as `undefined` | Hoisted, not initialized (TDZ) | Hoisted, not initialized (TDZ) |
| Temporal Dead Zone | No | Yes | Yes |
| Browser global (`window`) | Yes (when declared globally) | No | No |

### Identifiers

An **identifier** is the name given to a variable, function, class, or object property.

**Rules:**
- Must start with a letter (`a-z`, `A-Z`), underscore (`_`), or dollar sign (`$`)
- Subsequent characters can include digits (`0-9`)
- Case-sensitive (`myVar` ≠ `myvar`)
- Cannot be a reserved keyword
- No spaces or special characters allowed (except `_` and `$`)
- Cannot start with a digit
- Unicode letters are allowed (e.g., `ñ`, `é`, `汉字`)
- No limit on length

```js
var $ = 10;      // valid
var _count = 5;  // valid
var userName = "Alice"; // valid
// var 123abc;    // invalid — starts with digit
// var let;       // invalid — 'let' is a keyword
```

### Naming Conventions

| Convention | Pattern | Use Case | Example |
|------------|---------|----------|---------|
| camelCase | `firstName` | Variables, functions | `let firstName = "Sharad"` |
| snake_case | `first_name` | Variables (optional style) | `let first_name = "Sharad"` |
| PascalCase | `Person` | Classes, constructors | `class Person {}` |
| UPPER_CASE | `MAX_LIMIT` | Constants, magic values | `const API_KEY = "abc123"` |

### Keywords

**Keywords** are reserved words in JavaScript that have special meaning to the language. They cannot be used as identifiers.

Common keywords include:

| Category | Keywords |
|----------|----------|
| Declarations | `var`, `let`, `const`, `function`, `class`, `import`, `export` |
| Control flow | `if`, `else`, `switch`, `case`, `break`, `continue`, `return` |
| Loops | `for`, `while`, `do` |
| Error handling | `try`, `catch`, `finally`, `throw` |
| Object/this | `this`, `super`, `new`, `delete`, `typeof`, `instanceof` |
| Async | `async`, `await`, `yield` |
| Other | `debugger`, `void`, `with`, `default`, `in`, `of` |

### Comments

```js
// This is a single-line comment

/* This is a 
   multi-line comment */

let x = 10; // This is an inline comment
```

**VS Code: Shortcut:** Duplicate line — `Ctrl + Shift + D` (Windows/Linux), `Shift + Option + ↑/↓` (Mac)

---

## Operators Quick Reference

### Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 10` | `15` |
| `-` | Subtraction | `5 - 10` | `-5` |
| `*` | Multiplication | `5 * 10` | `50` |
| `/` | Division | `5 / 10` | `0.5` |
| `%` | Modulus (Remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |

### Comparison Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Loose equality | `42 == "42"` | `true` |
| `===` | Strict equality | `42 === "42"` | `false` |
| `!=` | Loose not equal | `5 != "5"` | `false` |
| `!==` | Strict not equal | `5 !== "5"` | `true` |
| `>` | Greater than | `5 > 3` | `true` |
| `<` | Less than | `5 < 3` | `false` |
| `>=` | Greater than or equal | `4 >= 4` | `true` |
| `<=` | Less than or equal | `4 <= 3` | `false` |

**Best Practice:** Always prefer `===` and `!==` to avoid unexpected type coercion.

### Logical Operators

| Operator | Name | Example |
|----------|------|---------|
| `&&` | AND | `true && false` → `false` |
| `\|\|` | OR | `true \|\| false` → `true` |
| `!` | NOT | `!true` → `false` |

### Compound Assignment Operators

| Operator | Equivalent | Example |
|----------|-----------|---------|
| `+=` | `x = x + y` | `x += 10` |
| `-=` | `x = x - y` | `x -= 5` |
| `*=` | `x = x * y` | `x *= 2` |
| `/=` | `x = x / y` | `x /= 2` |

---

## Control Flow Summary

### If-Else

```js
if (condition) {
    // code block
} else if (anotherCondition) {
    // another code block
} else {
    // fallback code block
}
```

### Switch

```js
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // fallback
}
```

**Tip:** Always use `break` unless you intentionally want fall-through behavior.

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm init -y
   npm install @playwright/test
   ```

2. **Run a script:**
   ```bash
   node chapter_01_basics/01_basic.js
   ```

3. **Run with VS Code: debugger:**
   - Open any `.js` file
   - Press **F5** to launch with debugging
   - Press **Ctrl + F5** to run without debugging

4. **Run Playwright tests:**
   ```bash
   npx playwright test
   ```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or later
- npm (included with Node.js)

---

## VS Code: Shortcuts

See the dedicated shortcut reference files in `chapter_03_identifiers_rules.js/`:
- `VS_Code_short_windows.md` — Windows/Linux shortcuts
- `VS_Code_short_mac.md` — macOS shortcuts

Common essentials:

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Quick Open | `Ctrl+P` | `Cmd+P` |
| Toggle Terminal | `` Ctrl+` `` | `` Ctrl+` `` |
| Duplicate Line | `Ctrl+Shift+D` / `Shift+Alt+↑/↓` | `Shift+Option+↑/↓` |
| Toggle Comment | `Ctrl+/` | `Cmd+/` |
| Format Document | `Shift+Alt+F` | `Shift+Option+F` |

---

*Happy Learning! — Sharad Pareek*
