// Returns a value
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

let status1 = getStatus(200);
let status2 = getStatus(404);
let status3 = getStatus(500);

console.log(status1);
console.log(status2);
console.log(status3);

// function logTest(name) {
//     console.log(`Running: ${name}`);
//     // no return statement
// }
// let result = logTest("Login");
// console.log(result);

// greet("Alice");

// function greet(name) {
//     return `Hello, ${name}!`;
// }

sayHi("Bob");

const sayHi = function (name) {
    return `Hi, ${name}!`;
};