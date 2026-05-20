

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

let Temp = 20;
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

let a = 5;
let b = 7;
let c = 9;

let max = (a > b)
  ? (a > c ? a : c)
  : (b > c ? b : c);

console.log(max);

//-------------------------

let age = 20;
let is_sharad_will_go_to_goa = age > 18 ? "Yes, let go goa!" : "No you are minor, Not going";
console.log("Sharad :", is_sharad_will_go_to_goa)

//-------------------------

let age = 26;
let is_sharad_will_go_to_goa = age >= 26 ? "Yes, he will go" : "he will not go";
console.log("Sharad :", is_sharad_will_go_to_goa);

//-------------------------

let age_sharad = 45;
let is_sharad_drink = age_sharad > 18 ? (age_sharad > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log("Sharad can :", is_sharad_drink);
