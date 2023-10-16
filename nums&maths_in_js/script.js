//++++++++  Number ++++++++++
const score = 400;
console.log(score);

const bal = new Number(100);
console.log(bal);

console.log(bal.toString().length);
console.log(bal.toFixed(2));

const otherNum = 123.458;
console.log(otherNum.toPrecision(3));

// conver into local to indian value
const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

//++++++++  Maths ++++++++++

console.log(Math);

// its converted positive to negative
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4.2, 3, 4, 8));

console.log(Math.random());

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// FORMULA
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
