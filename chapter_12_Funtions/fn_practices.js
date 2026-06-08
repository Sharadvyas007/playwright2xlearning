// 1. 
function greet() {
    console.log("Hello QA");
}
greet();

//2. 
function greet1() {
    console.log("Welcome to JavaScript");
}
greet1();

// 3. 

function showStatus() {
    console.log("Build Passed");
}
showStatus();

// 4. 
function greet(name = "Sam") {
    console.log("Hello ", name);
}
greet();

// 5. 
function add(a = 10, b = 20) {

    console.log(a + b);
}
add();

// 6. 

function getStatus() {
    return "Success";
}

console.log(getStatus());


// 7. 
function add(a, b) {
    return a + b;
}

console.log(add(5, 10));

// 8. 
function greet() {
    console.log("Hello");
}

greet();
greet();

// 9. 
function greet() {
    return "Hello";
}

greet();

// 10. 
function greet() {
    return "Hello";
}

console.log(greet());

// 11. 

function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);

// 12. 

function getStatus() {
    return "Passed";
}
console.log(getStatus());

// 13. Hello + undefined

function greet() {
    console.log("Hello");
}

console.log(greet());

// 14. nothing

function greet() {
    return "Hi";
}

greet();

// 15. 
// return hai + print nahi kiya
// ↓
// Nothing

// return hai + console.log()
// ↓
// Returned value print hogi

// return nahi hai + console.log(function())
// ↓
// undefined print hoga


function test() {
    return 100;
}

let x = test();

console.log(x);