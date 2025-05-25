// Functions are reusable blocks of code that perform a specific task.
// They can take inputs (parameters) and return outputs (values).

// function sayMyName() {
//     console.log("Sanchit Tandon");
// }

// sayMyName();

// console.log(sayMyName()); // Output: Sanchit Tandon undefined

// function addTwoNumbers(num1, num2) { // parameters num1 and num2
//     return num1 + num2; // Returns the sum of num1 and num2
// }

// const result = addTwoNumbers(5, 10); // Calls the function with arguments 5 and 10
// console.log("Result", result); // Output: 15

// function userLogin(userName) {
//     if(!userName) {
//         return "Please enter a valid username"; // Returns an error message if userName is not provided
//     }
//     return `${userName} logged in successfully`;
// }

// console.log(userLogin("Sanchit")); // Output: User logged in successfully
// console.log(userLogin()); // Output: Please enter a valid username

// function calculateCartPrice(...num1) { // using rest parameter to accept multiple arguments and stores in array
//     return num1; 
// }
// console.log(calculateCartPrice(100, 200, 300)); // Output: [100, 200, 300]

// function calculateCartPrice2(val1, val2, ...num1) { // val1 - 100, val2, 200, num1 - [300]
//     return num1; 
// }

// console.log(calculateCartPrice2(100, 200, 300)); // Output: [300]


// Function to handle user details Object
// const user = {
//     name: "Sanchit",
//     prices: 100,
// };

// function handleUser(userDetails) {
//     console.log(`User Name is ${userDetails.name}, Price is ${userDetails.price}`);
// }

// handleUser(user); // Output: User Name is Sanchit, Price is 100


// Function to handle array of user details
// const array = [200, 300, 400];

// function handleArray(arrayDetails) {
//     return arrayDetails.map(item => `Price is ${item}`);
// }

// console.log(handleArray(array)); // Output: [ 'Price is 200', 'Price is 300', 'Price is 400' ]