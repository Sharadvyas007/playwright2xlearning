# 21 Classes and Objects

Object-Oriented Programming fundamentals — classes, constructors, private fields, and static members.

## Concepts

- **Class**: A blueprint for creating objects with predefined properties and methods.
- **Constructor**: A special method in a class that runs automatically when an object is created using `new`.
- **Instance**: An object created from a class using the `new` keyword.
- **Method**: A function defined inside a class that operates on instance data.
- **Private Fields (`#`)**: Class fields prefixed with `#` that are only accessible within the class.
- **Static Members**: Properties or methods belonging to the class itself, not to individual instances.
- **this Keyword**: Refers to the current instance of the class.

## Examples

```javascript
// Basic class
class Car {
    constructor(model) {
        this.model = model;
    }
    drive() {
        console.log(this.model + " is driving");
    }
}
let myCar = new Car("Tesla");
myCar.drive(); // Tesla is driving

// Private fields
class Credentials {
    #apiKey;
    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;
    }
    getAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}
let cred = new Credentials("admin", "secret");
console.log(cred.getAuthHeader()); // Bearer secret

// Static members
class MathUtils {
    static PI = 3.14159;
    static square(x) {
        return x * x;
    }
}
console.log(MathUtils.PI);       // 3.14159
console.log(MathUtils.square(4)); // 16
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
