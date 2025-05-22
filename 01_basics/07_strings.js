const name = "Sanchit";
const repoCount = 10;

console.log(name + " " + repoCount); // Sanchit 10

// OR
// String interpolation
console.log(`Hello, my name is ${name} and I have ${repoCount} repositories.`); // Hello, my name is Sanchit and I have 10 repositories.

const gameName = new String("Sanchit");
// console.log(gameName); // [String: 'Sanchit']
// console.log(typeof gameName); // object
// console.log(gameName.length); // 7
// console.log(gameName[0]); // S
// console.log(gameName.__proto__); // String {}
// console.log(gameName.__proto__ === String.prototype); // true

const gameName2 = gameName.slice(0, 3); 
// console.log(gameName2); // San
// console.log(gameName2.length); // 3
// console.log(gameName2[0]); // S

const gameName3 = gameName.substring(0, 3); // gameName3 = gameName.substr(-7, 3); --> San
 console.log(gameName3.split('-')); // San
// console.log(gameName3.length); // 3
// console.log(gameName3[0]); // S
