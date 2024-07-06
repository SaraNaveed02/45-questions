"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to 
// each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
function show_magician(magicians) {
    magicians.forEach((magician) => {
        console.log(magicians);
    });
}
const magicianname1 = ["merlin", "houdini", "david"];
function make_great() {
    let name = "The great magicians";
    magicianname1.map((show_magicians) => {
        console.log(`${name} is ${magicianname1}`);
    });
}
show_magician(magicianname1);
make_great();
