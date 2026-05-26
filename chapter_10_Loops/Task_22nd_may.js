// Triangle side check matching

let side1 = 10;
let side2 = 10;
let side3 = 10;

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
}
else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalene Triangle");
}

// Fitbuzz program

let num = 1;

while (num <= 100) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(num);
    }

    num++;
}