/finding index of array

let arr = ["a", "b", "c", "d", "e", "f", "g", "h"]
console.log(arr.indexOf("f"));

// finding the lenght of array 

let arr = [10, 20, 30, 40, 50];
console.log(arr)
console.log(arr.length)
console.log(arr.at(0))
console.log(arr.findLastIndex)


// finding the index of element - 

let arr = ["a", "b", "c", "d", "e"];
console.log(arr.indexOf("d"))

//finding the element exists or not

let arr = ["QA", "DEV", "UAT"];
console.log(arr.includes("DEV"))

// counting the even numbers from given arr 
let arr = [10, 15, 20, 25, 30, 44, 46, 76, 55, 77, 41];
let count = 0;
for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
        count++;
    }
}
console.log(count)


// counting the odd numbers from given arr 
let arr = [10, 15, 20, 25, 30, 44, 46, 76, 55, 77, 41];
let count = 0;
for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 !== 0) {
        count++;
    }
}
console.log(count)

// Counting the sum of arr total

let arr = [10, 20, 30];
sum = 0;
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum)

// Finding the Second last element of arr 

let last = [10, 20, 30, 40, 50];
console.log(last[last.length - 2]);

//largest number from arr 
let arr = [10, 50, 25, 80, 40];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);