
// Pre-increment -> Value is increased first, then used.

let x = 5;
console.log(++x); // 6
console.log(x);   // 6

//Post-increment (x++) Value is used first, then increased.

let x = 5;
console.log(x++); // 5
console.log(x);   // 6

// Pre-decrement (--x) Value is decreased first, then used.

let x = 5;
console.log(--x); // 4
console.log(x);   // 4

//Post-decrement (x--) Value is used first, then decreased.

let x = 5;
console.log(x--); // 5
console.log(x);   // 4


let a = 10;
console.log(++a + a); // 22 (used  first, then incremented)

// Pre (++x, --x) → change first, then use
// Post (x++, x--) → use first, then change


let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);
console.log(a);


// Pre Increment
// let a = 10;
// let b = ++a; // (increment the a by 1)

// // Pre increment -> ++a ->. increse the value and then assign.
// console.log(b);
// console.log(a);


// // Deincrement
// let a = 10;
// let b = --a; // (increment the a by 1)
// console.log(b); // 9
// console.log(a);  // 9

let a = 10;
let b = a--; // (increment the a by 1)
console.log(b); // 10
console.log(a);  // 9