// var a=20;
// var b=10;
// var c=40;
// console.log(a,b,c);
// console.log(typeof null);
// console.log(1+3);

// // newArray[900]=90;
// // console.log("this is example=>" ,typeof newArray[9000])


// // console.log("length of array",newArray.length)
// // newArray[900]=90;

// const newArray =[];
// console.log("length of array",newArray.length)
// newArray[9]=90;
// console.log("length of array" ,newArray.length)
// for(let value of newArray){
//     console.log("value=>" , value)
// }
// console.log("this is example=>", typeof newArray[9000])


// let s='chill';
// console.log(typeof s== 'string');
// console.log(typeof newArray=='Array')

// console.log("is array", Array.isArray(newArray))

// function functionName(a,b){
//     console.log('A===>',a, 'B===>',b)
// }
// functionName()//calling function
// functionName(23, 84)
// functionName(23)
// // addition

// // function addition(a,b){

// //     console.log (a+b)
    
// //     }

//     // function addition(arr){

//     //     let sum = 0;
        
//     //     for(let value of arr){
        
//     //     if(typeof value == 'number'){
        
//     //     sum = sum + value
        
//     //     }
        
//     //     }
        
//     //     console.log(sum)
        
//     //     }




//  const sumarr = [9, 5, 8, 8, 0, 0, 0];

//  function suma(arr) {

//   let sum = 0;

//  for (let value of arr) {

//         sum += value;
//  }



//   console.log(sum);

// }
// console.log("typeof infinity",typeof Infinity)

// function add (s) {
//    return s;
// }
// console.log('add()', add('hey'));
// console.log('add()', add(1234));
// console.log('add()', add(true));
// console.log('add()', add(Infinity));
// console.log('add()', add([]));
var a=10;
var _a="hello";
console.log(_a);     
var $123=50;
console.log($123)

var x=10;
var y=20;
var z=x+y;
console.log(z);


var temp="this is a variable";
      //for alert   
function abc(){
    var y="this is a 'y' variable";
    window.value='thi is a variable'
    console.log(window.value);
    alert(window.temp);
}
abc();
console.log(window.value);
console.log(y);
// concept of variable qoets with string
var str1="her ";
var str2='name is a "Rani".';
console.log(str1+str2);

//concept of variable for boolean

var temp1=12;
var temp2= 13;

if(temp1==temp2){
    console.log("true");
}else{
    console.log("false");
}

var a=12;
var b=13;
function abc(){
    var a=100;
    console.log(a);
    console.log(b);

}
abc();
console.log(a);
    console.log(b);



//     console.log(a1)
// const a1=function name (name)

// console.log(callme)
// function callme(name){


// console.log(name);
// }
// callme();


// console.log('function' ,callme);

// function callme (a) {

// var b =30;

// return b*a;

// }

// var c = callme(3);

// console.log(c)




// console.log(callme);
// console.log(callme());
// const callme= function(){
//     console.log("Hey call me")
// }
// console.log(callme());

// var scopeFinal = "final";

// { var scopeFinal = "final1";

// let block = "Scope";

// console.log(block) //

// console.log(scopeFinal) //

// }

// console.log(scopeFinal) //

// console.log(block); //




// let arr = [1,2,1,3,4,5,6,2,5];
// let arr1 =new [100];
// for(let i=0; i<arr.length; i++){
//     arr1[arr[i]]++;
// }
// for(let i=0; i<arr.length;i++){
//     if(arr1[i]>0){
//         console.log(i + "=>" + arr1[i]);
//     }
// }


    let arr = [1,2,1,3,4,5,6,2,5];
        let count=0;
        for(let i=0; i<arr.length-1;i+=count){
            count=0;
    
            for(let j=i+1; j<arr.length; j++){
                if(arr[i]==arr[j]){
                    count++;
                } 
            }
            console.log(arr[i] + " => " +""+count);
        }



        // let arr1=[1,2,3,5,6,4,8,9,7];
        // let odd=arr.reduce((acc,val){
        //     if(val % 2!==0){
               
        //     }
        // })


        // var x=10;
        // var y=20;
        // if(x==y){
        //     console.log("x==y is true");
        // }

        // let car ={
        //     headlight: true,
        // };
        // function Sedan(name){

        // }

        // function call(): void
        // function call(){
        //     let a;
        //     const b = getA(){
        //         console.log(b);
        //     }
        // }


        // const add= new Add();
        // add().crore(8).lac(90).thousand(70).hundred(1).ten(2).one(1);
        // add().crore(7);

        // function greet(name='Friend', greeting = 'Hello') { 
        //     console.log("${greeting), ${name}!*); 
        // }
        // greet('John');

//  "Consider the following code snippet:
// <code>
function greet(name = 'Friend', greeting = 'Hello') {
 console.log(`${greeting}, ${name}!`);
}

greet('John');
// </code>
// What is the output of the above code snippet?"



function outer() {
    var b = 2;

    function inner() {
        b++;
        var b = 3;
        console.log(b);
    }

    inner();
}

outer();
