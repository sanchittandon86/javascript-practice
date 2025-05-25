// const heroes = ["Thor", "Iron Man", "Captain America"];
// const villains = ["BatMan", "SuperMan", "Joker"];
// // Accessing elements
// // console.log(heroes[0]); // Output: Thor
// // console.log(villains[1]); // Output: SuperMan

// // heroes.push(villains); // Adding an array to another array
// // console.log(heroes); 
// // Output:
// //  [
// //   'Thor', -0
// //   'Iron Man', -1
// //   'Captain America', -2
// //   [ 'BatMan', 'SuperMan', 'Joker' ] -3
// // ]

// heroes.concat(villains); // Concatenating two arrays not modifying the original arrays
// console.log(heroes);
// // [ 'Thor', 'Iron Man', 'Captain America' ]


// const allHeroes = heroes.concat(villains); // Concatenating two arrays
// console.log(allHeroes);

// // [
// //   'Thor',
// //   'Iron Man',
// //   'Captain America',
// //   'BatMan',
// //   'SuperMan',
// //   'Joker'
// // ]

// const newHeroes = [...heroes, ...villains]; // Using spread operator to concatenate arrays
// console.log(newHeroes);

// // [
// //   'Thor',
// //   'Iron Man',
// //   'Captain America',
// //   'BatMan',
// //   'SuperMan',
// //   'Joker'
// // ]


const myArray = [0, 1, [2, 3], 2, 3, 4, [3, 4, [2, 3], 5], 5];
console.log(myArray);

const myArray2 = myArray.flat(Infinity); // Flattening the array to a depth of 2
console.log(myArray2); // Output: [ 0, 1, 2, 3, 2, 3, 4, 3, 4, 2, 3, 5, 5 ]

console.log(Array.isArray(myArray2)); // Checking if myArray2 is an array