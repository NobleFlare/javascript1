//prototype inheritance
let sentence = new String("Ann went walking one day.");
let number = new Number(32);
//console.log(Object.getPrototypeOf(sentence));

let dude = { //most basic way to create ana object
  catchPhrase: "Where's my car?",//KEY : VALUE pair, which makes a PROPERTY
  firstName: "Big",
  lastName: "Lebowski",
  age: Infinity
};
//console.log(Object.getPrototypeOf(dude));//Object

//constructor funcion
function User(name, email, password, favorites, cart) {
  this.name = name;
  this.email = email;
  this.password= password;
  this.favorites = favorites;
  this.cart = cart;
};//4th way to bind this

let cody = new User("cody", "code-man-5000@gmail.com",//the new here tells javascript to make a new object rather than just run the function
"123456", [], []);
//console.log(cody);

let ryeker = new User("Ryeker", "best_teacher$truth.com", "11111", [], []);
ryeker.isAdmin = true;//dot notation
ryeker["isAdmin"] = true //bracket notaion
//ryeker.42 = false;
console.log(ryeker);



//Try it out
const userForm = document.forms.userForm;
userForm.addEventListener("submit", e =>{
  e.preventDefault()


let newUser = new User(userForm.name.value, userForm.email.value, userForm.password.value, [], [])//value is exacty what was entered.
console.log(newUser);
})
