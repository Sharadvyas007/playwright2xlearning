# Playwright Learning

A collection of Playwright and JavaScript concept exercises for learning end-to-end testing and core JavaScript fundamentals.

## Project Structure

```
├── .gitignore
├── README.md
├── 12_let_people_love.js
├── 13_const_explained.js
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
└── chapter_04_Javascript_Concept.js/
    ├── 09_var_let_const.js  # var, let, const examples
    ├── 10_function.js       # Function examples
    └── 11_var_explained.js  # var keyword deep dive
```

### Chapter 01 — Playwright Basics

Foundational setup and first JavaScript programs:

| File | Topics Covered |
|------|----------------|
| `01_basic.js` | `console.log` — first program |
| `02_JS.js` | `let` variables, basic arithmetic |
| `03_Verify_Setup.js` | `process.arch`, `process.version` |
| `04_HotCode.js` | Functions (`function` declaration, `return`) |

### Chapter 02 — JavaScript Concepts (legacy)

| File | Topics Covered |
|------|----------------|
| `05_JS_Basics.js` | `var` declaration, scope basics |

### Chapter 03 — Identifiers & Naming Conventions

| File | Topics Covered |
|------|----------------|
| `06_identifiers_rules.js` | Valid identifiers (`$`, `_`, letters, digits; case sensitivity) |
| `07_identifiers_Part2.js` | Naming conventions — camelCase, snake_case, PascalCase, UPPER_CASE |
| `08_comments.js` | Single-line and multi-line comments |

### Chapter 04 — Variables & Functions

| File | Topics Covered |
|------|----------------|
| `09_var_let_const.js` | Comparison of var, let, const declarations |
| `10_function.js` | Function declarations and expressions |
| `11_var_explained.js` | var keyword behavior and hoisting |

### Root-level files

| File | Topics Covered |
|------|----------------|
| `12_let_people_love.js` | let keyword examples |
| `13_const_explained.js` | const keyword examples |

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

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or later
- npm (included with Node.js)
