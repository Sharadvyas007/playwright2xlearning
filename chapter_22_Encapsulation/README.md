# 22 Encapsulation

Data hiding and controlled access using getters, setters, and private fields.

## Concepts

- **Encapsulation**: Bundling data (properties) and methods that operate on that data within a single unit (class), while restricting direct access.
- **Private Fields (`#`)**: Truly private class fields accessible only inside the class.
- **Getter**: A method that retrieves the value of a property. Defined with the `get` keyword.
- **Setter**: A method that sets the value of a property, often with validation. Defined with the `set` keyword.
- **Validation**: Checking that data meets certain criteria before allowing it to be stored.
- **Controlled Access**: Exposing only safe methods to interact with internal data, preventing invalid states.

## Examples

```javascript
// Encapsulated bank account
class BankAccount {
    #balance = 0;

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log("Invalid deposit amount");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient funds or invalid amount");
        }
    }
}

let account = new BankAccount();
account.deposit(1000);
account.withdraw(300);
console.log(account.balance); // 700

// Encapsulated car with speed validation
class Car {
    #speed = 0;

    get speed() {
        return this.#speed;
    }

    set speed(value) {
        if (value >= 0 && value <= 200) {
            this.#speed = value;
        } else {
            console.log("Speed must be between 0 and 200");
        }
    }
}

let car = new Car();
car.speed = 120;
console.log(car.speed); // 120
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
