
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

// Pre (++x, --x) → change first, then use
// Post (x++, x--) → use first, then change