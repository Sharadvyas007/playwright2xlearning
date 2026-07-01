# 16 Callbacks

Understanding callback functions — the foundation of asynchronous JavaScript.

## Concepts

- **Callback Function**: A function passed as an argument into another function, which is then invoked inside the outer function.
- **Synchronous Callback**: Executed immediately within the calling function (e.g., `forEach`, `map`, `filter`).
- **Asynchronous Callback**: Executed later, after an asynchronous operation completes (e.g., `setTimeout`, file reading).
- **Callback Hell**: Deeply nested callbacks that make code difficult to read and maintain. Also called the "Pyramid of Doom."
- **Higher-Order Function**: A function that accepts another function as an argument or returns a function.
- **Event Loop**: JavaScript's mechanism for executing asynchronous callbacks using a call stack and message queue.

## Examples

```javascript
// Synchronous callback
let nums = [1, 2, 3, 4];
nums.forEach(function(num) {
    console.log(num * 2);
});

// Asynchronous callback
console.log("Start");
setTimeout(function() {
    console.log("Inside timeout");
}, 1000);
console.log("End");
// Output: Start → End → Inside timeout

// Callback with parameters
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}
greet("Sharad", function() {
    console.log("Callback executed!");
});

// Callback hell (nested callbacks)
function step1(cb) {
    setTimeout(() => { console.log("Step 1"); cb(); }, 1000);
}
function step2(cb) {
    setTimeout(() => { console.log("Step 2"); cb(); }, 1000);
}
function step3(cb) {
    setTimeout(() => { console.log("Step 3"); cb(); }, 1000);
}

step1(function() {
    step2(function() {
        step3(function() {
            console.log("All done!");
        });
    });
});
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
