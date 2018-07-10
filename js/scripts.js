let bestNumber = false;
let isTrue = false;

console.log(bestNumber || isTrue);


console.log(!isTrue);




let num = 11;
let string = '11';
console.log(num == string);// loose equality checks for value and not type
console.log(num === string);// strict equality and checks for both value and type




const prim = 'my string'; //primative
const objectString = new String('my string');
console.log(prim === objectString);// false
console.log(prim == objectString);// true

//Modulus
console.log(5 % 2); //reurns 1 Modulus(%) is a division remainder.


//INC and DEX
let start = 1;
//... after some logic
start++;// taking the value of start and adding 1 to it. start-- removes 1
// console.log(start.toUpperCase());//toUpperCase makes the value uppercase. This error throws an actual arror

let nonNumber = "cheese";
console.log(parseInt(nonNumber));
console.log(isNaN(nonNumber));//isNaN checks if it is not a number

let fifty ="50";
console.log(parseInt(fifty));


let nonString = 50000;
console.log(nonString.toString());//parseInt and toString take one tupe and convert it into another

console.log(nonString +=20);// nonString = nonString +20

// var first = prompt('Please enter a value', 10);
// var second = prompt('Please enter ANOTHER value', 10);
// var first = parseInt(first);
// var second = parseInt(second);
//
// if(!isNaN(first) && !isNaN(second)) {
// alert(first+second);
// } else if(isNaN(second)){
//   second = parseInt(prompt('No, a Numericle number', 10));
//   alert(first + second);
// } else {
//   alert ('Please write your numbers in numericle format.');
// }

//switch

// let greeting = prompt('tell me how to say hello', 'Gutentaag!');
// switch(greeting.toLowerCase()){ //normalizing data!
//     case 'hello':
//       alert(`I love saying ${greeting}!`);
//       break;
//     case 'wassup':
//       alert(`${greeting} is SO 90s!`);
//       break;
//     default:
//       alert(`I have never heard of ${greeting} before!`);
//       break;
// }

//Ternary
// let money =10;
// let currency = confirm('In dollars or not');
// currency ? alert (`$${money}`) : alert(money);



let isAdult = confirm ('Are you 18 or over in age?');
if(isAdult){
  let isUnder80 = confirm('are you under 80 years old?');
  if (isUnder80){
    let isCool = confirm('Do you like star wars?');
    if(!isCool) return;
    alert("you are so cool!");
  } else {
    let isElderly = confirm("Do you enjoy prunes?";)
  }
} else {
  alert('You were shot first!!!')
}
