# 14 Objects

Deep dive into JavaScript objects — creation, access, methods, destructuring, spread, getters/setters.

## Concepts

- **Object**: A collection of key-value pairs where keys are strings (or Symbols) and values can be any data type.
- **Object Literal**: The simplest way to create an object using curly braces `{}`.
- **Dot Notation**: Accessing properties using a dot (e.g., `obj.name`).
- **Bracket Notation**: Accessing properties using square brackets (e.g., `obj["name"]`). Useful for dynamic keys.
- **Methods**: Functions stored as object properties.
- **this**: A keyword referring to the object that is executing the current function.
- **Destructuring**: Extracting multiple properties from an object into variables.
- **Spread Operator (`...`)**: Creates a shallow copy or merges objects.
- **Getters/Setters**: Special methods that allow controlled access to object properties.
- **Object.keys() / values() / entries()**: Methods to iterate over object properties.
- **Primitive vs Reference**: Primitives are copied by value; objects are copied by reference.

## Examples

```javascript
// Object literal
let user = {
    name: "Sharad",
    age: 30,
    greet() {
        return "Hi, I'm " + this.name;
    }
};

// Accessing properties
console.log(user.name);        // Sharad
console.log(user["age"]);      // 30

// Destructuring
let { name, age } = user;
console.log(name, age);

// Spread operator (shallow copy)
let userCopy = { ...user, city: "Mumbai" };

// Getters and setters
let person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};
console.log(person.fullName); // John Doe

// Iterating objects
console.log(Object.keys(user));    // ["name", "age", "greet"]
console.log(Object.values(user));  // ["Sharad", 30, function]
console.log(Object.entries(user)); // [["name", "Sharad"], ["age", 30], ...]

// Primitive vs Reference
let a = 10;
let b = a; // copy by value
b = 20;
console.log(a); // 10 (unchanged)

let obj1 = { x: 10 };
let obj2 = obj1; // copy by reference
obj2.x = 20;
console.log(obj1.x); // 20 (changed!)
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
