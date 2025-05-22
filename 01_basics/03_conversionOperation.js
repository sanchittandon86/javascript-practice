let score = 33;
//let score2 = Number(score); // convert string to number
//console.log(score2); // 33  when -- let score = "33abc" then it will be NaN (Not a Number);
// let score = null; -- output: 0
//console.log(typeof score2); // number   
// const {score} = req.body; // if you are using express.js
// const score = Number(req.body.score); // if you are using express.js
// true = 1, false = 0

//let isLoggedIn = undefined; // string
//let isLoggedIn2 = Boolean(isLoggedIn); // convert boolean to number
//console.log(isLoggedIn2); // true


// 1 => true
// 0 => false   
// "" => false
// "0" => true
// "sanchit" => true
// "false" => true
// "null" => true


let someValue = 7; // Number

let someValue2 = String(someValue); // convert number to string
console.log(someValue2); // "7" 
console.log(typeof someValue2); // string