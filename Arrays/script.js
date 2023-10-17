const marks = [52, 63, 85, 91, false, "Not present"];
const myArr = ["sonu", "monu"];
const myArr2 = new Array(1, 2, 4, 6);
console.log(myArr[0]);
// console.log(marks);
// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

//.................................||..................................//

// Array Methods

// myArr2.push(7); // foradd
// console.log(myArr2);
// myArr2.pop(); // last value remove
// console.log(myArr2);

// myArr2.unshift(8); // add first
// console.log(myArr2);

// myArr2.shift(); // remove add
// console.log(myArr2);

// console.log(myArr2.includes(10)); // to check value present or not in a boolean format
//.................................||..................................//
const newArrau = myArr2.join();
console.log(myArr2);
console.log(typeof newArrau);

//.................................||..................................//

// SLICE SPLICE

//.................................||..................................//
// CONCATE

const myName = ["Rani", "Anuja", "Tanuja"];
const myName2 = ["Pawar", "pink", "blue"];
// const allName = myName.concat(myName2);
// console.log(allName);

//.................................||..................................//
// spreadoperator -- concate and this is the worked
const all_new_name = [...myName, ...myName2];
console.log(all_new_name);

//.................................||..................................//
// FLAT-- to generate value in one array
const anotheArray = [1, 2, 3, [5, 6], 8.6, 2, [8, [4, 96]]];
const realArray = anotheArray.flat(Infinity);
console.log(realArray);

//.................................||..................................//
// isArray -- to check array or not
//FROM  --- converting to array
console.log(Array.isArray("Rani"));
console.log(Array.from("Rani"));
