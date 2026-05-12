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
