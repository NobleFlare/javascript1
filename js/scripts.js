//Querying the DOM
let body = document.getElementsByTagName("body");
//console.log(body[0]);
let header = document.getElementsByClassName('heading');

const paragraph = document.getElementById('paragraph1');
//console.log(paragraph);

//
// let div = document.querySelector(".jr-is-the-best");//Classes
let div = document.querySelector("#beth_is_the_worst");//Ids

//let divs = document.querySelectorAll("div");//rules are the same but this grabs all the things.


div.addEventListener(
  "mouseover",
  ev=>{ //ES6 way to write
    console.log(ev);
    div.style.backgroundColor = "indigo";
  }
  // function(ev){ ES5 way to write
  //   div.style.backgroundColor = "indigo";
  // }
);
