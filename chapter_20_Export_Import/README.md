# 20 Export / Import

ES module patterns — named imports, default imports, and aliased imports.

## Concepts

- **Modules**: Self-contained pieces of code that export functionality to be imported by other files.
- **Named Export**: Exporting multiple values from a module using `export`. Must be imported with the same name in curly braces.
- **Default Export**: A single primary export from a module using `export default`. Can be imported with any name.
- **Named Import**: Importing specific named exports using `import { name } from './module'`.
- **Default Import**: Importing the default export using `import name from './module'`.
- **Aliased Import**: Renaming an import to avoid naming conflicts using `import { name as alias }`.
- **Import All**: Importing everything from a module into a namespace using `import * as name`.

## Examples

```javascript
// math.js — Named exports
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}

// logger.js — Default export
export default function log(message) {
    console.log("[LOG] " + message);
}

// main.js — Importing
import { add, subtract } from './math.js';
import log from './logger.js';
import { add as sum } from './math.js';
import * as MathUtils from './math.js';

console.log(add(2, 3));           // 5
log("Application started");       // [LOG] Application started
console.log(sum(5, 5));           // 10
console.log(MathUtils.subtract(10, 4)); // 6
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
