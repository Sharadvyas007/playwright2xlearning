var $ = 10;
var _abc = 12;
var x = 15;

var abc123 = 34;

// var 123 = 123; // Invalid identifier, cannot start with a number

var Name = "Sharad";
var name = "Pareek";

//var sharad pareek = "sharad";
var sharad_pareek = "hello";
var sharad$pareek = "sharad";
var sharadpareek123 = "pareek";


console.log($);
console.log(_abc);
console.log(x);
console.log(abc123);
console.log(Name);
console.log(name);
console.log(sharad_pareek);
console.log(sharad$pareek);
console.log(sharadpareek123);

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

