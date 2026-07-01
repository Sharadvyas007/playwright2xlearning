# 03 Identifiers & Naming Conventions

Rules and conventions for naming variables, functions, and other identifiers in JavaScript.

## Concepts

- **Identifiers**: Names given to variables, functions, classes, etc. Must start with a letter, underscore (`_`), or dollar sign (`$`). Subsequent characters can include digits.
- **camelCase**: Convention where the first word is lowercase and each subsequent word starts with uppercase (e.g., `firstName`). Commonly used for variables and functions.
- **snake_case**: All lowercase with words separated by underscores (e.g., `first_name`).
- **PascalCase**: Every word starts with uppercase (e.g., `UserProfile`). Used for class names.
- **SCREAMING_SNAKE_CASE**: All uppercase with underscores (e.g., `MAX_SIZE`). Used for constants.
- **Comments**: Notes in code ignored by the compiler. Single-line (`//`), multi-line (`/* */`), and JSDoc styles.
- **VS Code Shortcuts**: Keyboard combinations to speed up coding, navigation, and debugging.

## Examples

```javascript
// Valid identifiers
let userName = "John";    // camelCase
let user_name = "John";   // snake_case
let _private = 10;        // underscore start
let $element = "div";     // dollar start

// Naming conventions
let firstName = "Sharad";          // camelCase for variables
let MAX_RETRIES = 5;               // SCREAMING_SNAKE_CASE for constants
class UserProfile {}               // PascalCase for classes

// Comments
// This is a single-line comment
/* This is a
   multi-line comment */
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
