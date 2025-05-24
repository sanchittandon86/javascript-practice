// const score = 400;

// const Balance = new Number(1000);

// const newBalance = Balance.toString().length;

// // console.log(typeof score);
// // console.log(newBalance);

// console.log(typeof Balance);
// console.log(newBalance);

// const num1 = 100;

// const num2 = num1 * (Math.random()*10) + 1; // "100.00"

// console.log(num2); // "100.00"

// const hundred = 100123456789;
// console.log(hundred.
// console.log(hundred.toLocaleString('en-IN')); // "100,123,456,789"



const min = 10;
const max = 20;

const randomNum = Math.floor(Math.random() * (max - min + 1));

const randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // Random number between 0 and 10
console.log(randomNum2); // Random number between 10 and 20

// Math.Random always gives a value between 0 and 1, 
// which means it can never be equal to 1.
// Therefore, to generate a random number within a specific range (min to max),
// we need to scale the random value to the desired range.
// The formula used is:
// Math.floor(Math.random() * (max - min + 1)) + min
//
// This formula works as follows:
// 1. Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).  
// 2. We multiply this random number by (max - min + 1) to scale it to the desired range.
// 3. Math.floor() rounds down the result to the nearest whole number, ensuring we get an integer.
// 4. Finally, we add min to shift the range to start from the desired minimum value.
// For example, if min is 10 and max is 20:
// - Math.random() generates a value like 0.5
// - Multiplying by (20 - 10 + 1) gives us a value between 0 and 11
// - Math.floor() rounds it down to an integer between 0 and 10
// - Adding min (10) shifts the range to between 10 and 20
// This ensures that the final result is a random integer between the specified min and max values, inclusive.
// Example of generating a random number between 1 and 100
// const minRange = 1;
// const maxRange = 100;
// const randomInRange = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
// console.log(randomInRange); // Random number between 1 and 100