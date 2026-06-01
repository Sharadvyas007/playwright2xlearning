// Question 1 — HTTP Status Code Categorizer

// Problem: Given an HTTP status code, print which category it belongs to.
// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid

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

// Problem: Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical (block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score

let bugCode = 5;

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
// Problem: Given the percentage of test cases passed in a CI build, report build health.
// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)

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
// Problem: Track failed login attempts. Lock the account after 3 failed attempts.
// Sample Input/Output:
// Input: attempts = 2
// Output: 1 attempt left before lockout
// Input: attempts = 3
// Output: 🔒 Account Locked — Contact support
// Input: attempts = 0
// Output: Login successful

//let attempts = 2;
let attempts = 3;
// let attempts = 0;

if (attempts >= 3) {
    console.log("🔒 Account Locked — Contact support")
}
else if (attempts >= 2) {
    console.log("1 attempt left before lockout")
}
else {
    console.log("Login successful")
}