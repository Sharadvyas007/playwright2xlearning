let arr = [
    ["Sharad", "Pareek"],
    [32, "Jodhpur"]
]

console.log(arr[0]);
arr[0] = ["Sam", "Vyas", "Pal"];

console.log(arr[0].join(" "));

// 2. Practice

let fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    fruits[3] = "Kiwi";
}
console.log(fruits.join(" "));

// nester loops in array

let arr = [
    ["A", "B"],
    ["C", "D"]
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

//

let arr = [
    [1, 2],
    [3, 4]
];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum = sum + arr[i][j];
    }
}

console.log(sum);