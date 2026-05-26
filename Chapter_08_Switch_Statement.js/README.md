# Chapter 08: Switch Statement

This chapter covers the `switch` statement in JavaScript, including syntax, `break` behavior, `default` usage, grouping cases, real-time examples, and tricky interview questions (IQs).

---

## File Descriptions

### 1. `59_Switch.js`

**Description:** A basic `switch` example that maps numeric day values (1–7) to weekday names. Demonstrates standard `case`, `break`, and `default` usage.

**What it does:**
Given `day = 4`, the switch matches `case 4` and prints `Thur`.

```javascript
let day = 4;
// 1 - mon, 2. - tue

switch (day) {
    case 1:
        console.log('Mon');
        break;
    case 2:
        console.log('Tue');
        let a = 10;
        let b = 30;
        console.log(a + b);
        break;
    case 3:
        console.log('Wed');
        break;
    case 4:
        console.log('Thur');
        break;
    case 5:
        console.log('Fri');
        break;
    case 6:
        console.log('Sat');
        break;
    case 7:
        console.log('Sun');
        break;
    default:
        console.log("No idea which day it is");
}
```

---

### 2. `60_No_Break.js`

**Description:** Demonstrates fall-through behavior when `break` is omitted. Once a case matches, all subsequent cases execute until a `break` or the end of the switch.

**What it does:**
With `day = 2`, the switch prints from `Tuesday` through `Invalid day value` because there are no `break` statements.

```javascript
// Switch
// 0 - Sunday, 1 - Monday, 2 - Tue.....
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
    case 1:
        console.log("Monday — Sprint Planning");
    case 2:
        console.log("Tuesday — Development");
    case 3:
        console.log("Wednesday — Code Review");
    case 4:
        console.log("Thursday — Testing");
    case 5:
        console.log("Friday — Deployment & Retro");
    case 6:
        console.log("Saturday — Rest Day");
    default:
        console.log("Invalid day value");
}
```

---

### 3. `61_Default.js`

**Description:** Shows how the `default` case runs when none of the provided cases match the expression.

**What it does:**
With `day = 10`, no case matches, so the `default` block executes and prints `Invalid day value`.

```javascript
// Switch
// 0 - Sunday, 1 - Monday, 2 - Tue.....
let day = 10;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
        break;
    case 1:
        console.log("Monday — Sprint Planning");
        break;
    case 2:
        console.log("Tuesday — Development");
        break;
    case 3:
        console.log("Wednesday — Code Review")
        break;
    case 4:
        console.log("Thursday — Testing");
        break;
    case 5:
        console.log("Friday — Deployment & Retro");
        break;
    case 6:
        console.log("Saturday — Rest Day");
        break;
    default:
        console.log("Invalid day value");
}
```

---

### 4. `62_REAL_TIME_EXAMPLE.js`

**Description:** A practical use case of `switch` for API response code validation, mapping HTTP status codes to messages.

**What it does:**
Given `responseCode = 404`, it matches `case 404` and prints `404 Not found!`.

```javascript
// You are working API Validation
// response Code - 200, 404, 401, 403.....404


let responseCode = 404;

switch (responseCode) {

    case 200:
        console.log("200 Ok");
        break;
    case 404:
        console.log("404 Not found!");
        break;
    default:
        console.log("Not status code match");

}
```

---

### 5. `63_Switch_Group.js`

**Description:** Demonstrates grouping multiple `case` labels together so they share the same code block. Useful for categorizing values.

**What it does:**
Given `browser = "Firefox"`, it matches the grouped Chromium browsers or Mozilla/Apple categories. Here it prints `Mozilla Project!`.

```javascript
let browser = "Firefox";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");

}
```

---

### 6. `64_IQ_Switch.js`

**Description:** An interview-style question illustrating fall-through behavior without `break`.

**What it does:**
With `fruit = "banana"`, it matches `case "banana"` and falls through all the way to `default`, printing `Banana selected`, `Cherry selected`, `Date selected`, and `Default reached`.

```javascript
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
    case "banana":
        console.log("Banana selected");
    case "cherry":
        console.log("Cherry selected");
    case "date":
        console.log("Date selected");
    default:
        console.log("Default reached");
}
```

---

### 7. `65_IQ2.js`

**Description:** Shows a clever pattern where `switch(true)` is used with boolean expressions in `case` clauses to perform range checks.

**What it does:**
Given `testScore = 85`, it matches `case (testScore >= 85)` and prints `Excellent — Above expectations`.

```javascript
let testScore = 85;
switch (true) {
    case (testScore >= 95):
        console.log("Outstanding — Top performer");
        break;
    case (testScore >= 85):
        console.log("Excellent — Above expectations");
        break;
    case (testScore >= 70):
        console.log("Good — Meets expectations");
        break;
    case (testScore >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory — Requires training");
}
```

---

### 8. `66_IQ3.js`

**Description:** Demonstrates that JavaScript allows duplicate `case` values, but only the first matching case will execute.

**What it does:**
With `x = 10`, the first `case 10:` executes, printing `1`. The second `case 10:` is ignored. The comment notes that duplicate cases are allowed, but the first one takes precedence.

```javascript
let x = 10;
switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("d");

}

// IT will allow you to have the duplicate case with first as the usage.
```

---

### 9. `67_IQ4.js`

**Description:** Highlights JavaScript's strict equality (`===`) behavior inside `switch`. A commented-out section shows that `5` (number) and `"5"` (string) do not match. The live code shows that `false` and `0` are also not strictly equal.

**What it does:**
With `status = 0`, `case false:` does not match because `0 === false` is `false` in strict equality. It falls through to `case 0:` and prints `0 matched`.

```javascript
// let value = "5";
// console.log(typeof value);

// switch (value) {
//     case 5:
//         console.log("Number 5 matched");
//         break;
//     case "5":
//         console.log("String '5' matched");
//         break;
// }

let status = 0;
console.log(typeof status)
switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}
```

---

## Summary

- **Basic Switch:** `59_Switch.js`
- **Fall-Through (No Break):** `60_No_Break.js`, `64_IQ_Switch.js`
- **Default Behavior:** `61_Default.js`
- **Real-Time Example:** `62_REAL_TIME_EXAMPLE.js`
- **Grouped Cases:** `63_Switch_Group.js`
- **Range Checks with `switch(true)`:** `65_IQ2.js`
- **Duplicate Cases:** `66_IQ3.js`
- **Strict Equality in Switch:** `67_IQ4.js`
