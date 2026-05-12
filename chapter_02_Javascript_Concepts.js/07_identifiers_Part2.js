// Different naming conventions in JavaScript

// camelCase (variables & functions)
var firstName = "Sharad";
var lastName = "Pareek";
function getUserName() {
    return firstName + " " + lastName;
}

// snake_case
var first_name = "Sharad";
var last_name = "Pareek";

// PascalCase (classes & constructors)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// UPPER_CASE (constants / magic values)
var MAX_LIMIT = 100;
var API_KEY = "abc123";

// Mixed examples
var $count = 0;
var _privateVar = "hidden";
var camelCaseWithDigits = "v2";

console.log("camelCase:", firstName + " " + lastName);
console.log("snake_case:", first_name + " " + last_name);
console.log("UPPER_CASE:", MAX_LIMIT, API_KEY);
