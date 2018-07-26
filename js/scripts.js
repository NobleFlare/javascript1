const body = document.querySelector("body");
const script = document.querySelector("script");
let header = document.createElement("header");
let main = document.createElement("main");
let footer = document.createElement("footer");
//NAV
let nav = document.createElement("ul");

/*
Creates an Li for the Dom.
expects list of classes (strink)
returns newElement appended to Nav
*/
function createLi(classArray, linkText){
  let newLink = document.createElement("li");
  let aTag = document.createElement("a");
  aTag.setAttribute("href", "#");
  aTag.textContent = linkText;
  newLink.appendChild(aTag);
  for(let i = 0; i < classArray.length; i++){
    newLink.classList.add(classArray[i]);
  }
  newLink.classList.add(classArray);
  nav.appendChild(newLink);
}
createLi(["pull-left", "active"], "Home");
createLi(["pull-right"], "Contact");
createLi(["pull-right"], "About");
nav.classList.add("nav","nav-pills");

header.appendChild(nav);
body.insertBefore(header, script);





let bodyDiv = document.createElement("div");
bodyDiv.classList.add("col-sm-6", "col-sm-offset-3", "text-center");

function createTextElement(elementType, text) {
  let newElement = document.createElement(elementType);
  newElement.textContent = text;
  return newElement;

};
let h1 = createTextElement("h1", "Hello World");
let pTag = createTextElement("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

pTag.className = "text-justify";
bodyDiv.appendChild(h1);
bodyDiv.appendChild(pTag);
body.insertBefore(bodyDiv, script);
