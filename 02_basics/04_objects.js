// Objects 

// const tinderUser = new Object();// - singleton object

// - object literal
// const tinderUser = {};

// tinderUser.name = "Sanchit";
// tinderUser.age = 25;
// tinderUser.isLoggedIn = false;
// tinderUser.lastActive = "2 hours ago";
// tinderUser.location = "India";

// console.log(tinderUser); 
// // Output:
// {
//   name: 'Sanchit',
//   age: 25,
//   isLoggedIn: false,
//   lastActive: '2 hours ago',
//   location: 'India'
// }

const tinderUser = {
    email: "sanchit@example.com",
    fullName: {
        userFullName: {
            firstName: "Sanchit",
            lastName: "Tandon"
        }
    }
};

// console.log(tinderUser.fullName.userFullName.firstName); // Output: Sanchit

// const obj1 = {1: "a", 2: "b", 3: "c"};
// const obj2 = {3: "a", 4: "b", 5: "c"};

// const obj3 = {obj1, obj2}; // Merging two objects into one
// console.log(obj3);

// {
//   obj1: { '1': 'a', '2': 'b', '3': 'c' },
//   obj2: { '3': 'a', '4': 'b', '5': 'c' }
// }

// const obj5 = Object.assign(obj1, obj2);
// console.log(obj5);

// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);

// const obj6 = {...obj1, ...obj2};
// console.log(obj6);

// {
//   '1': 'a',
//   '2': 'b',
//   '3': 'c',
//   '4': 'b',
//   '5': 'c'
// }

// console.log(Object.keys(tinderUser)); // Output: [ 'email', 'fullName' ]
// console.log(Object.values(tinderUser)); // Output: [ 'sanchit@example.com', { userFullName: [Object] } ]
// console.log(Object.entries(tinderUser)); // Output: [ [ 'email', 'sanchit@example.com' ], [ 'fullName', { userFullName: [Object] } ] ]