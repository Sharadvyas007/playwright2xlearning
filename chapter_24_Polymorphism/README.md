# 24 Polymorphism

Runtime polymorphism through method overriding.

## Concepts

- **Polymorphism**: The ability of different objects to respond to the same method call in different ways. Literally means "many forms."
- **Method Overriding**: Redefining a parent class method in a child class to provide specialized behaviour.
- **Runtime Polymorphism**: The decision about which method to execute is made at runtime based on the actual object's class.
- **Parent Reference / Child Object**: A parent class reference can point to a child class object, and the overridden method of the child is called.

## Examples

```javascript
// Method overriding
class Browser {
    launch() {
        console.log("Launching generic browser");
    }
}
class Chrome extends Browser {
    launch() {
        console.log("Launching Chrome");
    }
}
class Firefox extends Browser {
    launch() {
        console.log("Launching Firefox");
    }
}

// Runtime polymorphism
let browsers = [new Chrome(), new Firefox(), new Browser()];
for (let browser of browsers) {
    browser.launch();
}
// Output:
// Launching Chrome
// Launching Firefox
// Launching generic browser

// Parent reference with child object
let myBrowser = new Chrome();
myBrowser.launch(); // Launching Chrome
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
