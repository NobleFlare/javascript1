const h3=document.querySelector('#temp');
let scale = prompt(`Clesius or Farinheight`);
let temp = prompt(`enter number to convert`)

function convertTemp(scale, temp){
  scale = scale.toLowerCase();
  let returnVal;
  let oppositeVal = scale === 'c' ? 'Fahrenheit' :// if scale is c (ture) oppositeVel is Fahrenheit. Otherwise Celcius
  'Celcius';
  temp=parseInt(temp);
  if(!isNaN(temp)){
    returnVal = scale ===`c` ? (1.8*temp) + 32 : (5/9)*(temp -32);
    h3.innerText = `your temperature is ${returnVal} ${oppositeVal}`;
  }else{
    scale = prompt("what scale (C of F) do you want to use?", "F or C");
    temp = prompt("how hot is it?", "99");
    convertTemp(scale, temp);
  }
}

convertTemp(scale, temp);

h3.addEventListener('click', (e) =>{
  let valueArr = e.target.innerText.split(' ');
  scale = valueArr[valueArr.length-1] === 'Celcius'? 'C' : 'F';
  temp=valueArr [valueArr.length -2];
  convertTemp(scale, temp);
})



//
// //Querying the DOM
// let body = document.getElementsByTagName("body");
// //console.log(body[0]);
// let header = document.getElementsByClassName('heading');
//
// const paragraph = document.getElementById('paragraph1');
// //console.log(paragraph);
//
// //
// // let div = document.querySelector(".jr-is-the-best");//Classes
// let div = document.querySelector("#beth_is_the_worst");//Ids
//
// //let divs = document.querySelectorAll("div");//rules are the same but this grabs all the things.
//
//
// div.addEventListener(
//   "mouseover",
//   ev=>{ //ES6 way to write
//     console.log(ev);
//     div.style.backgroundColor = "indigo";
//   }
//   // function(ev){ ES5 way to write
//   //   div.style.backgroundColor = "indigo";
//   // }
// );
