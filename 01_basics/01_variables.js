const accountId = 12345;
let accountEmail = "sanchit@example.com";
var accountPassword = "12345678";
let accountState;

accountCity = "Jaipur";

//accountId = 2; // cannot reassign const variable

accountEmail = "sanchit_new@example.com";
accountPassword = "87654321";
accountCity = "Delhi";

/* 
preferred not to use var
beacause of issue in block scope and function scope
// Use let or const instead
*/

// console.log(accountId, accountEmail, accountPassword, accountCity, accountState); 
// or in Table format.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);