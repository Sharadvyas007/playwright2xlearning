# 23 Inheritance

Reusing and extending class behaviour — single, multiple, multilevel, and hierarchical inheritance patterns.

## Concepts

- **Inheritance**: A mechanism where a new class (child/subclass) derives properties and methods from an existing class (parent/superclass).
- **extends**: The keyword used to create a subclass that inherits from a parent class.
- **super()**: Calls the parent class constructor from the child class constructor.
- **Single Inheritance**: A child class inherits from exactly one parent class.
- **Multilevel Inheritance**: A class inherits from a child class, forming a grandparent → parent → child chain.
- **Hierarchical Inheritance**: Multiple child classes inherit from a single parent class.
- **Method Overriding**: Redefining a parent class method in the child class with different behaviour.
- **super.method()**: Calling a parent class method from within an overridden child method.

## Examples

```javascript
// Single inheritance
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}
let dog = new Dog();
dog.speak(); // Dog barks

// Constructor inheritance with super()
class Employee {
    constructor(name) {
        this.name = name;
    }
}
class Engineer extends Employee {
    constructor(name, skill) {
        super(name);
        this.skill = skill;
    }
}
let eng = new Engineer("Sharad", "QA");
console.log(eng.name, eng.skill);

// Multilevel inheritance
class GrandParent {
    generation() { return "GrandParent"; }
}
class Parent extends GrandParent {
    generation() { return "Parent"; }
}
class Child extends Parent {
    generation() { return "Child"; }
}

// Hierarchical inheritance
class Vehicle {
    move() { console.log("Moving"); }
}
class Car extends Vehicle {
    move() { console.log("Car driving"); }
}
class Bike extends Vehicle {
    move() { console.log("Bike riding"); }
}
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
