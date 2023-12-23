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

function addTwoNumbers(num1, nun2) {
  return num1 + nun2;
  //   let result = num1 + nun2;
  //   return result;
}
const result = addTwoNumbers(3, 7);
console.log("Result: ", result);
