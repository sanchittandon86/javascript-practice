// ****************************** MEMORYS ****************************** //

// Memory is a concept that allows us to store and retrieve data in a computer program.
// In JavaScript, memory management is handled automatically by the JavaScript engine, which uses a process called garbage collection to free up memory that is no longer needed.
//


// Stack (Primitive) Memory vs Heap Memory (non-primitive)
// 1. **Stack Memory**:
//    - Used for static memory allocation.
//    - Stores primitive data types (e.g., numbers, strings, booleans).
//    - Fast access and deallocation.
//    - Memory is automatically managed.
//    - Example:
//      let x = 10; // x is stored in stack memory
//      let y = x; // y is also stored in stack memory
//      x = 20; // y remains 10, as it is a copy of the value
//      console.log(x); // Output: 20
//      console.log(y); // Output: 10
//
// 2. **Heap Memory**:
//    - Used for dynamic memory allocation.
//    - Stores non-primitive data types (e.g., objects, arrays, functions).
//    - Slower access and deallocation.
//    - Memory is managed by the garbage collector.
//    - Example:
// let person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// let person2 = person; // person2 points to the same object in heap memory
// console.log(person2); // Output: { name: "John", age: 30, city: "New York" }
// person.name = "Alice"; // Modifying the object through person
// console.log(person); // Output: { name: "Alice", age: 30, city: "New York" }
// console.log(person2.name); // Output: Alice
// person2.name = "Bob"; // Modifying the object through person2
// console.log(person.name); // Output: Bob
// console.log(person2.name); // Output: Bob
//


// let myEmail = "sanchit@example.com";

// let myEmail2 = myEmail; // Copying the value of myEmail to myEmail2
// // console.log(myEmail2); // Output:

// myEmail2 = "sanchit_new01@example.com";

// console.log(myEmail2); // Output:
// console.log(myEmail); // Output:

let userOne = {    
    email: "sanchit@example.com",
    upi: "sanchit@upi",
}

// console.log(userOne); // Output: { email: "

let userTwo = userOne; // Copying the reference of userOne to userTwo
// console.log(userTwo); // Output: { email: "

userTwo.email = "sanchit_new01@example.com";
console.log(userOne.email); // Output: { email: "sanchit_new01@example.com", upi: "sanchit@upi" }
console.log(userTwo.email); // Output: { email: "sanchit_new01@example.com", upi: "sanchit@upi" }