
// 20th May class task --> 1. Even Odd check 

let num = 7;
//let num = 34;

if (num % 2 == 0) {
    console.log("Number is Even:", num)
}
else {
    console.log("Number is Odd", num)
}


// 20th May class task --> 2. Grade check

let grade = 79;

if (grade >= 90) {
    console.log("You've got A Grade")
}
else if (grade >= 80 && grade <= 89) {
    console.log("You've got B Grade")
}
else if (grade >= 70 && grade <= 79) {
    console.log("You've got C Grade")
}
else if (grade >= 60 && grade <= 69) {
    console.log("You've got D Grade")
}
else {
    console.log("You are failed!")
}


// 20th May class task --> 3. Leap Year check

let year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("This is a Leap Year");
}
else {
    console.log("This is not a Leap Year");
}