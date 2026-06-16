

let user = {
    name: "Sam",
    age: 28
};

function showUser(userData) {
    console.log(userData.name);
    console.log(userData.age);
}

showUser(user);

//

function getUser() {
    return {
        name: "Sam",
        age: 28
    };
}

let user2 = getUser();

console.log(user2.name);
console.log(user2.age);

user2.name = "Sharad";
user2.city = "Jaipur";
user2.role = "Senior QA";

console.log(user2);