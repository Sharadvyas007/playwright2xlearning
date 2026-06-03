// Task for 3 June => Reverse a string in JS

let str = "Hello!, My Name is Sharad Pareek";

let reversed = str.split("").reverse().join("");

console.log(reversed);


// without using in-built 

let str2 = "madam";
//let str2 = "Pramod"
let reversed2 = "";

for (let i = str2.length - 1; i >= 0; i--) {

    reversed2 += str2[i];
}

console.log(reversed2);

if (str2 == reversed2) {
    console.log("This is Palindrom")
}
else {
    console.log("This is not a Palindrome")
}