"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let Aliencolor = "yellow";
if (Aliencolor === "green") {
    console.log("player just earnd 5 points!");
}
else if (Aliencolor === "yellow") {
    console.log("player just earned 10 points.");
}
else if (Aliencolor === "red") {
    console.log("player just earned 15 points.");
}
Aliencolor = "green";
if (Aliencolor === "green") {
    console.log("player just earnd 5 points!");
}
else if (Aliencolor === "yellow") {
    console.log("player just earned 10 points.");
}
else if (Aliencolor === "red") {
    console.log("player just earned 15 points.");
}
Aliencolor = "red";
if (Aliencolor === "green") {
    console.log("player just earnd 5 points!");
}
else if (Aliencolor === "yellow") {
    console.log("player just earned 10 points.");
}
else if (Aliencolor === "red") {
    console.log("player just earned 15 points.");
}
