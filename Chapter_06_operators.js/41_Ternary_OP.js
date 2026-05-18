

//Ternary operator in JavaScript is a shortcut for if...else.

// Syntax:

// condition ? true_value : false_value

// Example:

let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

// Output:

// Adult

// Explanation:

// If condition is true → first value executes
// If condition is false → second value executes

let Temp = 10;
let feel = (Temp >= 40 ? "Very Hot" :
  (Temp >= 30 ? "Hot" :
    (Temp >= 20 ? "Warm" :
      (Temp >= 10 ? "Cool" : "Cold"))));


console.log(Temp, feel);

//-------------------------

let a = 5;
let b = 7;

let max = (a > b) ? a : b;

console.log(max);

//---------------------------------

let a2 = 5;
let b2 = 7;
let c2 = 9;

let max2 = (a2 > b2)
  ? (a2 > c2 ? a2 : c2)
  : (b2 > c2 ? b2 : c2);

console.log(max2);

//-------------------------

let age2 = 20;
let is_sharad_will_go_to_goa = age2 > 18 ? "Yes, let go goa!" : "No you are minor, Not going";
console.log("Sharad :", is_sharad_will_go_to_goa)
