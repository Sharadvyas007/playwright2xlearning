# Chapter 07: If-Else Statements in JavaScript

This chapter covers the fundamentals and practical applications of `if`, `else if`, and `else` statements in JavaScript. It includes basic syntax, nested conditions, logical operators, truthy/falsy values, and real-world examples like grade calculation and leap year checking.

## Table of Contents

- [48_IF_Else.js](#48_if_elsejs)
- [49_If_elseif_else.js](#49_if_elseif_elsejs)
- [50_REAL_IF_ELSE.js](#50_real_if_elsejs)
- [51_API_IF_Else.js](#51_api_if_elsejs)
- [52_IQ_IF_ELSE.js](#52_iq_if_elsejs)
- [53_IF_ELSE_real.js](#53_if_else_realjs)
- [54_IQ.js](#54_iqjs)
- [55_IE.js](#55_iejs)
- [56_IQ_EVEN_ODD.js](#56_iq_even_oddjs)
- [57_Grade_Calc.js](#57_grade_calcjs)
- [58_LEAP_YEAR.js](#58_leap_yearjs)
- [58_Task_20may.js](#58_task_20mayjs)
- [Task_21_May.js](#task_21_mayjs)
- [Practice_IF_ELSE.js](#practice_if_elsejs)

---

## 48_IF_Else.js

**Description:** A basic if-else example that checks if a person is eligible to vote based on their age.

```javascript
let age = 20;

if (age > 18) {
    console.log("You are allowed to vote!")
} else {
    console.log("You are not allowed  to vote!")
}
```

**Explanation:** This script sets `age` to 20 and checks if it is greater than 18. If true, it prints that the user is allowed to vote; otherwise, it prints that voting is not allowed.

---

## 49_If_elseif_else.js

**Description:** Demonstrates an if-else if-else ladder to assign letter grades based on a numeric score.

```javascript
let score = 78;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F- Fail");
    console.log("Rewartch all videoa nd give the test again");
}
```

**Explanation:** The script evaluates a score of 78 and prints the corresponding grade (A, B, C, D, or F). It also prints a motivational message for failing scores.

---

## 50_REAL_IF_ELSE.js

**Description:** A real-world nested if-else example simulating role-based access control for a web application.

```javascript
// let age = 18;

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// app.vwo.com -> viewer, editor or admin -> 


let isLoggedIn = true;
let userRole = "admin";

if (isLoggedIn) {

    if (userRole === "admin") {
        console.log("You are an admin, can do all the things");
    }
    else if (userRole === "editor") {
        console.log("Welcome Editor — Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer — Read-only access.");
    } else {
        console.log("No idea you may be a guest! role");
    }


} else {
    console.log("You are not logged in!!");
}
```

**Explanation:** This script first checks if a user is logged in. If true, it further checks the user's role (admin, editor, viewer, or guest) and prints the appropriate access message.

---

## 51_API_IF_Else.js

**Description:** Demonstrates handling HTTP status codes using if-else if-else conditions.

```javascript
let statusCode = 200;

if (statusCode === 200) {
    console.log("API are working fine!")
} else if (statusCode === 404) {
    console.log("API not found!")
} else {
    console.log("Not status code match!")
}
```

**Explanation:** The script checks an API status code. If it is 200, the API is working fine; if 404, the API is not found; otherwise, it prints a generic no-match message.

---

## 52_IQ_IF_ELSE.js

**Description:** Explores truthy and falsy values in JavaScript through various if conditions.

```javascript
if ("hello") console.log("String is truthy"); // // "hello" = truthy
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy!");
if ([]) console.log("Empty array is truthy!");

// if ("") console.log("Won't print");
// if (null) console.log("Won't print");
// if (undefined) console.log("Won't print");
// if (NaN) console.log("Won't print");
// if (0) console.log("Won't print");

// ANY NUMBER = 1,2,,3,34,32,2,- TRUTH
// 0= FALSE

let name = 0;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}
```

**Explanation:** This script demonstrates how JavaScript evaluates different values in boolean contexts. Non-empty strings, numbers, objects, and arrays are truthy, while 0, empty strings, null, undefined, and NaN are falsy. The final block prints "Bye" because `name` is 0 (falsy).

---

## 53_IF_ELSE_real.js

**Description:** A real-world login validation example using logical operators combined with if-else.

```javascript
let username = "Dev";
let password = "secure123";
let isAccountLocked = true;

// Logical operator + if-else statement

if ((username === "Dev" && password === "secure123") && isAccountLocked) {
    console.log("Allowed to enter");
} else {
    console.log("not allwed to enter");
}
```

**Explanation:** This script checks if the username and password match the expected values AND if the account is locked. If all conditions are met, access is granted; otherwise, it is denied.

---

## 54_IQ.js

**Description:** Shows that a single-line if statement does not require curly braces, though the commented else block is inactive.

```javascript
let x = 4;
if (x > 5)
    console.log("x is big");


// else
//     console.log("No result");
```

**Explanation:** The script assigns 4 to `x` and checks if it is greater than 5. Since it is not, nothing is printed. It also illustrates that if statements can be written without braces for a single line of code.

---

## 55_IE.js

**Description:** A minimal example showing that a standalone `if` statement without an `else` block is valid.

```javascript
// Single if is allowed. 
if (true) {
    console.log("Everything is alright")
}
```

**Explanation:** This script simply checks if `true` is truthy (which it always is) and prints "Everything is alright". It demonstrates that an else block is optional.

---

## 56_IQ_EVEN_ODD.js

**Description:** Checks whether a given number is even or odd using the modulo operator.

```javascript
let num = 112;

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
```

**Explanation:** The script uses the modulo operator (`%`) to check if 112 is divisible by 2 without a remainder. If yes, it prints that the number is even; otherwise, it prints odd.

---

## 57_Grade_Calc.js

**Description:** A grade calculator that maps numeric marks to letter grades using if-else if-else with explicit range checks.

```javascript
let marks = 95;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80 && marks <= 89) {
    console.log("Grade: B");
} else if (marks >= 70 && marks <= 79) {
    console.log("Grade: C");
} else if (marks >= 60 && marks <= 69) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail, Try Again and make it");
}
```

**Explanation:** The script evaluates marks of 95 against specific grade ranges (A: 90+, B: 80-89, C: 70-79, D: 60-69) and prints the corresponding grade or a failure message.

---

## 58_LEAP_YEAR.js

**Description:** Implements the leap year logic and tests it against multiple years.

```javascript
// Leap Year Check

//Rules:

// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year
// Else → Not a leap year

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}

// -------------------------------------

let yearOne = 2024;
let yearTwo = 2027;

if ((yearOne % 4 === 0 && yearOne % 100 !== 0) || yearOne % 400 === 0) {
    console.log(yearOne + " is a Leap Year");
} else {
    console.log(yearOne + " is not a Leap Year");
}

if ((yearTwo % 4 === 0 && yearTwo % 100 !== 0) || yearTwo % 400 === 0) {
    console.log(yearTwo + " is a Leap Year");
} else {
    console.log(yearTwo + " is not a Leap Year");
}
```

**Explanation:** This script applies the standard leap year rules: a year is a leap year if it is divisible by 4 but not by 100, OR if it is divisible by 400. It tests the logic against the years 2024 and 2027.

---

## 58_Task_20may.js

**Description:** A combined practice task from May 20th covering even/odd check, grade calculation, and leap year verification.

```javascript
// 20th May class task --> 1. Even Odd check 

let num = 7;
//let num = 34;

if (num % 2 == 0) {
    console.log("Number is Even:", num)
}
else {
    console.log("Number is Odd", num)
}


// 20th May class task --> 2. Grade check

let grade = 79;

if (grade >= 90) {
    console.log("You've got A Grade")
}
else if (grade >= 80 && grade <= 89) {
    console.log("You've got B Grade")
}
else if (grade >= 70 && grade <= 79) {
    console.log("You've got C Grade")
}
else if (grade >= 60 && grade <= 69) {
    console.log("You've got D Grade")
}
else {
    console.log("You are failed!")
}


// 20th May class task --> 3. Leap Year check

let year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("This is a Leap Year");
}
else {
    console.log("This is not a Leap Year");
}
```

**Explanation:** This file contains three separate tasks: checking if 7 is even or odd, calculating the grade for a score of 79, and determining if the year 2000 is a leap year.

---

## Task_21_May.js

**Description:** A class task from 21st May containing five practical QA-automation-focused exercises:
1. **HTTP Status Code Categorizer** — classifies status codes into Success, Redirection, Client Error, Server Error, or Invalid.
2. **Test Case Pass/Fail Verdict** — compares expected vs actual results and prints pass/fail with emojis.
3. **Bug Severity Classifier** — maps a bug impact score (1–10) to severity levels: Critical, High, Medium, Low, or Invalid.
4. **Build Health Reporter** — reports build health based on test pass percentage: Green Build, Stable, Unstable, or Broken Build.
5. **Login Lockout After Failed Attempts** — simulates login attempt tracking and locks the account after 3 failed attempts.

```javascript
// Question 1 — HTTP Status Code Categorizer

let statusCode = 299;

if (statusCode >= 200 && statusCode <= 299) {
    console.log("Success");
}
else if (statusCode >= 300 && statusCode <= 399) {
    console.log("Redirection");
}
else if (statusCode >= 400 && statusCode <= 499) {
    console.log("Client Error");
}
else if (statusCode >= 500 && statusCode <= 599) {
    console.log("Server Error");
}
else {
    console.log("Invalid");
}

// Question 2 — Test Case Pass/Fail Verdict

let expected = "Login Successful";
let actual1 = "Login Successful";
let actual2 = "Invalid Credentials";

if (expected === actual1) {
    console.log(actual1, "✅ Test Passed");
}
else {
    console.log(actual1, "❌ Test Failed");
}

if (expected === actual2) {
    console.log(actual2, "✅ Test Passed");
}
else {
    console.log(actual2, "❌ Test Failed");
}

// Question 3 — Bug Severity Classifier

let bugCode = 2;

if (bugCode >= 9 && bugCode <= 10) {
    console.log("Severity: Critical (block release)");
}
else if (bugCode >= 7 && bugCode <= 8) {
    console.log("Severity: High");
}
else if (bugCode >= 4 && bugCode <= 6) {
    console.log("Severity: Medium");
}
else if (bugCode >= 1 && bugCode <= 3) {
    console.log("Severity: Low");
}
else {
    console.log("You have entered an Invalid score");
}


//Question 4 — Build Health Reporter

let healthReport = 99;

if (healthReport === 100) {
    console.log("Green Build");
}
else if (healthReport >= 90 && healthReport <= 99) {
    console.log("Stable (investigate failures)");
}
else if (healthReport >= 70 && healthReport <= 89) {
    console.log("Unstable");
}
else {
    console.log("Broken Build (block deployment)");
}


//Question 5 — Login Lockout After Failed Attempts

let attempts = 3;

if (attempts >= 3) {
    console.log("🔒 Account Locked — Contact support")
}
else if (attempts >= 2) {
    console.log("1 attempt left before lockout")
}
else {
    console.log("Login successful")
}
```

**Explanation:** This file bridges if-else concepts with real-world QA and DevOps scenarios. It demonstrates range checking, equality comparison, logical conditions, and multi-branch decision trees using practical examples a test automation engineer would encounter daily.

---

## Practice_IF_ELSE.js

**Description:** A practice file containing exercises for even/odd check, student grade calculation, and leap year determination.

```javascript
let num = 7;
if (num % 2 === 0) {
    console.log("num is even");
} else {
    console.log("num is odd");
}

// 

// Student grade calculator

let marks = 78;
let grade;
if (marks >= 90) {
    grade = "A";
} else if (marks >= 80 && marks < 89) {
    grade = "B";
}
else if (marks >= 70 && marks < 79) {
    grade = "C";
}
else if (marks >= 60 && marks < 69) {
    grade = "C";
}
else {
    console.log("Fail");
}
console.log("Grade: " + grade);


// leap year check

let leapYear = 2020;
if (leapYear % 4 === 0 && (leapYear % 100 !== 0 || leapYear % 400 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

// 
```

**Explanation:** This practice file includes three exercises: determining if 7 is even or odd, calculating and storing a grade for marks of 78, and checking if 2020 is a leap year using grouped logical conditions.
