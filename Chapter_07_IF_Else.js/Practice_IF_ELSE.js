let num = 7;
if (num % 2 === 0) {
    console.log("num is even");
} else {
    console.log("num is odd");
}

// 

// Student grade calculator

let marks = 78;
let grade;
if (marks >= 90) {
    grade = "A";
} else if (marks >= 80 && marks < 89) {
    grade = "B";
}
else if (marks >= 70 && marks < 79) {
    grade = "C";
}
else if (marks >= 60 && marks < 69) {
    grade = "C";
}
else {
    console.log("Fail");
}
console.log("Grade: " + grade);


// leap year check

let leapYear = 2020;
if (leapYear % 4 === 0 && (leapYear % 100 !== 0 || leapYear % 400 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

// 