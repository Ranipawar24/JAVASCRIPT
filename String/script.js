// let name = "Rani";
// // console.log(name.length);
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name);
//.................................||..................................//

// //... Template Literal...
// let boy1 = "Ankit";
// let boy2 = "Yash";
// //Ankit is a friend of Yash
// let sentence = `${boy1} is a friend of ${boy2}`;
// console.log(sentence);
//.................................||..................................//

//..... Escape sequence Characters...
// let fruit = "Bana'na";
// console.log(fruit);
// \n for next line/ new line

//.................................||..................................//
// Uppercase and Lowercase...
// let name = "Rani";
// console.log(name.toUpperCase()); // convert all characters into Capital
// console.log(name.toLowerCase()); // convert all characters into Small
//.................................||..................................//

// //....String Methods
// console.log(name.slice(2, 4)); //
// console.log(name.slice(2)); //
// console.log(name.replace("Ra", "Pa")); //to replace a char rani to pani
// console.log(name.slice(2)); //

///.................................||..................................//

// //Concat
// let frend = "Anuja";
// console.log(name.concat(" is a friend of ", frend, " ok"));

// //.................................||..................................//

// // trim
// let frend2 = "          Tanji        ";
// console.log(frend2.trim()); // trim removes a whiteSapces

//.................................||..................................//
// let myString = "hey, there!";
// let num = 7;
// for (let i = 0; i < num; i++) {
//   console.log(myString);
// }

// let str = 'har"';
// console.log(str.length);

//.................................||..................................//

const name = "Rani";
const repoCount = 50;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String("Ranip");
// console.log(gameName.length);

//.................................||..................................//
// TOUPPERCASE
// console.log(gameName.toUpperCase());

//.................................||..................................//
// CHARAT
// console.log(gameName.charAt(2));

//.................................||..................................//
// INDEXOF
// console.log(gameName.indexOf("R"));

//.................................||..................................//
// SUBSTRING
const newString = gameName.substring(0, 3);
console.log(newString);

//.................................||..................................//
// SLICE
const anotherString = gameName.slice(-4, 2);
console.log(anotherString);

//.................................||..................................//
// TRIM
const newStringOne = "    Rani    ";
console.log(newStringOne);
console.log(newStringOne.trim());

//.................................||..................................//
// REPLACE
const url = "https://spotity.vercel.app/rani%20p";
console.log(url.replace("%20", "-"));

console.log(url.includes("app"));
