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
│   ├── 04_HotCode.js        # Function definition and hot code reloading
│   └── 05_JS_Basics.js      # JavaScript reserved keywords reference list
└── chapter_02_Javascript_Concepts.js/
    ├── 05_JS_Basics.js      # Variable declaration with var
    └── 06_identifiers_rules.js  # Identifier naming rules ($, _, letters, numbers)
```

### Chapter 01 — Playwright Basics

Foundational setup and first JavaScript programs:

| File | Topics Covered |
|------|----------------|
| `01_basic.js` | `console.log` — first program |
| `02_JS.js` | `let` variables, basic arithmetic |
| `03_Verify_Setup.js` | `process.arch`, `process.version` |
| `04_HotCode.js` | Functions (`function` declaration, `return`) |
| `05_JS_Basics.js` | Reserved keywords (`let`, `const`, `if`, `for`, etc.) |

### Chapter 02 — JavaScript Concepts

Deeper dive into JavaScript language features:

| File | Topics Covered |
|------|----------------|
| `05_JS_Basics.js` | `var` declaration, scope basics |
| `06_identifiers_rules.js` | Valid identifiers (`$`, `_`, letters, digits; case sensitivity) |

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

### Identifiers

An **identifier** is the name given to a variable, function, class, or object property.

**Rules:**
- Must start with a letter (`a-z`, `A-Z`), underscore (`_`), or dollar sign (`$`)
- Subsequent characters can also include digits (`0-9`)
- Case-sensitive (`myVar` ≠ `myvar`)
- Cannot use reserved **keywords** as identifiers

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
