# 26 TypeScript Basics

Type-safe JavaScript — static types, type annotations, and compilation.

## Concepts

- **TypeScript**: A superset of JavaScript that adds static type checking. Code is compiled (transpiled) to plain JavaScript.
- **Type Annotation**: Explicitly declaring the type of a variable using a colon (`let name: string`).
- **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
- **any**: Disables type checking for a variable. Should be avoided when possible.
- **unknown**: Similar to `any`, but safer because you must narrow the type before using it.
- **Arrays**: Typed arrays declared as `number[]` or `Array<string>`.
- **Tuples**: Fixed-length arrays where each element has a known type.
- **Functions**: Parameter and return types can be annotated.
- **Objects**: Object shapes can be defined with typed properties.
- **Enums**: Named constant sets for related values.
- **Type Inference**: TypeScript automatically infers types when not explicitly annotated.
- **tsconfig.json**: Configuration file for TypeScript compiler options.

## Examples

```typescript
// Type annotations
let name: string = "Sharad";
let age: number = 30;
let isActive: boolean = true;

// Arrays and tuples
let scores: number[] = [85, 90, 78];
let person: [string, number] = ["Sharad", 30]; // tuple

// Functions
function add(a: number, b: number): number {
    return a + b;
}

// Objects
let user: { name: string; age: number } = {
    name: "Sharad",
    age: 30
};

// any vs unknown
let anything: any = 10;
anything = "hello"; // No error

let notSure: unknown = 10;
// notSure.toFixed(); // Error: Object is of type 'unknown'
if (typeof notSure === "number") {
    notSure.toFixed(); // OK after narrowing
}

// Enum
enum Status {
    Active,
    Inactive,
    Pending
}
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
