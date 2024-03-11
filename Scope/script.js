//.................................||..................................//

//GLOBAL AND LOCAL SCOPE

let a = 10; // global scope
const b = 20;
var c = 30;

if (true) {
  // block scope
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);
console.log(b);
console.log(c);

//.................................||..................................//

// Nested scope
function one() {
  const userName = "Rani";
}
