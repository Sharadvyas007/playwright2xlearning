# 25 OOP Interview Questions

Hands-on OOP coding exercises for interviews.

## Concepts

- **Class Design**: Creating well-structured classes with appropriate properties, methods, and access modifiers.
- **Encapsulation**: Hiding internal data and exposing only necessary methods.
- **Inheritance**: Reusing code by deriving new classes from existing ones.
- **Polymorphism**: Allowing objects of different classes to be treated uniformly through a common interface.
- **Abstraction**: Focusing on essential qualities rather than specific characteristics.
- **Composition over Inheritance**: Building complex behaviour by combining simpler objects rather than deep inheritance hierarchies.

## Examples

```javascript
// Student class with encapsulation
class Student {
    #name;
    #marks;
    constructor(name, marks) {
        this.#name = name;
        this.#marks = marks;
    }
    getGrade() {
        if (this.#marks >= 90) return "A";
        if (this.#marks >= 80) return "B";
        if (this.#marks >= 70) return "C";
        return "F";
    }
}

// Shape hierarchy with polymorphism
class Shape {
    area() { return 0; }
}
class Circle extends Shape {
    constructor(r) { super(); this.r = r; }
    area() { return Math.PI * this.r * this.r; }
}
class Rectangle extends Shape {
    constructor(l, w) { super(); this.l = l; this.w = w; }
    area() { return this.l * this.w; }
}

let shapes = [new Circle(5), new Rectangle(4, 5)];
shapes.forEach(s => console.log(s.area()));

// Bank account with transaction history
class BankAccount {
    #balance = 0;
    #transactions = [];
    deposit(amount) {
        this.#balance += amount;
        this.#transactions.push({ type: "deposit", amount });
    }
    getBalance() { return this.#balance; }
    getTransactions() { return [...this.#transactions]; }
}
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
