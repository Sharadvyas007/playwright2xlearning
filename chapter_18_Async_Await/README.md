# 18 Async/Await

Writing asynchronous code that reads like synchronous code using `async` and `await`.

## Concepts

- **async Function**: A function declared with the `async` keyword. It always returns a Promise.
- **await**: Pauses the execution of an async function until the awaited Promise settles, then returns its result.
- **Sequential Execution**: Running async operations one after another using consecutive `await` statements.
- **Parallel Execution**: Running multiple independent async operations simultaneously using `Promise.all()`.
- **Error Handling**: Using `try...catch` blocks to handle rejected Promises in async functions.
- **Promise.all() with await**: Awaiting multiple Promises in parallel inside an async function.

## Examples

```javascript
// Basic async/await
async function greet() {
    return "Hello!";
}
greet().then(msg => console.log(msg)); // Hello!

// Sequential execution
async function sequential() {
    let user = await fetchUser(1);
    let orders = await fetchOrders(user.id);
    console.log(orders);
}

// Parallel execution
async function parallel() {
    let [users, products] = await Promise.all([
        fetchUsers(),
        fetchProducts()
    ]);
    console.log(users, products);
}

// Error handling with try/catch
async function getData() {
    try {
        let result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Flattening callback hell
async function runE2E() {
    await openBrowser();
    await goToLogin();
    await enterCredentials();
    await clickLogin();
    console.log("Test complete!");
}
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
