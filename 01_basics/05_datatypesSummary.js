// # Data Types in JavaScript

// JavaScript has several built-in data types:

// 1. **Primitive Types**:
//    - **Number**: Represents both integer and floating-point numbers.
//    - **String**: Represents a sequence of characters.
//    - **Boolean**: Represents a logical entity and can have two values: true and false.
//    - **Undefined**: A variable that has been declared but has not yet been assigned a value.
//    - **Null**: Represents the intentional absence of any object value.
//    - **Symbol**: A unique and immutable primitive value introduced in ES6.
//    - **BigInt**: An arbitrary-precision integer type that can represent integers with arbitrary precision.

// 2. **Reference Types** or Complex Types: or **Non-Primitive Types**: 
//    - **Object**: A collection of key-value pairs.
//    - **Array**: A special type of object used for storing ordered collections.
//    - **Function**: A block of code designed to perform a particular task.

// Javascript is a dynamically typed language, meaning you don't need to declare the type of a variable when you create it.
//  The type is determined automatically based on the value assigned to it. 
// This can lead to some interesting behavior, especially when performing operations on different types.


// Reference Types
// Array, Objects, Functions 

// 1. **Array**: A special type of object used for storing ordered collections.
//    - Example: 
//  let fruits = ["apple", "banana", "cherry"]; // typeof returns object
//  console.log(typeof fruits); // Output: object
//  console.log(fruits[0]); // Output: apple

// 2. **Object**: A collection of key-value pairs.
//    - Example: 
            let person = { 
                  name: "John", 
                  age: 30, 
                  city: "New York" 
                };

// 3. **Function**: A block of code designed to perform a particular task. typeof returns function/ object
//    - Example: 
const greet = function(name) {
                 return "Hello, " + name;
               }

               console.log(person);
               console.log(greet("Alice")); // Output: Hello, Alice