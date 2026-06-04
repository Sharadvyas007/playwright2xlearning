// count of strings 

let str = "My Name is Sharad Pareek";

let vowel = ["a", "e", "i", "o", "u"];

let count = 0;

for (let i = 0; i < str.length; i++) {

    if (vowel.includes(str[i])) {
        count++;
    }

}

console.log(count);

