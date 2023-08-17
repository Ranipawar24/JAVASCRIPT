
// let arr = [1,2,1,3,4,5,6,2,5];
// let count=0;
// for(let i=0; i<arr.length-1;i++){
//     count=0;

//     for(let j=i; j<arr.length; j++){
//         if(arr[i]==arr[j]){
//             count++;
//         } 
//     }
//     console.log(arr[i] + " => " +""+count);
// }


function findRepeating(arr1, n){//O(logn)
    arr1.sort();
    for(let i=0; i<n; i++){
        let first_in=arr1.indexOf(arr1[i]);
        let last_in=arr1.lastIndexOf(arr1[i]);
        i=last_in;

        let freq=last_in-first_in+1;
        if(freq>=1){
            console.log(arr1[i]+"=>"+freq);
        }
    }
}

//drive code
let arr1 =[1,2,1,3,4,5,6,2,5];
let n= arr1.length;
findRepeating(arr1,n);



// var x=10;
// var y=10;
// if(x==y){
//     console.log("x==y is true");
// }

//  1 for in loop
// var temp = "";

// var person = {
//     first : "Rani",
//     last: "Pawar",
//     age : "26",
// }

// for(value in person){
//     temp = temp+person[value]+ " ";
// }
// console.log(temp);


// 1 for of loop
// var s ="RaniPawar";
// for(value of s){
//     console.log(value);
// }

// var temp=[];
// var alphabet = ["A", "B", "C", "D"];
// for (var item of alphabet){
//     temp.push(item);
    
// }
// console.log(temp);


// var array=['a','b','c'];
// console.log(...array);


// // function object
// let add = new Function("num1","num2","return num1+num2");
// console.log(add(2,8));
// console.log(add(10,8));

// CLOSURE//

// var lastname="Sharma";
// function getFullName(){
//     return firstname + lastname;
// }
// function printDetails(){
//     var firstname = "Vishal";
//     return function (){
//         return firstname + lastname;
//     };
// }

// const data = printDetails();
// console.log(data());




// function increaseCounter(){
//     let counter = -1;
//     return ()=>{
//         console.log(counter++);
//     };
// }

// const counter1 = increaseCounter();
// const counter2 = increaseCounter();
// const counter3 = increaseCounter();

// console.log(counter1());
// console.log(counter2());
// console.log(counter3());

// // 1.

// const add = (a1)=>{
//     return (a2) =>{
//         return (a3) =>{
//             return (a4) =>{
//                 return (a5) =>{
//                     console.log(a1+a2+a3+a4+a5)
//                 };
//             };
//         };
//     };
// };
// const data11 = add(10)(20)(30)(40)(50);

//2.
 // sum(1)(2)(3)......sum(n)()


//  var emp=new Object();
// emp.name="Ravi Malik";
// emp.salary=50000;
// document.write("emp.name+" "+ emp.salary");
// x


//...... creating an object using Object constructor...//

// function empp (id, name, salary){
//     this.id=id;
//     this.name=name;
//     this.salary=salary;

// }
// let e =new empp(24, "Rani" , 20000);
// for(value in e){
//     console.log(e[value] + " ");
// }


// console.log(true == "Vishal");
// console.log(true == "1");
// console.log(true == 0);
// console.log(true == "");


// ..........Object.assign() METHOD......
// const object1 ={
//     a:1,
//     b:2,
//     c:5
// }
// const object2 ={
//     d:6,
//     e:3,
//     f:4
// }
// const object3= Object.assign({d:7,g:8},object1);
// const object4 = Object.assign({p:9,r:10,n:24},object2);
// console.log(object1,object3);
// console.log(object4);



// ..........Object.create() METHOD......
// function fruit(){
//     this.name = "Apple";

// }
// function fun(){
//     fruit.call(this);
// }
// fun.prototype = Object.create(fruit.prototype);
// const app = new fun();
// console.log(app);


// // ..........Object.freeze() METHOD......
// const object1 ={
//     age:27
// }
// const object2 = Object.freeze(object1);
// object2.age =25;
// console.log(object2.age);



// // ..........Object.is() METHOD......
// const ans1={
//     age:26
// }
// const ans2={
//     age:26
// }
// console.log(Object.is(ans1.age, ans2.age));




// // ..........Object.isExtensible() METHOD......
// const ans3 ={

// }
// console.log(Object.is(ans3));
// console.log(Object.isExtensible(ans3));


// // ..........Object.values() METHOD......
// const ans4={
//     a:"abc",
//     b:23,
//     c:true
// }
// console.log(Object.values(ans4));


// // for callback()
// setTimeout(function(){
//     myfunction("rani");
// },5000);

// function myfunction(value){
//     document.getElementById("result").innerHTML=value;
// }




// // 2nd instructor
// const myPromise =()=>Promise.resolve("i have resoled!");

// function firstFunction(){
//     myPromise().the((res)=> console.log("1",res));
//     console.log("second");
// }


// async function secondFunction(){
//     console.log(await myPromise());
//     console.log("second1");
// }

// firstFunction();
// secondFunction();

// console.log("start");

// setTimeout(() => {

// console.log("setTimeout");

// }, 0);

// Promise.resolve().then(() => {

// console.log("resolve");

// });

// console.log("end");

// const promise = new Promise((resolve, reject) => {

// console.log(1);

// setTimeout(() => {

// console.log("timerStart");

// resolve("success"); //

// console.log("timerEnd");

// }, 0);

// console.log(2);

// });

// promise.then((res) => {

// console.log(res);

// });

// setTimeout(() => {

// console.log("Are!!");

// }, 0);

// console.log(4);



/*--------------------------------------
ARRAY IN JAVASCRIPT
--------------------------------------*/

/* creating array using literals*/

// const emp =["a", "b", "c"];
// for(value of emp){
//     console.log(value);
// }


// /* creating array using new keyword*/
// const fruit = new Array();
// fruit[0]="apple";
// fruit[1]="mango";
// fruit[2]="banana";

// for(value of fruit){
//     console.log(value);
// }


// /* creating array using constructor*/
// const car = new Array("swift","maruti","auodi");

// for(value of car){
//     console.log(value);
// }



// /*----------------------------------------
// Array Methods
// ----------------------------------------*/

// // 1. concat() for joining two array

// let arr =["c" , "c++", "java"];
// let Arr1=["css", "html", "javascript"];

// let mergeArray = arr.concat(Arr1);

// console.log(mergeArray);

// //2. copywithin
// var copyWithinArray = Arr1.copyWithin(0,1,3);
// console.log(copyWithinArray);

// //3. entries

// var entriesAray = Arr1.entries();
// for(value of entriesAray){
//     console.log(value);
// }






/*---------------- DOM ------------------*/


function Showname(){
   const name =document.for1.name.value;
   alert("Hey "+ name);
}

/*----getElementsById()--------------*/

function showNumber(){
    let phonenum = document.getElementById("phonenum").value;
    alert("Phone no. is : " + phonenum);
}


/*----getElementByClassName()--------------*/
let x  = document.getElementsByClassName('abc');
alert (x[0].innerText);
for(value of x){
    alert(value.innerText);
}


/*----getElementByName()--------------*/

function showElements(){
    var x = document.getElementsByName("gender");
    alert("total gender available : " + x.length);
    alert("Value are : " + x[0].defaultValue);
    console.log(x);
}


/*----getElementByTagName()--------------*/

function countTag(){
    var x= document.getElementsByTagName("p");
    var i= document.getElementsByTagName("input");
    alert("Total p tags are : " + x.length + " and Total input tags are : "+ i.length);
}
