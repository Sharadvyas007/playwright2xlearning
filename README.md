# Playwright Learning

A collection of **Playwright** and **JavaScript** concept exercises for learning end-to-end testing and core JavaScript fundamentals.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Chapter Guide](#chapter-guide)
- [Playwright Testing](#playwright-testing)
- [CI / CD](#ci--cd)
- [Roadmap](#roadmap)
- [Useful Commands](#useful-commands)
- [Author](#author)

---

## Project Overview

This repository is a structured learning path covering JavaScript fundamentals (variables, operators, control flow, arrays, functions, strings, objects, 2D arrays) up to modern **Playwright** end-to-end browser automation. Each chapter contains focused `.js` files with hands-on examples, interview questions (IQ), and real-world QA scenarios.

**Tech Stack:** JavaScript, Node.js, Playwright, GitHub Actions

---

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI workflow
├── tests/
│   └── example.spec.js             # Sample Playwright E2E tests
├── chapter_01_Basics/              # Hello World, env setup, hot code
├── chapter_02_Javascript_Concepts/ # JS Basics
├── chapter_03_Identifier_Literals/ # Identifiers, naming conventions, comments
├── chapter_04_Javascript_Concepts/ # var / let / const, hoisting, TDZ
├── chapter_05_Literal/             # Literals — null, numbers, strings, template literals
├── chapter_06_Operator/            # Operators — arithmetic, comparison, logical, ternary
├── chapter_07_If_else/             # If / Else control flow
├── chapter_08_Switch_Statement/    # Switch cases
├── chapter_09_UserInput/           # Reading user input in Node.js
├── chapter_10_Loops/               # for, while, do-while, break, continue
├── chapter_11_Arrays/              # Arrays — creation, search, iterate, transform, sort
├── chapter_12_Funtions/            # Functions — declarations, arrow, scope, closures, HOF
├── chapter_13_Strings/             # Strings — quotes, search, slice, transform, conversion
├── chapter_14_Objects/             # Objects — literals, reference vs primitive, destructuring
├── chapter_15_2D_Array/            # 2D Arrays — grids, nested loops, test matrices
├── package.json                    # Project manifest
├── package-lock.json               # Locked dependencies
├── playwright.config.js            # Playwright test configuration
├── .gitignore                      # Ignores node_modules, test-results, reports
└── README.md                       # You are here
```

> **Note:** Each chapter folder contains its own focused `.js` files and a local `README.md` with deep-dive explanations. Explore chapter folders directly for detailed walk-throughs.

---

## Quick Start

### Prerequisites

| Tool       | Version              | Purpose               |
|------------|----------------------|-----------------------|
| Node.js    | 18+ (LTS recommended)| Runs all `.js` files  |
| npm        | Bundled with Node    | Package manager       |
| VS Code    | Latest               | Recommended editor    |
| Git        | Latest               | Clone the repo        |

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/Sharadvyas007/playwright2xlearning.git
cd playwright2xlearning

# 2. Install dependencies
npm ci

# 3. Verify your setup
node chapter_01_Basics/03_JS_Verify_Setup.js

# 4. Run your first JS program
node chapter_01_Basics/01_Basics.js
```

### Verify it works

```bash
$ node chapter_01_Basics/01_Basics.js
Hello The Testing Academy
```

If you see that line, you're all set!

---

## Chapter Guide

| Chapter | Topic | Files | Key Concepts |
|---------|-------|-------|--------------|
| **01** | Basics | `01`–`04` | `console.log`, variables, loops, env verification |
| **02** | JS Concepts | `05` | Variable declaration & reassignment |
| **03** | Identifiers | `06`–`08` | Naming rules, conventions, comments |
| **04** | Variables & Hoisting | `09`–`21` | `var`/`let`/`const`, hoisting, TDZ, scope |
| **05** | Literals | `22`–`29` | `null`, `undefined`, numbers, strings, template literals |
| **06** | Operators | `30`–`47` | Arithmetic, comparison (`==` vs `===`), logical, ternary, `++`/`--` |
| **07** | If / Else | `48`–`58` | Control flow, truthy/falsy, nested conditions, grade calculator, leap year |
| **08** | Switch | `59`–`67` | `switch`, `break`, fall-through, grouped cases, IQ traps |
| **09** | User Input | `68`–`70` | Browser `prompt()`, Node `readline`, `prompt-sync` |
| **10** | Loops | `71`–`82` | `for`, `while`, `do-while`, `continue`, star patterns |
| **11** | Arrays | `83`–`95` | Creation, `push`/`pop`/`splice`, `map`/`filter`/`reduce`, `sort` |
| **12** | Functions | `96`–`117` | Declarations, expressions, arrow functions, IIFE, closures, HOF, pure functions |
| **13** | Strings | `118`–`123` | Quotes, `slice` vs `substring`, `replace`, `split`/`join`, conversions |
| **14** | Objects | `124`–`137` | Literals, reference vs primitive, destructuring, spread, `get`/`set` |
| **15** | 2D Arrays | `138`–`142` | Grids, nested loops, test matrices, `map` + `reduce` on rows |

---

## Playwright Testing

This repository includes a full **Playwright** setup for end-to-end browser automation.

| File | Purpose |
|------|---------|
| `playwright.config.js` | Cross-browser config (Chromium, Firefox, WebKit) with HTML reporting |
| `tests/example.spec.js` | Sample E2E tests on [playwright.dev](https://playwright.dev/) |
| `package.json` | `@playwright/test` as a dev dependency |

### Run Tests Locally

```bash
# Install Playwright browsers (one-time)
npx playwright install

# Run all tests
npx playwright test

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
- [x] Playwright setup with sample tests
- [x] GitHub Actions CI workflow

### Coming Soon

- [ ] Async JavaScript — Callbacks, Promises, Async/Await
- [ ] Object-Oriented Programming — Classes, inheritance
- [ ] TypeScript — Type-safe automation code
- [ ] Advanced Playwright — Page Object Model, fixtures, API testing
- [ ] AI Agents — Self-healing tests, MCP-driven STLC
- [ ] Interview Q&A Bank

---

## Useful Commands

### JavaScript

```bash
node <file.js>                           # Run any chapter file
```

### TypeScript (Coming Soon)

```bash
npx tsc <file.ts>                        # Compile TS -> JS
npx ts-node <file.ts>                    # Run TS directly
```

### Playwright

```bash
npm init playwright@latest               # Scaffold Playwright project
npx playwright test                      # Run all tests
npx playwright test --ui                 # Interactive UI mode
npx playwright test --debug              # Debug with inspector
npx playwright codegen <url>             # Record a test
npx playwright show-report               # Open HTML report
npx playwright show-trace <trace.zip>  # Open trace viewer
```

---

## Author

**Sharad Pareek**

*Happy Learning!*
