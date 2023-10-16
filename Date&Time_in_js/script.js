// DATES..............

// let myDate = new Date();
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 9, 24);
// // console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 9, 24, 4, 5);
// console.log(myCreatedDate.toLocaleDateString());

// .............TIME..............

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

//convert into sec
console.log(Math.floor(Date.now() / 1000));

//for current date and time
let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getTime());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
