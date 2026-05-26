let i = 5;
while (i > 0) {
    console.log(i);
    i--;
}


let a = 1;

while (a <= 10) {
    let stars = "";
    let count = 1;

    while (count <= a) {
        stars += "*";
        count++;
    }

    console.log(stars);
    a++;
}