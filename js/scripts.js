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


//RECURSION
let i = 0;
  function iCallMyself(){
    console.log(i);
    i++;
    iCallMyself();
  }
//FAT ARROW Functions
//BASIC IMPPLEMENTATION
  (logFunction, alertFunction) => {//no function keyword
    logFunction('hello world');
    alertFunction('goodbye, friends!');
  }

  //ONLY 1 arguments
  string => {//parens are option
    console.log(string);
  }

  let logString = string =>{
    console.log(logString);
  };

  //logString("hello cats!");
  //IMPLICIT RETURN
  string => (string.toUpperCase());
