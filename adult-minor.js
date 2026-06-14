const checkAge = (age) => {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
};

// Test with different ages
const ages = [15, 18, 21, 12, 30, 17];

ages.forEach(age => {
    console.log(`Age ${age}: ${checkAge(age)}`);
});

// Example with ternary operator (shorter version)
const checkAgeShort = (age) => age >= 18 ? "Adult" : "Minor";

console.log("\n--- Using Ternary Operator ---");
console.log(`Age 20: ${checkAgeShort(20)}`);
console.log(`Age 16: ${checkAgeShort(16)}`);
