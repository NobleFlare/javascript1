let loginForm = document.forms.login;
let emailInput = loginForm.email;
let passwordInput = loginForm.password;  //grab the name attributes

emailInput.addEventListener("keyup", e =>{
  console.log(e.keyCode); //e. target is just email input. The .value is hwat they are typing in. What did they hit?
  e.target.value//what is getting typed in
});


loginForm.addEventListener("submit", e =>{
  e.preventDefault();//stops default action
  //do some checks, submit the form, ect
  loginForm.reset(); //clear inputs on form
  console.log(e);
})
//final notes. Eventlistener "submit" is what will be required to get info into the li's
