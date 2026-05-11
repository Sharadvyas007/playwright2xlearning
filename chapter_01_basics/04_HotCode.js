console.log("Hello");

function add(a, b) {
    return a + b;
}
let result;
for (let a = 0; a <=100; a++) {
    result = add(a, a+1);
}
console.log("Result: ", result);