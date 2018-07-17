// const captains = [`Kirk`, `Picard`, `Sisko`, `Janeway`, `Lorca`];
// captains.forEach(captain => { // adding a "," and adding "index" into the parentisies of both captains makes them back into indexs. Ex (captain, index)
//   console.log(captain);//does not have to be "index" as long as another variable is there.
// })

//FOR ... OF
// const captains = [`Kirk`, `Picard`, `Sisko`, `Janeway`, `Lorca`];
// for(let captain of captains) {} // first variable is nambed whatever I want. Second value must be an array.
//   console.log(`Hellow Captain ${captain}`);


// //for..in is for objects
// const me = {
//   firstName: 'J.R',
//   lastName: 'Wiggum',
//   age: 40
// }
//
//
// for(let property in me){
//   console.log(me[prperty]);
// }




// for (let i = 0; i < 11; i++) {
//   console.log(`This number ${i*10}`);
// }
//
// const colors = ["blue", "purple", "green", "red"];
// for(let index = 0; index < colors.length; index++){
//   console.log(colors[index]);
// }



// let counter = 0
// while(counter < 5) {
//   console.log(`before ${counter}`);
//   counter++;
//   console.log(`after ${counter}`);
//
// }









// let myArray=[]; //Most basic for of myArray
// let favoriteFoods = ["pizza", "hamburgers", "french fries"];
// let allTheThings = ["string", 23, ["stuff"], {}, false]; //arrays are places were information is stored. only takes the 6 variable? types.
// //arrays start at zero and count up. The legth of the allTheThings array is 4 but is counts from 0-3.
// console.log(favoriteFoods[1]); //prints "hamburgers"
//
// //alert(favoriteFoods.length); //gives many members
//
// let aboutMe = ["avenger", 7, true, 2010];
// console.log(aboutMe);
// console.log(aboutMe.length);
//
// //check if this is an arrays
// console.log(Array.isArray(aboutMe), typeof aboutMe);
//
// aboutMe.push("Maggie Gyllenhaal");
// console.log(aboutMe);
//
// //unshift
// aboutMe.unshift("duck");
// console.log(aboutMe);
//
// //pop
// let lastMember = aboutMe.pop();
// console.log(lastMember);
//
// // //splice
// // let removed = aboutMe.splice(2); //1 argument: beginning with that index, remove everything after.
// // console.log(aboutMe, removed); // removed items were saved by variable "removed".
//
// // console.log(aboutMe, "BEFORE");
// // aboutMe.splice(1, 2);//2 arguments starting at the firest number (index) and INCLUDING  it, remove the second number about of items (count).
// // console.log(aboutMe, "AFTER");
// console.log(aboutMe, "Before");
// aboutMe.splice(3, 1, ["I got added!"]); //negative number starts at the end of an array you want to splice.
// console.log(aboutMe, "After");
//
// aboutMe.splice(-3, 1);
//

//slice
// let copy = aboutMe.slice(1, 4);
// console.log(copy, aboutMe);

//IndexOf
// let removeIndex = aboutMe.indexOf(7); //returns the indes of 42 in our aboutMe.
// console.log(removeIndex);
// aboutMe.splice(removeIndex, 1);
// console.log(removeIndex);

// let myNums = [1, 2, 3, 4, 5];
// console.log(myNums.reverse());
//
// //Sort
// console.log(aboutMe, "Before");
// aboutMe.sort();
// console.log(aboutMe, "after");

// let multiDimensional = [["hello", 1], ["goodbye", 0]];
// console.log(multiDimensional[0][0], multiDimensional[1][0]); //use to access things in arrays that are in arrays
//
//

let favMovies = []
let movie1 =["Emporers new groove", "Kuzko"];
let movie2 =["Matrix", "Neo"];
let movie3 =["space balls", "Barf"];
let movie4 =["starwars", "Luke"];

let choice = prompt("name a movie")
favMovies.push(movie1, movie2, movie3, movie4);
console.log(favMovies);

for (var i = 0; i < favMovies.length; i++) {
  if(choice === favMovies[i][0]) alert(`${favMovies[i][0]}, ${favMovies[i][1]}`);

}
//
// let titles = [];
// titles.push(favMovies[0][0],favMovies[1][0],favMovies[2][0], favMovies[3][0]);
// alert(titles);
//
// let favAndLeast = [];
// favAndLeast.push(favMovies[0], favMovies[4]);
// console.log(favAndLeast);
// alert(favMovies.length);
