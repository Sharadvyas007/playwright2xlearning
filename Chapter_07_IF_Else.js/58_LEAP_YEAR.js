// Leap Year Check

//Rules:

// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year
// Else → Not a leap year

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}

// -------------------------------------

let yearOne = 2024;
let yearTwo = 2027;

if ((yearOne % 4 === 0 && yearOne % 100 !== 0) || yearOne % 400 === 0) {
    console.log(yearOne + " is a Leap Year");
} else {
    console.log(yearOne + " is not a Leap Year");
}

if ((yearTwo % 4 === 0 && yearTwo % 100 !== 0) || yearTwo % 400 === 0) {
    console.log(yearTwo + " is a Leap Year");
} else {
    console.log(yearTwo + " is not a Leap Year");
}