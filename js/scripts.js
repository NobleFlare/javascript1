let firstName = prompt("Please enter your first name.");
let lastName = prompt("Please enter your last name");
console.log(firstName);

alert ("Your last name is "+lastName);
// var today = new Date();
// var day = today.getDate();
// var month = today.getMonth()+1;
// var year = today.getFullYear();
// var today = month + '/' + day + '/' + year;
let birthDay = new Date(prompt("When is your birthday? ", "5/21/2000"));
alert ("The birthday you entered is "+birthDay);

let confirmBday = confirm (`Is ${brithday} your correct birthday?`);
if(confirmBday) alert (`${birthday} is in fact your birthday!`);



//
// var myString = "Hello World!*78";
// console.log(typeof myString);
//
// var myNumber = "43"; //primitive
// var myOtherNumber = new Number(43);
//
// console.log(typeof myNumber, myOtherNumber);
//
// var isLoggedIn = false; //boolean
// let newVariable = "I am the best Variable";
// console.log(newVariable, 'after');
//
// {
// let newVariable = " I am the worst...";
// console.log(newVariable, "inside the scope");
// }
// // let newVariable; //declaration
// newVariable = "my dog is ugly";
// console.log(newVariable, "outsite the scope");
// isLoggedIn = null;
//
// //string interpolation
// console.log(" Hey there, " + myString +"how are you?"); //es5
// console.log(`hey there, ${myString} how are you?`);//es6
//
// {
//   //block of code
// }
//
//
//
//
//
//
//
//
// const age = 32;
//
// {
//   const age =35;
//   console.log(age);
// }
// console.log(age);
//
// let today = new Date();
// let myBirthday = new Date("1/1/19");
// console.log(myBirthday);
//
//
// let bestNumber = 42.7;
//
// Math.floor(bestNumber);
// console.log(Math.floor(bestNumber) * Math.PI);
//
//
//
//
//
// let classRoom = "Room 1";
// let objectClassRoom = new String ("Room 1");
// console.log(typeof classRoom);
// console.log(typeof objectClassRoom);
// console.log(classRoom.length);
//
//
// //stuff for take home
// alert("hey there user!, Pick a path...");//1-direction communicatino to your user
// const isReady = confirm("Are you ready to party?");
// alert(isReady);
//
// let userName = prompt("What is your name?", "John Doe");//if left empty the second part acts like a place holder
// console.log(userName);
//
// //make gh pages  settings tab of your repository. Drop down thing there and se it as master.
