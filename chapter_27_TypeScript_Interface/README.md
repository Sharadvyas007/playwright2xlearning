# 27 TypeScript Interfaces

Defining contracts with interfaces — optional properties, readonly modifiers, and extension.

## Concepts

- **Interface**: A TypeScript construct that defines the shape (structure) an object must have. It acts as a contract.
- **Optional Properties**: Properties marked with `?` are not required when implementing the interface.
- **Readonly Properties**: Properties marked with `readonly` cannot be reassigned after creation.
- **Method Signatures**: Interfaces can declare functions that implementing objects must provide.
- **Interface Inheritance**: Interfaces can extend other interfaces using the `extends` keyword.
- **Class Implements**: A class can implement an interface, promising to provide all required properties and methods.
- **Callable Interfaces**: Interfaces that describe functions (call signatures).
- **Index Signatures**: Allow interfaces to accept additional properties with a specific type pattern.

## Examples

```typescript
// Basic interface
interface User {
    name: string;
    age: number;
    isAdmin?: boolean; // optional
}

let u: User = { name: "Sharad", age: 30 };

// Readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}
let p: Point = { x: 10, y: 20 };
// p.x = 5; // Error: Cannot assign to 'x'

// Method signatures
interface Calculator {
    add(a: number, b: number): number;
    subtract: (a: number, b: number) => number;
}

// Interface inheritance
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}

// Class implements interface
interface Runnable {
    run(): void;
}
class Program implements Runnable {
    run() {
        console.log("Program is running");
    }
}

// Callable interface
interface Logger {
    (message: string): void;
}
let log: Logger = (msg) => console.log(msg);
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
