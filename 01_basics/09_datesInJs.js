// JavaScript Date *Object* represents dates and times. 
// It provides methods to work with dates, 
// such as getting the current date, 
// formatting dates, 
// and performing date calculations.

// January 1, 1970, is the epoch time in JavaScript,
// which is the point in time from which all time is measured.

// let currentDate = new Date(); // Current date and time
// // console.log(currentDate); // Output: Current date and time in ISO format BY default
// // console.log(currentDate.toString()); // Output: Current date and time in human-readable format
// // 2025-05-24T16:17:52.569Z
// // Sat May 24 2025 21:47:52 GMT+0530 (India Standard Time)


// console.log(currentDate.toLocaleString()); // Output: Current date and time in local format
// console.log(currentDate.toLocaleDateString()); // Output: Current date in local format
// // 24/5/2025, 9:49:40 pm
// // 24/5/2025


// let newDate = new Date(2023, 0, 23); // Specific date and time
// console.log(newDate.toDateString()); // Output: Specific date and time in ISO format


// console.log(Date.now()); // Output: Current timestamp in milliseconds since epoch time
// console.log(Date.now() / 1000); // Output: Current timestamp in seconds since epoch time
// console.log(Math.floor(Date.now() / 1000)); // Output: Current timestamp in seconds since epoch time, rounded down to the nearest whole number
// 
// 1748104130864
// 1748104130.877
// 1748104130


// let currentDate = new Date(); // Current date and time
// console.log(currentDate); // Output: Current date and time in ISO format
// console.log(currentDate.getMonth()); // Output: Current month (0-11)
// console.log(currentDate.getDate()); // Output: Current date (1-31)
// console.log(currentDate.getFullYear()); // Output: Current year (YYYY)

