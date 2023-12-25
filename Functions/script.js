//.................................||..................................//
//Functions and Parameters
function sayMyName() {
  console.log("R");
  console.log("a");
  console.log("n");
  console.log("i");
}
sayMyName();

// function addTwoNumbers(num1, nun2) {//   // thisl is a Parameters
//   console.log(num1 + nun2);
// }
// addTwoNumbers(3, 7); // this is a Arguments
//.................................||..................................//
// function addTwoNumbers(num1, nun2) {
//   return num1 + nun2;
//   //   let result = num1 + nun2;
//   //   return result;
// }
// const result = addTwoNumbers(3, 7);
// // console.log("Result: ", result);

//.................................||..................................//

// FOR USER LOGGED IN
function loginUserMessage(username = "rANI") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("Ranii"));
console.log(loginUserMessage());

//.................................||..................................//

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(20, 200, 300, 15));

const user = {
  username: "Rani",
  price: 299,
};
function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user);

handleObject({
  username: "pawar",
  price: "499",
});
//.................................||..................................//

handleObject({
  username: "pawar",
  price: "499",
});
