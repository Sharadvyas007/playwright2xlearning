# 17 Promises

Understanding JavaScript Promises — the modern way to handle asynchronous operations.

## Concepts

- **Promise**: An object representing the eventual completion or failure of an asynchronous operation.
- **States**: A Promise can be in one of three states: `pending` (initial), `fulfilled` (success), or `rejected` (failure).
- **resolve**: A function called when the asynchronous operation completes successfully.
- **reject**: A function called when the asynchronous operation fails.
- **.then()**: Handles a fulfilled Promise and returns a new Promise for chaining.
- **.catch()**: Handles a rejected Promise (errors).
- **.finally()**: Executes cleanup code regardless of whether the Promise was fulfilled or rejected.
- **Promise.all()**: Waits for all Promises to resolve; fails fast if any rejects.
- **Promise.allSettled()**: Waits for all Promises to settle (resolve or reject) and returns their statuses.
- **Chaining**: Linking multiple `.then()` calls to execute asynchronous operations in sequence.

## Examples

```javascript
// Creating a Promise
let order = new Promise(function(resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("Pizza is delivered!");
    } else {
        reject("Order cancelled due to rain.");
    }
});

// Handling a Promise
order
    .then(function(message) {
        console.log("Success:", message);
    })
    .catch(function(error) {
        console.log("Error:", error);
    })
    .finally(function() {
        console.log("Cleanup done.");
    });

// Promise chaining
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: id, name: "User " + id }), 1000);
    });
}
fetchUser(1)
    .then(user => {
        console.log(user);
        return fetchUser(2);
    })
    .then(user => console.log(user));

// Promise.all
Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C")
]).then(results => console.log(results)); // ["A", "B", "C"]
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
