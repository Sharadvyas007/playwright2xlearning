// 1. 

function greet() {
    return "Hello";
}

let x = greet();

console.log(x);

// 2. 
function greet() {
    console.log("Hello");
}

let x = greet();

console.log(x);

// 3. 
function add(a, b) {
    return a + b;
}

console.log(add(10, 5));

// 4. 
function multiply(a, b) {
    return a * b;
}

let result = multiply(2, 5);

console.log(result);

// 5. Check Age 

function checkAge(age = 18) {

    if (age >= 18) {
        console.log("Eligible")
    }
    else {
        console.log("Not Eligible")
    }


}
checkAge();


// 6. Even or Odd 

// let num = 5;
function isEven(num = 10) {

    if (num % 2 == 0) {
        console.log("Even")
    }
    else {
        console.log("Odd");
    }

}
isEven();

// Check voting eligibility

function checkVoting(age) {

    if (age >= 18) {
        console.log("You are eligible to Vote");
    }
    else {
        console.log("Not Eligible to Vote");
    }
}
checkVoting(19);

// even odd with function

function checkNumber(num) {

    if (num % 2 == 0) {
        console.log("This is Even Number");
    }
    else {
        console.log("This is Odd Number");
    }
}
checkNumber(20);

// login validation 

function validateLogin(expected, actual) {
    if (expected === actual) {
        console.log("Login Success");
    }
    else {
        console.log("Login Failed");
    }
}

validateLogin("admin123", "admin123");

// Check marks 

function checkMarks(marks) {

    if (marks >= 35) {
        console.log("Pass");
    }
    else {
        console.log("Failed")
    }
}
checkMarks(30);


// Check status code 

function checkStatus(statusCode) {
    if (statusCode >= 200 && statusCode <= 299) {
        console.log("Success");
    }

    else if (statusCode >= 400 && statusCode <= 499) {
        console.log("Client Error");
    }
    else {
        console.log("Server Error");
    }
}
checkStatus(404);

