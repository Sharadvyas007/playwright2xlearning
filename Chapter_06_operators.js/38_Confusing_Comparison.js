// The Transitivity Trap
console.log("" == 0);      // true
console.log(0 == "0");     // true
console.log("" == "0");    // false (transitivity broken!)
// Boolean Coercion Surprises
console.log(false == 0);   // true
console.log(false == "");  // true
console.log(false == []);  // true (!)
console.log(false == {});  // false
// Null & Undefined Edge Cases
console.log(null == 0);           // false
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(null == null);        // true
// Array/Object Weirdness
console.log([] == ![]);    // true (classic JS weirdness)
console.log([1] == "1");    // true
console.log([1, 2] == "1,2"); // true
// NaN Behavior
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
// Best Practice: Always prefer === to avoid unexpected coercion bugs
// === checks value and type without coercion
console.log("" === 0);     // false
console.log(0 === "0");    // false
console.log(false === 0);  // false