// const greet = (name) => {
//     console.log(name);
// }

// Eligible check with arrow function 

const checkAge = (age) => {
    if (age >= 18) {
        console.log("Eligible");
    }
    else {
        console.log("Not Eligible");
    }
}
checkAge(15);

//

const add = (a, b) => {
    return a + b;
}

console.log(add(5, 10));

//

const sayHi = () => {
    console.log("Hi");
}

//

const multiply = (a, b) => {
    return a * b;
}

console.log(multiply(5, 3));


//

const greet = () => {
    console.log("Hello");
}

greet();


// 

const add = (a, b) => a + b;
console.log(add(3, 6));


/// 


const add = (a, b) => a + b;

const result = add(10, 20);

console.log(result);

// arrow with if else conditions - 

const checkAge = (age) => age >= 18 ? "Adult" : "Minor";
console.log(checkAge(17));