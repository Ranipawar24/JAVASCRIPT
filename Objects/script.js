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

jsUser.email = "rani@google.com";
// Object.freeze(jsUser);  // change email ramein same
jsUser.email = "rani@mishi.com";
// console.log(jsUser);

jsUser.greetings = function () {
  console.log("Hello there");
};
console.log(jsUser.greetings());

jsUser.greetings1 = function () {
  console.log(`Hello there, ${this.name}`);
};
console.log(jsUser.greetings());
console.log(jsUser.greetings1());

//.................................||..................................//
// changes made
