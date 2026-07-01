# 29 TypeScript Generics & Access Modifiers

Reusable generic code, access modifiers (`public`, `private`, `protected`), `readonly` fields, and abstract classes.

## Concepts

- **Generics**: Allow creating reusable components that work with multiple types while maintaining type safety.
- **Generic Function**: A function that accepts a type parameter (e.g., `function identity<T>(arg: T): T`).
- **Generic Class**: A class that accepts a type parameter, allowing the same class to work with different data types.
- **Generic Constraints**: Restricting the types that can be used with a generic parameter using `extends`.
- **public**: Default access modifier. Members are accessible from anywhere.
- **private**: Members are only accessible within the class they are declared.
- **protected**: Members are accessible within the class and its subclasses.
- **readonly**: Properties that can only be assigned during initialization or in the constructor.
- **Abstract Class**: A class that cannot be instantiated directly and is meant to be subclassed. Can contain abstract methods (without implementation).

## Examples

```typescript
// Generic function
function getFirst<T>(items: T[]): T {
    return items[0];
}
let firstNum = getFirst<number>([1, 2, 3]);
let firstStr = getFirst<string>(["a", "b"]);

// Generic class
class Box<T> {
    private content: T;
    constructor(value: T) {
        this.content = value;
    }
    getContent(): T {
        return this.content;
    }
}
let numBox = new Box<number>(100);
let strBox = new Box<string>("Hello");

// Access modifiers
class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    constructor(name: string, salary: number, dept: string) {
        this.name = name;
        this.salary = salary;
        this.department = dept;
    }
}

// readonly
class Config {
    readonly baseURL: string;
    constructor(url: string) {
        this.baseURL = url;
    }
}

// Abstract class
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
