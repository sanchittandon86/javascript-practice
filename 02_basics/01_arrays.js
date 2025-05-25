// Arrays are a collection of items that can be of any type, 
// including other arrays or objects.
// Arrays are used to store multiple values in a single variable.
// They are ordered, meaning that the items in an array have a specific index, starting from 0.
// Arrays can be created using the `Array` constructor or by using square brackets `[]`.
// Arrays can be of any type, including other arrays or objects.
// Arrays can be created using the `Array` constructor or by using square brackets `[]`.
// Arrays can be of any type, including other arrays or objects.


// let myArray = []; // Empty array
// let myArray2 = new Array(1, 2, 3, 4); // Empty array
// let myArray3 = [1, 2, 3, 4, 5]; // Array with numbers
// let myArray4 = ["apple", "banana", "cherry"]; // Array with strings

// console.log(myArray); // Output: []
// console.log(myArray2); // Output: []
// console.log(myArray3); // Output: [1, 2, 3, 4, 5]
// console.log(myArray4); // Output: ["apple", "banana", "cherry"]

// game = myArray4.lastIndexOf("banana"); // Find the last index of "banana" in the array

// console.log(game); // Output: string


// Array Methods

 let myArray = [0, 1, 2, 3, 4, 5];

//  myArray.push(6); // Add an item to the end of the array
//  myArray.shift(); // Add an item to the beginning of the array
//  myArray.pop(); // Remove the last item from the array

// console.log(myArray.includes(9)); // Output: false
// console.log(myArray.indexOf(9));


// //
// const newArray = myArray.join();
// console.log(newArray); // Output: "1,2,3,4,5,6" "string"


// slice and splice

console.log("A : ", myArray);

const myn1 = myArray.slice(1, 3); // array into a new array object selected from start to end (end not included).
console.log(myn1); 
console.log("B : ", myArray);


// A :  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B :  [ 0, 1, 2, 3, 4, 5 ]


// const myn1 = myArray.slice(1, 3); // array into a new array object selected from start to end (end not included).
// console.log("B : ", myArray);
// console.log(myn1);

// A :  [ 0, 1, 2, 3, 4, 5 ]
// B :  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// C :  [ 0, 4, 5 ]
// [ 1, 2, 3 ]

// const myn2 = myArray.splice(1, 3); // changes the contents of an array by removing or replacing existing elements
// console.log(myn2); 

// console.log("C : ", myArray);

// A :  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B :  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2, 3 ]  -- 
// C :  [ 0, 4, 5 ]


const myn2 = myArray.splice(1, 3); // changes the contents of an array by removing or replacing existing elements

console.log("C : ", myArray);
console.log(myn2); 



// A :  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B :  [ 0, 1, 2, 3, 4, 5 ]
// C :  [ 0, 4, 5 ]
// [ 1, 2, 3 ]


//  array into a new array object selected from start to end (end not included). **** slice
// changes the contents of an array by removing or replacing existing elements *** splice
