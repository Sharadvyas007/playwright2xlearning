# Chapter 06 - Operators in JavaScript

This chapter covers the various operators available in JavaScript, including arithmetic, comparison, logical, assignment, increment/decrement, ternary, type, and nullish coalescing operators. Each file below demonstrates a specific concept with runnable code examples.

---

## File Index

| # | File | Description |
|---|------|-------------|
| 1 | `30_operators.js` | Assignment operator (`=`) basics |
| 2 | `31_Arithmetic_OP.js` | Arithmetic operators: `+`, `-`, `*`, `/` |
| 3 | `32­_Modulus_OP.js` | Modulus (`%`) operator and even/odd checks |
| 4 | `33_Expo_OP.js` | Exponentiation (`**`) operator |
| 5 | `34_iq.JS` | Compound assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`) |
| 6 | `35_Comparision_OP.js` | Comparison operators: `>`, `<`, `>=`, `<=` |
| 7 | `36_Comparison__Strict_loose.js` | Strict (`===`) vs loose (`==`) equality |
| 8 | `37_IQ__Loose_Strict.js` | Interview questions on loose equality edge cases |
| 9 | `38_Confusing_Comparison.js` | Deep dive into confusing comparisons and type coercion |
| 10 | `39_Logical_OP.js` | Logical operators: `&&`, `||`, `!` |
| 11 | `40_String_Con_OP.js` | String concatenation using `+=` |
| 12 | `41_Ternary_OP.js` | Ternary/conditional operator (`?:`) |
| 13 | `42_Type_OP.js` | Type operators: `typeof` and `instanceof` |
| 14 | `43_Incre_Decre_OP.js` | Pre/post increment and decrement (`++`, `--`) |
| 15 | `44_Null_OP.js` | Nullish coalescing operator (`??`) |
| 16 | `45_Post_Increment.js` | Post-increment behavior demonstration |
| 17 | `46_IQ_INCREMENT_D.js` | Interview questions on increment/decrement |
| 18 | `47_Advance_ID_.js` | Advanced increment expression evaluation |

---

## 1. `30_operators.js` — Assignment operator (`=`) basics

Assignment operator (`=`) basics

```javascript
// Assignment Operators
// -  = 
// - to assign the right hand side value to the left side.
// - let x = 10;
// - x = 30;

let x = 10;
x = 11;
x = 90;
console.log(x);
```

---

## 2. `31_Arithmetic_OP.js` — Arithmetic operators: `+`, `-`, `*`, `/`

Arithmetic operators: `+`, `-`, `*`, `/`

```javascript
// Arithmetic Operators

let a = 10, b = 3;
console.log(a);
console.log(b);

let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
```

---

## 3. `32­_Modulus_OP.js` — Modulus (`%`) operator and even/odd checks

Modulus (`%`) operator and even/odd checks

```javascript
// % = Modulus 
//  // a%b -> it will return the reminder

let results = 13 % 7;

let results2 = 101 % 2;

// % = Modulus
// a%b -> it will return the remainder


let result = 13 % 7;
console.log(result);


console.log(101 % 2);
console.log(100 % 2);
console.log(37 % 2);
console.log(36 % 2);

//  n%2 == 1 - odd number, [ n%2 == 0 , even]

let result = 13 % 7;
console.log(result);


console.log(101 % 3);
console.log(100 % 3);
console.log(37 % 3);
console.log(36 % 3);
```

---

## 4. `33_Expo_OP.js` — Exponentiation (`**`) operator

Exponentiation (`**`) operator

```javascript
console.log(2 ** 3);
// 2^3

let x = 10;
let y = 3;
console.log(x ** y);



```

---

## 5. `34_iq.JS` — Compound assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`)

Compound assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`)

```javascript
// Compund Operator

let x = 10;
x += 10; // x = x +10;
console.log(x);

x -= 3; //  x =x -3
console.log(x);

x *= 2; // x = x * 2;
console.log(x);

x /= 17;  // x = x/17;
console.log(x);

x %= 2;
console.log(x);
```

---

## 6. `35_Comparision_OP.js` — Comparison operators: `>`, `<`, `>=`, `<=`

Comparison operators: `>`, `<`, `>=`, `<=`

```javascript
// Comparsion Op - true / false - boolean

// > , < , >= , <= , == , === , !, !=, !===

// = -> Assignment opearator
// == -> losse comparsion ( sikh vs hindu )
// === -> strict comparsion ( sikh vs hindu , languge, living)


console.log(3 > 4);
console.log(3 < 4);
console.log(4 >= 4); // 4 > 4 or 4===4 -> or gate -> 
console.log(3 <= 4); // 3<4 or 3===4

// 10 > 5      // true
//10 < 5      // false
// 10 >= 10    // true
// 10 <= 9     // false
```

---

## 7. `36_Comparison__Strict_loose.js` — Strict (`===`) vs loose (`==`) equality

Strict (`===`) vs loose (`==`) equality

```javascript
// // number == string
// console.log(42 == "42"); // == -> loose compasion
// console.log(42 === "42"); //data type and converted value
// console.log(42 == "45"); //value different


console.log(5 === 5);
console.log(5 === "5");

// console.log(5 == 5);
// console.log(5 == "5");

// console.log(0 == ""); // ?  "" = conveted to 0 - checked by the loose
// console.log(0 === ""); 


console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log(true == 2);


console.log(5 != "5"); // false , 5 = int, "5" string, both of them are not equal? - lose couple
console.log(5 !== "5"); // true ( value, dataType)
//console.log(5 !=== "5"); This doesn't excit


// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.
```

---

## 8. `37_IQ__Loose_Strict.js` — Interview questions on loose equality edge cases

Interview questions on loose equality edge cases

```javascript
console.log("" == 0);
console.log(0 == "0");
console.log(0 == "");


console.log("" == "0"); // (transitivity broken!) why this is false

console.log(0 == false);
console.log(null == 0);
console.log(null == undefined);
console.log(null === undefined);


```

---

## 9. `38_Confusing_Comparison.js` — Deep dive into confusing comparisons and type coercion

Deep dive into confusing comparisons and type coercion

```javascript
console.log("38 — Confusing Comparisons in JS");
// ============================================================
// 38 — Confusing Comparisons in JS:  ==  vs  ===
// ============================================================
//
// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)
//
// Run with:  node 38_Confusing_Comparsion.js
// ============================================================


// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------
console.log("" == 0);        // true   → "" coerced to Number → 0
console.log("0" == 0);       // true   → "0" coerced to Number → 0
console.log("" == "0");      // false  → both strings, compared as-is

// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false


// ---------- 2. null and undefined ----------
console.log(null == undefined);   // true   → special rule in ==
console.log(null === undefined);  // false  → different types
console.log(null == 0);           // false  → null only == undefined/null
console.log(null >= 0);           // true   → >= coerces null to 0  (gotcha!)
console.log(null > 0);            // false
console.log(null == 0 || null > 0); // false … but null >= 0 is true 🤯


// ---------- 3. Booleans coerce to numbers ----------
console.log(true == 1);      // true
console.log(true == "1");    // true   → "1" → 1, true → 1
console.log(false == 0);     // true
console.log(false == "");    // true   → both → 0
console.log(false == "0");   // true   → "0" → 0, false → 0
console.log(true === 1);     // false  → different types


// ---------- 4. NaN — never equal to anything, even itself ----------
console.log(NaN == NaN);     // false
console.log(NaN === NaN);    // false
console.log(Number.isNaN(NaN));  // true  ← correct way to check


// ---------- 5. Object vs primitive ----------
console.log([] == false);    // true   → [] → "" → 0, false → 0
console.log([] == 0);        // true   → [] → "" → 0
console.log([] == "");       // true   → [] → ""
console.log([0] == false);   // true   → [0] → "0" → 0
console.log([1] == true);    // true   → [1] → "1" → 1
console.log([1, 2] == "1,2"); // true   → array toString
console.log({} == {});       // false  → different references
console.log([] == []);       // false  → different references


// ---------- 6. String to number traps ----------
console.log(" " == 0);       // true   → " " trimmed → "" → 0
console.log("\n\t" == 0);    // true   → whitespace → 0
console.log("0x10" == 16);   // true   → hex string parsed
console.log("1e2" == 100);   // true   → scientific notation


// ---------- 7. The infamous trio ----------
console.log(null == false);       // false  ← surprise! null only == undefined
console.log(undefined == false);  // false  ← same here
console.log(undefined == 0);      // false


// ---------- 8. typeof results (always strings) ----------
console.log(typeof null);          // "object"  (legacy bug)
console.log(typeof undefined);     // "undefined"
console.log(typeof NaN);           // "number"
console.log(typeof null === "object");      // true
console.log(typeof undefined === "undefined"); // true

// NaN = not a Number


// ---------- 10. Quick interview cheats ----------
// "" == 0           → true
// "" == "0"         → false
// 0 == "0"          → true
// null == undefined → true
// null == 0         → false   but   null >= 0 → true
// NaN == NaN        → false
// [] == ![]         → true   (![] → false → 0; [] → "" → 0)
console.log([] == ![]);   // true 🤯


// ============================================================
// TAKEAWAY:  Always use ===  (and !==).
// Use ==  only for null/undefined check:   if (x == null) { ... }
// Use Object.is for NaN and -0 edge cases.
// ============================================================
```

---

## 10. `39_Logical_OP.js` — Logical operators: `&&`, `||`, `!`

Logical operators: `&&`, `||`, `!`

```javascript
// && -> AND Gate
// || -> OR Gate

let a = true;
let b = false;
console.log(a && b); //  AND
console.log(a || b); //  OR
console.log(!a); // 

console.log(5 != "g");  // Value 5, g ! that true, 
```

---

## 11. `40_String_Con_OP.js` — String concatenation using `+=`

String concatenation using `+=`

```javascript
let s = "Hi";
s += " Dev";
console.log(s);


let a = "Hello";
a += " World";

console.log(a);
```

---

## 12. `41_Ternary_OP.js` — Ternary/conditional operator (`?:`)

Ternary/conditional operator (`?:`)

```javascript


//Ternary operator in JavaScript is a shortcut for if...else.

// Syntax:

// condition ? true_value : false_value

// Example:

let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

// Output:

// Adult

// Explanation:

// If condition is true → first value executes
// If condition is false → second value executes

let Temp = 20;
let feel = (Temp >= 40 ? "Very Hot" :
  (Temp >= 30 ? "Hot" :
    (Temp >= 20 ? "Warm" :
      (Temp >= 10 ? "Cool" : "Cold"))));


console.log(Temp, feel);

//-------------------------

let a = 5;
let b = 7;

let max = (a > b) ? a : b;

console.log(max);

//---------------------------------

let a = 5;
let b = 7;
let c = 9;

let max = (a > b)
  ? (a > c ? a : c)
  : (b > c ? b : c);

console.log(max);

//-------------------------

let age = 20;
let is_sharad_will_go_to_goa = age > 18 ? "Yes, let go goa!" : "No you are minor, Not going";
console.log("Sharad :", is_sharad_will_go_to_goa)

//-------------------------

let age = 26;
let is_sharad_will_go_to_goa = age >= 26 ? "Yes, he will go" : "he will not go";
console.log("Sharad :", is_sharad_will_go_to_goa);

//-------------------------

let age_sharad = 45;
let is_sharad_drink = age_sharad > 18 ? (age_sharad > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log("Sharad can :", is_sharad_drink);

```

---

## 13. `42_Type_OP.js` — Type operators: `typeof` and `instanceof`

Type operators: `typeof` and `instanceof`

```javascript

// Type operators in JavaScript are used to check or work with data types.

// Main type operators:

// typeof → returns the type of a variable
// instanceof → checks whether an object belongs to a class or constructor

// Example:

typeof "Hello"    // string
typeof 10         // number

arr instanceof Array   // true

// Used to check the data type of a value.
// Examples:

typeof 10            // "number"
typeof "hello"       // "string"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof {}            // "object"
typeof []            // "object"
typeof null          // "object" (this is a known JavaScript quirk)
typeof function () { }  // "function"

//Use case: 

let value = 42;

if (typeof value === "number") {
    console.log("It's a number");
}


//--------------------------


console.log(typeof "hello"); // string
console.log(typeof 123); // int -> number
console.log(typeof 31.4); // float -> number
// typeof true
// typeof undefined  -> undefined
// typeof null  -> object
// typeof [] -> object
console.log(typeof []); // -> object

```

---

## 14. `43_Incre_Decre_OP.js` — Pre/post increment and decrement (`++`, `--`)

Pre/post increment and decrement (`++`, `--`)

```javascript

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
```

---

## 15. `44_Null_OP.js` — Nullish coalescing operator (`??`)

Nullish coalescing operator (`??`)

```javascript

//??

console.log(null >= 0); //  null == 0 or null > 0
console.log(null === 0);

//??

console.log(null >= 0); //  null == 0 or null > 0
console.log(null === 0);

// ??  Nullish
let amul = null;
let milk_required = amul ?? "nandani milk";
console.log(milk_required);
```

---

## 16. `45_Post_Increment.js` — Post-increment behavior demonstration

Post-increment behavior demonstration

```javascript
let a_post = 10;
let b = a_post++;
// post ++ -> first assign the value and then increase.
console.log(a_post);
console.log(b);
```

---

## 17. `46_IQ_INCREMENT_D.js` — Interview questions on increment/decrement

Interview questions on increment/decrement

```javascript

//
let a = 34;
let result = a++;
console.log(result);
console.log(a);

//

let a = 34;
let b = 50;
let result = ++a;
let result1 = a--;
let result2 = ++b;

console.log(result);
console.log(a);

console.log(result1);
console.log(a);

console.log(result2);
console.log(b); 

```

---

## 18. `47_Advance_ID_.js` — Advanced increment expression evaluation

Advanced increment expression evaluation

```javascript

// let a = 10;
// console.log(++a + a);
// console.log(a);


// let a = 10;
// console.log(a++ + ++a);
// console.log(a);

let a = 10;
console.log(++a + ++a);
console.log(a);
```

---

*End of Chapter 06 README.*