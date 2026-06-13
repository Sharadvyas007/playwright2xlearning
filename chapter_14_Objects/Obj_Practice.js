// 1. 

let person = {
    name: "Sam",
    age: 28,
    city: "Jodhpur"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

person.name = "Sam Vyas";
person.age = 32;
person.city = "Jaipur";

console.log(person.name);
console.log(person.age);
console.log(person.city);


// Object + Function 

let user = {
    name: "Sam",
    age: 28
};

function showUser() {
    console.log(user.name);
}

showUser();


// calling the obj without setting value 

let user = {
    name: "Sharad",
    age = 32,
    role = "Individual Contributor - QA"
}

console.log(user.name);
console.log(user.role);
console.log(user.city);