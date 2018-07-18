let humanYears = prompt("How old is your dog?")

function dogAge(years){
  return years *7;
};

if (isNaN(humanYears) || humanYears == 0) {
  alert("Please enter a non-zero number.");
}else{
  alert(dogAge(humanYears));
};

///Other part of the try it out
let personAge = prompt("Please enter your age.")
let prodAmount = prompt("How much of this product do you use per day?")

function lifeTime(supply, age){
  let restOfLife = 80-age;
  let totalSupply = restOfLife * 365 * supply;
  return alert(`You will need ${totalSupply} to last you until you're 80`);
}
if (isNaN(personAge || prodAmount)){
  alert("Please only enter a number for both entries.")
}else{
  lifeTime(prodAmount, personAge);
};

// //ANONYMOUS FUNCION
// //FUNCTION DEFINITION
// // function (string){//most basit function// inside the () is where your arguments/paramaters go
// //   return string.toUpperCase(); //data transformation and return. Javascript ends a function when it hits "return"
// // };// dont forget the ";"//End of function
//
// //Named Functions
// //Function DEFINITION
// function addTwo(num) { //the section named "num" can be anything but they must match
//   return num += 2;
// };
//
// //CALL Function
// console.log(addTwo(22));//Call Site
//
// let myNewNumber = addTwo(34);
//
// function logMyString(string) {
//   console.log(string);
// };
// logMyString('I like Pie');
//
// function alertsAd(){
//   alert('hey, we have a sale on pie'); //a non called function that will not show unless function is called
// }
// //alertsAd();
//
// //FUNCTION DECLARATION
// let confrimStuff = function(someString){
//   confirm(someString);
// };
// //confirmStuff("do you want to watch Frozen?");


// //RECURSION
// let i = 0;
//   function iCallMyself(){
//     console.log(i);
//     i++;
//     iCallMyself();
//   }
// //FAT ARROW Functions
// //BASIC IMPPLEMENTATION
//   (logFunction, alertFunction) => {//no function keyword
//     logFunction('hello world');
//     alertFunction('goodbye, friends!');
//   }
//
//   //ONLY 1 arguments
//   string => {//parens are option
//     console.log(string);
//   }
//
//   let logString = string =>{
//     console.log(logString);
//   };
//
//   //logString("hello cats!");
//   //IMPLICIT RETURN
//   string => (string.toUpperCase());
