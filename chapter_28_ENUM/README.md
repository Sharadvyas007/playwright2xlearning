# 28 Enums

Using TypeScript enums to model fixed sets of values — test statuses, severity levels, browsers, and HTTP methods.

## Concepts

- **Enum**: A TypeScript feature that defines a set of named constants, making code more readable and maintainable.
- **Numeric Enums**: Enums where members are auto-incremented numbers starting from 0 (or a custom start value).
- **String Enums**: Enums where each member is explicitly assigned a string value.
- **Heterogeneous Enums**: Enums that mix numeric and string values (not recommended).
- **Reverse Mapping**: Numeric enums support reverse mapping from value to name.
- **const Enums**: Enums that are completely removed during compilation and replaced with inline values.
- **Enum as Types**: Enums can be used as types to restrict variable values to enum members.

## Examples

```typescript
// String enum
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}
let currentStatus: Status = Status.Active;

// Numeric enum
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}
console.log(Direction.Up);    // 0
console.log(Direction[0]);    // "Up" (reverse mapping)

// Enum with custom numeric values
enum HttpStatus {
    OK = 200,
    NotFound = 404,
    Error = 500
}

// Enum as function parameter
function setStatus(s: Status): void {
    console.log("Status set to:", s);
}
setStatus(Status.Pending);

// Enum with switch
enum Browser {
    Chrome = "chrome",
    Firefox = "firefox"
}
function launch(b: Browser) {
    switch (b) {
        case Browser.Chrome:
            console.log("Launching Chrome");
            break;
        case Browser.Firefox:
            console.log("Launching Firefox");
            break;
    }
}
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*
