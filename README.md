# Playwright Learning

A collection of Playwright and JavaScript concept exercises for learning end-to-end testing and core JavaScript fundamentals.

## Project Structure

```
├── .gitignore
├── README.md
├── chapter_01_basics/
│   ├── 01_basic.js          # First JavaScript code (console.log)
│   ├── 02_JS.js             # Variable declaration and arithmetic (sum)
│   ├── 03_Verify_Setup.js   # Verify Node.js environment (process.arch, process.version)
│   └── 04_HotCode.js        # Function definition and hot code reloading
├── chapter_02_Javascript_Concepts.js/
│   └── 05_JS_Basics.js      # Variable declaration with var
├── chapter_03_identifiers_rules.js/
│   ├── 06_identifiers_rules.js  # Identifier naming rules ($, _, letters, numbers)
│   ├── 07_identifiers_Part2.js  # Naming conventions (camelCase, snake_case, etc.)
│   ├── 08_comments.js           # Comments in JavaScript
│   ├── VS_Code_short_mac.md     # VS Code shortcuts for Mac
│   └── VS_Code_short_windows.md # VS Code shortcuts for Windows
├── chapter_04_Javascript_Concept.js/
│   ├── 09_var_let_const.js    # var, let, const examples
│   ├── 10_function.js         # Function examples
│   ├── 11_var_explained.js    # var keyword deep dive
│   ├── 12_let_people_love.js  # let keyword examples
│   └── 13_const_explained.js  # const keyword examples
    └── Chapter_06_operators.js/
        ├── 30_operators.js                       # Operators overview
        ├── 31_Arithmetic_OP.js                   # Arithmetic operators
        ├── 32_Modulus_OP.js                      # Modulus operator
        ├── 33_Expo_OP.js                         # Exponentiation operator
        ├── 34_iq.JS                              # IQ / interview questions
        ├── 35_Comparision_OP.js                  # Comparison operators
        ├── 36_Comparison__Strict_loose.js        # Strict vs loose comparison
        ├── 37_IQ__Loose_Strict.js                # IQ on loose vs strict
        ├── 38_Confusing_Comparison.js            # Confusing comparison cases
        ├── 39_Logical_OP.js                      # Logical operators
        ├── 40_String_Con_OP.js                   # String concatenation
        ├── 41_Ternary_OP.js                      # Ternary operator
        ├── 42_Type_OP.js                         # typeof operator
        ├── 43_Incre_Decre_OP.js                  # Increment / decrement
        └── 44_Null_OP.js                         # Nullish coalescing

├── Playwright_Class_learning2x/              # Batch 2x Course Companion (NEW ADDON)
│   ├── chapter_01_Basics/                    # Hello World, env setup, hot code
│   ├── chapter_02_Javascript_Concepts/       # JS Basics
│   ├── chapter_03_Identifier_Literals/       # Identifiers, literals & comments
│   ├── chapter_04_Javascript_Concepts/       # var / let / const, hoisting & TDZ
│   ├── chapter_05_Literal/                   # Literals — null, numbers, strings, template
│   ├── chapter_06_Operator/                  # Operators — arithmetic, comparison, logical
│   └── README.md                             # Detailed course README with mermaid diagrams
```

---

## Chapter 01 — Playwright Basics

Foundational setup and first JavaScript programs.

| File | Topics Covered | Description |
|------|----------------|-------------|
| `01_basic.js` | `console.log` | The very first JavaScript program. Prints `"Hello, This is my first JavaScript code!"` to the console. |
| `02_JS.js` | `let` variables, basic arithmetic | Declares two variables `x = 10` and `y = 20`, computes their sum, and logs the result using string concatenation. |
| `03_Verify_Setup.js` | `process.arch`, `process.version` | Verifies the Node.js environment by logging the system architecture and Node.js version. |
| `04_HotCode.js` | Functions (`function` declaration, `return`) | Defines an `add(a, b)` function, loops from 0 to 100 calling it, and logs the final result. Demonstrates function definitions and `for` loops. |

---

## Chapter 02 — JavaScript Concepts (Legacy)

| File | Topics Covered | Description |
|------|----------------|-------------|
| `05_JS_Basics.js` | `var` declaration, scope basics | Simple `var` declaration (`var a = 15`) and console output. Entry point to understanding variable declarations. |

---

## Chapter 03 — Identifiers & Naming Conventions

| File | Topics Covered | Description |
|------|----------------|-------------|
| `06_identifiers_rules.js` | Valid identifiers (`$`, `_`, letters, digits; case sensitivity) | Demonstrates valid and invalid identifier names: `$`, `_abc`, `abc123`, `Name` vs `name`, `sharad_pareek`, `sharad$pareek`. Shows that identifiers cannot start with a number and cannot contain spaces. |
| `07_identifiers_Part2.js` | Naming conventions — camelCase, snake_case, PascalCase, UPPER_CASE | Practical examples of all major naming conventions: `firstName` (camelCase), `first_name` (snake_case), `Person` class (PascalCase), `MAX_LIMIT` (UPPER_CASE). Also includes `$count` and `_privateVar`. |
| `08_comments.js` | Single-line and multi-line comments | Shows `//` single-line comments, `/* */` multi-line comments, and inline comments. Includes the VS Code duplicate line shortcut (`Ctrl + Shift + D`). |
| `VS_Code_short_mac.md` | VS Code keyboard shortcuts for macOS | Comprehensive reference of 25+ VS Code shortcuts for Mac users including Command Palette, Quick Open, terminal, multi-cursor, formatting, and navigation. |
| `VS_Code_short_windows.md` | VS Code keyboard shortcuts for Windows | Comprehensive reference of 25+ VS Code shortcuts for Windows users including Command Palette, Quick Open, terminal, multi-cursor, formatting, and navigation. |

---

## Chapter 04 — Variables & Functions

| File | Topics Covered | Description |
|------|----------------|-------------|
| `09_var_let_const.js` | Comparison of var, let, const declarations | Side-by-side examples of `var`, `let`, and `const`. Demonstrates `var` re-declaration (`var browser` declared twice) and re-assignment. Shows the key differences between the three declaration types. |
| `10_function.js` | Function declarations and expressions | Defines a `greet()` function that logs a greeting message, then calls it twice to demonstrate function invocation. |
| `11_var_explained.js` | var keyword behavior and hoisting | Deep dive into `var` function-scoped behavior. Shows how `var` inside a function and inside an `if` block all refer to the same variable due to function scoping (not block scoping). |
| `12_let_people_love.js` | let keyword examples | Demonstrates `let` block-scoping with a `retryCount` variable that increments, and a `testStatus` example where `executiontime` is scoped inside an `if` block. Includes the note: "let is loyal, var is variable/traitor". |
| `13_const_explained.js` | const keyword examples | Shows `const BaseUrl` that cannot be reassigned. Demonstrates block scoping with `let name` inside a block and inside a function, showing how `let` creates new bindings in different scopes. |

---

## Chapter 06 — Operators

| File | Topics Covered | Description |
|------|----------------|-------------|
| `30_operators.js` | Operators overview | Placeholder file for operators overview (to be populated). |
| `31_Arithmetic_OP.js` | Arithmetic operators (`+`, `-`, `*`, `/`) | Demonstrates basic arithmetic operations: addition, subtraction, multiplication, and division using variables `a = 5` and `b = 10`. |
| `32_Modulus_OP.js` | Modulus operator (`%`) | Demonstrates the remainder/modulus operator which returns the remainder of a division operation. |
| `33_Expo_OP.js` | Exponentiation operator (`**`) | Demonstrates the exponentiation operator for raising a number to a power (e.g., `2 ** 3 = 8`). |
| `34_iq.JS` | Compound / assignment operators | Demonstrates compound assignment operators like `+=` with `x += 10` which is shorthand for `x = x + 10`. |
| `35_Comparision_OP.js` | Comparison operators (`>`, `<`, `>=`, `<=`, `==`, `===`) | Explains comparison operators with examples. Includes the analogy: `==` is "loose comparison" (like sikh vs hindu) while `===` is "strict comparison" (like sikh vs sikh — checks language and living). Demonstrates relational comparisons and introduces logical OR concepts. |
| `36_Comparison__Strict_loose.js` | Strict (`===`) vs loose (`==`) equality | Side-by-side comparison showing `42 == "42"` returns `true` (type coercion) while `42 === "42"` returns `false` (strict type + value check). |
| `37_IQ__Loose_Strict.js` | IQ questions on loose vs strict equality | Tricky interview questions exploring JavaScript coercion edge cases: `"" == 0`, `0 == "0"`, `"" == "0"` (transitivity broken!), `0 == false`, `null == 0`, `null == undefined`, and `null === undefined`. |
| `38_Confusing_Comparison.js` | Tricky comparison cases | Comprehensive collection of JavaScript's most confusing comparison behaviors: transitivity traps, boolean coercion surprises (`false == []`), null & undefined edge cases, array/object weirdness (`[] == ![]` is `true`), and NaN behavior (`NaN == NaN` is `false`). Concludes with best practice: always use `===`. |
| `39_Logical_OP.js` | Logical operators (`&&`, `\|\|`, `!`) | Placeholder file for logical operators (to be populated). |
| `40_String_Con_OP.js` | String concatenation with `+` | Placeholder file for string concatenation operator (to be populated). |
| `41_Ternary_OP.js` | Ternary (conditional) operator (`? :`) | Placeholder file for ternary operator (to be populated). |
| `42_Type_OP.js` | `typeof` operator | Placeholder file for typeof operator (to be populated). |
| `43_Incre_Decre_OP.js` | Increment (`++`) and decrement (`--`) | Placeholder file for increment and decrement operators (to be populated). |
| `44_Null_OP.js` | Nullish coalescing operator (`??`) | Demonstrates null comparisons: `null >= 0` and `null === 0`, showing how null behaves unexpectedly in comparisons due to type coercion rules. |

---

## Playwright Class Learning 2x — New Addon

A comprehensive **Batch 2x course companion** has been added under `Playwright_Class_learning2x/`. This addon includes a fully reorganized curriculum with in-depth explanations, mermaid diagrams, interview Q&A, and extended coverage of JavaScript fundamentals through Chapter 6.

### What's Inside the Addon

| Folder | Chapters | Status |
|--------|----------|--------|
| `chapter_01_Basics/` | 1–4 | Environment setup, first programs, hot code paths |
| `chapter_02_Javascript_Concepts/` | 5 | Variables & console output |
| `chapter_03_Identifier_Literals/` | 6–8 | Identifier rules, naming conventions, comments, VS Code shortcuts |
| `chapter_04_Javascript_Concepts/` | 9–21 | var / let / const, function scope, block scope, hoisting, TDZ deep-dive, junior QA interview questions |
| `chapter_05_Literal/` | 22–29 | Literals, null vs undefined, number forms (binary, octal, hex, BigInt), strings, template literals |
| `chapter_06_Operator/` | 30–44 | Arithmetic, modulus, exponentiation, compound assignment, comparison (loose vs strict), confusing comparisons, logical, string concatenation |

### Key Features of the Addon

- **Mermaid diagrams** for curriculum roadmap, learning flow, TDZ sequences, and mindmaps
- **Interview Q&A sections** explaining *why* concepts work the way they do
- **Playwright-relevant examples** (template literals for selectors, assertions, screenshot paths)
- **Detailed weekly plan** covering JavaScript → TypeScript → Playwright → AI Agents & MCP
- **Useful commands** reference for Node.js, TypeScript, and Playwright CLI

For the full experience, see `Playwright_Class_learning2x/README.md`.

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

**VS Code Shortcut:** Duplicate line — `Ctrl + Shift + D` (Windows/Linux), `Shift + Option + ↑/↓` (Mac)

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

3. **Run Playwright tests:**
   ```bash
   npx playwright test
   ```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or later
- npm (included with Node.js)

---

## VS Code Shortcuts

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
