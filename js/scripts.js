// let clearBtn = document.querySelector("#clearBtn")
// let myTimeout;
// let annoyingPopup = () =>{
//   alert("HEY!! Have you seen my Insane and wacky discounts?!?!?");
// };
//
// setTimeout(
//   () => {alert("hey guy, your're cool!")},
//   5000
// );
//
// function startTimer(){
//   myTimeout = setTimeout(annoyingPopup, 5000);
// };
//
// startTimer();
//
// function cancelTimer(){
//   clearTimeout(myTimeout);
// }
// clearBtn.addEventListener("click", cancelTimer);

// let myInterval;
//
// function remindUser(){
//   alert("hey ballons");
// };
//
// myInterval = setInterval(remindUser, 3000);
//
// function clear(){
//   clearInterval(myInterval);
// };
//
// clearBtn.addEventListener("click", clear);

//Lets try it out =============================================================
// let clearIntervalBtn = document.querySelector("#clearIntervalBtn");
// let clearTimeoutBtn = document.querySelector("#clearTimeoutBtn");
// let timeOutAnswer = prompt("how long you you wanna wait?", "5 seconds")
// let intervalAnswer = prompt("how long do you wanna wait for interval")
// let timeoutReference;
// let intervalReference;
//
// let quotes = ['be kind', 'stay kind', 'have grit not pride', 'shoot first'];
// function  createTimer(time, type){
//   let endIndex = time.indexOf(" "); /// grabs stuff from before the first space: //If no space is entered you will get a "-1"
//   let parsedTime = parseInt(time.substring(0, endIndex));
//   if(!isNaN(parsedTime)){
//     parsedTime *= 1000; //this changes the value of parsedTime
//     if (type === "timeout"){
//       timeoutReference = setTimeout(alertRandomQuote, parsedTime);
//     }else if(type ==="interval"){
//       intervalReference = setInterval(alertRandomQuote, parsedTime);
//     }
//   }else{
//     console.log("Oh no!!!");
//   }
// };
//
// function alertRandomQuote() {
//   let maxIndex = quotes.length -1;
//   let indexToChoose =Math.floor(Math.random() * maxIndex);
//   alert(quotes[indexToChoose])
// }
//
// createTimer(timeOutAnswer, "timeout");
//
// createTimer(intervalAnswer, "interval");
//
//
// clearIntervalBtn.addEventListener("click", ()=> {
//   clearInterval(intervalReference);
// });
// clearTimeoutBtn.addEventListener("click", () =>{
//   clearTimeout(timeoutReference);
// })

//LOCALSTORAGE/ Session storage===================================
let firstName = prompt("whats your first name?");

function storeUserInfor(){
  if(!sesstionStorage.getItem("firstName")){
    let firstName = prompt("whats your first name?");
    sessionStorage.setItem("firstName",firstName);
  }
};

storeUserInfo();

let retrievedValue = sessionStorage.getItem("firstName");
alert(`Hello ${retrievedValue}!`)
