"use strict";
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color
// and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green.
// If it is, print a message that the player just earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
//• Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.)
let AlienColor = "green";
if (AlienColor === "green") {
    console.log("player just earnd 5 points!");
}
AlienColor = "red";
if (AlienColor === "green") {
    console.log("player you just earnd 5 points");
}