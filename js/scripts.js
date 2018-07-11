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



// let isAdult = confirm ('Are you 18 or over in age?');
// if(isAdult){
//   let isUnder80 = confirm('are you under 80 years old?');
//   if (isUnder80){
//     let isCool = confirm('Do you like star wars?');
//     if(!isCool) return;
//     alert("you are so cool!");
//   } else {
//     let isElderly = confirm("Do you enjoy prunes?";)
//   }
// } else {
//   alert('You were shot first!!!')
// }

let userName = prompt("Please enter your name");
let favColor = prompt("Which of these is your favorite color? Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White or Grey?");

switch(favColor.toLowerCase()){
  case "red":
    alert(`${userName} picked red, the "r" in rgb`);
    break;
  case "orange":
    alert(`Hey ${userName}, did you know the word orange derives from the Sanskrit naranga and the Persian narang?`);
    break;
  case "yellow":
    alert(`Did you know ${userName} that in America "yellow belly" is what you call a coward but in Japan yellow it considered the color of Courage?`);
    break;
  case "green":
    alert(`Green is the color used for night vision goggles because the human eye is most sensitive and able to distinguish the most shades in that color. You ever want to own night vision goggles ${userName}?`);
    break;
  case "blue":
    alert(`Do you know why royalty were called "blue bloods"? The first Blue dye had to be created from the stone Lapis Lazuli that was centraly mined from Afghanistan 6000 years ago. Only royalty could afford to pay for the rare dye and this is also why the term "royal blue" exists. Strange to think of a world where the color blue was so rare eh ${userName}? `);
    break;
  case "pink":
    alert(`No fun fact here ${userName}. Pink is just half-assed red. Refresh and pick a better color.`);
    break;
  case "purple":
    alert(`I see you picked the color that does not really exist ${userName}. Scientificallly, purple is not a color because there is no beam of pure light that looks purple. There is no light wavelength that corresponds to purple as it is some mix of other lights like white light. We see purple because the human eye can't tell what is really happening when red a blue light is mixed.`);
    break;
  case "black":
    alert(`Nothing really to say about black ${userName}. It was the first color to used in painting and is the easiest color to make to paint with.`);
    break;
  case "white":
    alert(`Your favorite color is white ${userName}? Well... to each their own I guess.`);
    break;
  case "grey":
    alert(`Grey is only slightly worse than pink. It's still a half-assed "color" though. Refresh and pick a different one ${userName}.`);
    break;
  default:
    alert("Please enter one of the colors given.");
    break;
}
