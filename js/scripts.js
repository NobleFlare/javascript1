let loginForm = document.forms.login;
let emailInput = loginForm.email;
let passwordInput = loginForm.password;  //grab the name attributes

emailInput.addEventListener("keyup", e =>{
  console.log(this); //e. target is just email input. The .value is hwat they are typing in. What did they hit?
  e.target.value//what is getting typed in
});


loginForm.addEventListener("submit", e =>{
  e.preventDefault();//stops default action
  //do some checks, submit the form, ect
  loginForm.reset(); //clear inputs on form
  console.log(e);
})
//final notes. Eventlistener "submit" is what will be required to get info into the li's



//THIS

//let favorites = ["pickles"];
function listItems(pet){
  console.log(this);
  alert(`${this.name} loves ${this.favorites[0]} and has a ${pet}`);
};
emailInput.addEventListener("keyup", e =>{
  console.log(this);
  e.target.value;
})

//THIS will always defult to the window unless we change it
let user = {
  name: "Ryeker",
  cart: [],
  coupons: [],
  favorites: ["cheese"],
  listFavorites: listItems
};
//IMPLICIT "THIS" BINDING
user.listFavorites();//call site
//log out:Ryeker loves cheese

//EXPLICIT BINDING
let jr = {
  name: "James Royce?",
  cart: ["Guns"],
  coupons: [1.99],
  favorites:["star wars"]
};

listItems.call(jr, "dog"); //rule 1 about call is it must be callec on a function
//Rule 2 for call is if the funciton bein gbound requires arguments, they begin as the SECOND argument of the call.


//APPLY
listItems.apply(jr, ["cat"]);
