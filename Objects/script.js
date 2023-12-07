//  OBJRCT LITERALS

const mySymbol = Symbol("key1");

const jsUser = {
  name: "Rani",
  "full name": "Rani Pawar",
  [mySymbol]: "mykey",
  age: 18,
  locaton: "Nagpur",
  email: "rani@gmail.com",
  isLogedIn: false,
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);
// console.log(typeof [mySymbol]);

// jsUser.email = "rani@google.com";
// // Object.freeze(jsUser);  // change email ramein same
// jsUser.email = "rani@mishi.com";
// // console.log(jsUser);

// jsUser.greetings = function () {
//   console.log("Hello there");
// };
// console.log(jsUser.greetings());

// jsUser.greetings1 = function () {
//   console.log(`Hello there, ${this.name}`);
// };
// console.log(jsUser.greetings());
// console.log(jsUser.greetings1());

//.................................||..................................//
const tinderUser = {};
tinderUser.id = "124abc";
tinderUser.name = "Sammy";
tinderUser.isLogedIn = false;
console.log(tinderUser);

//.................................||..................................//
//Nested
const regularUser = {
  email: "rani@12gmail.com",
  fullName: {
    userFullName: {
      firstname: "Rani",
      lastname: "Pawar",
    },
  },
};
console.log(regularUser.fullName.userFullName.lastname);

//.................................||..................................//
// combine object USING SPREAD OPERATOR

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = Object.assign({}, obj1, obj2, obj4); // {}=target, obj1 = source
const obj3 = { ...obj1, ...obj2, ...obj4 }; // using spread operator
console.log(obj3);

//.................................||..................................//
//ARRAY OF OBJECTS

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];
users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoged"));

//.................................||..................................//
//Object Destructoring and JSON API intro

const course = {
  coursename: "js",
  price: "999",
  courseInstruc: "hitesh",
};
const { courseInstruc: instructor } = course; // method
console.log(instructor);
