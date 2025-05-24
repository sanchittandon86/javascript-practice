// // singleton 
// // Object.create({}); // Creates an empty object



// // object literal

// // mySym = Symbol("Key1");
// // let mySymbol;

// const user = {
//     name: "Sanchit",
//     "full Name": "Sanchit Tandon",
//     // [mySymbol]: mySym, // Using a symbol as a key
//     1: "one", // Numeric key
//     age: 25,
//     location: "India",
//     email: "sanchit@example.com",
//     isLogggedIn: false,
// }

// // console.log(user[mySymbol]);

// user.greetUser = function() {
//     console.log(`Hello, my name is`);
// }

// user.greetUser2 = function() {
//     console.log(`Hello, my name is ${this.name}`);
// }

// console.log(user.greetUser()); // Output: Hello, my name is Sanchit
// console.log(user.greetUser2()); // Output: Hello, my name is Sanchit