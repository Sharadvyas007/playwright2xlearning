
// Type operators in JavaScript are used to check or work with data types.

// Main type operators:

// typeof → returns the type of a variable
// instanceof → checks whether an object belongs to a class or constructor

// Example:

typeof "Hello"    // string
typeof 10         // number

arr instanceof Array   // true

// Used to check the data type of a value.
// Examples:

typeof 10            // "number"
typeof "hello"       // "string"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof {}            // "object"
typeof []            // "object"
typeof null          // "object" (this is a known JavaScript quirk)
typeof function () { }  // "function"

//Use case: 

let value = 42;

if (typeof value === "number") {
    console.log("It's a number");
}


//--------------------------


console.log(typeof "hello"); // string
console.log(typeof 123); // int -> number
console.log(typeof 31.4); // float -> number
// typeof true
// typeof undefined  -> undefined
// typeof null  -> object
// typeof [] -> object
console.log(typeof []); // -> object
