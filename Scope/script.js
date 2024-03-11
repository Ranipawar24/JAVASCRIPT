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

  function two() {
    const website = "youTube";
    console.log(userName);
  }
  // console.log(website);
  two();
}
one();

//................................. Interseting  .................................//

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

// because of hoisting addTwo cannot access before initialization
console.log(addTwo(5));
const addTwo = function (num) {
  return num + 2;
};
