/*//More dom stuff!!!
const div = document.querySelector('.myDiv');
//console.log(div.textContent); //returns text (only) in All Children
//div.textContent = 'eat cheese and die!!!';
console.log(div.innerHTML);
div.innerHTML = "<h1>Hey there, R.L Stein. Did you die in the 90s?";

let newH1 = document.createElement("h1");
newH1.id += " red_bg";
div.appendChild(newH1);// always adds after the lsast element in the parent

let newH2 = document.createElement("h2");
newH2.textContent = "I am before the h1!!";
newH2.className = "blue_bg";
//newH2.insertBefore("white-text");
div.insertBefore(newH2, newH1);

let newP = document.createElement("p");
newP.textContent = "I like Pie";
newP.classList.add('purple-text', 'green-bg');
div.appendChild(newP);

//Takehome
//do the try it out "clone repository"
*/

//FizzBuzz
let body = document.querySelector("body");
let script = document.querySelector("script");
for (let i = 1; i <= 100; i++) {
  let newP = document.createElement("p");
  if (i % 3 === 0 && i % 5 === 0) {
    newP.textContent = "FizzBuzz";
  }else if (i % 3 === 0){
    newP.textContent = "Fizz";
  } else if(i % 5 === 0){
    newP.textContent = "Buzz";
  }else{
    newP.textContent = i;
  }
  body.insertBefore(newP, script);
}

//DO TAKEHOME DAY7
