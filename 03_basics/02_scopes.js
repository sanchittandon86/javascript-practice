// let a = 10

// const b = 20

// var c = 30

// // {} // scope block

// if (true) {
//     let a = 100; // This 'a' is block-scoped and does not affect the outer 'a'
//     const b = 200; // This 'b' is block-scoped and does not affect the outer 'b'
//     var c = 300; // This 'c' is function-scoped or global-scoped, so it affects the outer 'c'
// }

// // console.log(a); // Output: 10
// // console.log(b); // Output: 20
// console.log(c); // Output: 300 it is not block scoped, so it will be accessible outside the block

// let a = 10; // Block-scoped variable
// // const b = 20; // Block-scoped constant

// if (true) {
//     let a = 100; 
//     const b = 200;
//     console.log("inner", a); // Output: 100, the inner 'a' is accessible here
// }

// console.log("outer", a); // Output: 10, the outer 'a' is still accessible

// // // for - loop
// // for (let i = 0; i < array.length; i++) {
// //     const element = array[i];
// // }

// function one() {
//     const userName = "Sanchit"; // Block-scoped variable

//     function two() {
//         const website = "sanchit.com"; // Block-scoped variable
//         //console.log(`User Name: ${userName}, Website: ${website}`); // Accessing outer scope variable   
//     }   
//     two(); // Calling the inner function to access the outer scope variable
//     //console.log(website); // This will throw an error because 'website' is not defined in this scope

// }

// // one(); // Calling the outer function to execute the code


// if(true) {
//     const userName = "Sanchit tandon"; // Block-scoped variable
//     if (userName === "Sanchit tandon") {
//         const website = "youtube.com"; // Block-scoped variable
//         //console.log(`User Name: ${userName}, Website: ${website}`); // Accessing outer scope variable
//     }
//     // console.log(website);
// }
// // console.log(userName); // This will throw an error because 'userName' is not defined in this scope


// // *********** INTERESTING ************
// addOne(10); // Output: 11 // No Error, function is hoisted
// // Function declaration is hoisted, so it can be called before its definition

// function addOne(num1) {
//     return num1 + 1;
// }

// console.log(addOne(10)); // Output: 11

// // addTwo(10); // ReferenceError: Cannot access 'addTwo' before initialization

// // const addTwo = function(num1) {
// //     return num1 + 2;
// // }

// const addTwo = function(num1) {
//     return num1 + 2;
// }

// addTwo(10);

// console.log(addTwo(10)); // Output: 12
