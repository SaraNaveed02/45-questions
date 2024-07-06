"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. //Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
let Guestarr1 = ["Tooba", "Maheen", "Alishba"];
let cannotattend1 = "Alishba";
let newguest = "Maryam";
Guestarr1[Guestarr1.indexOf(cannotattend1)] = newguest;
Guestarr1.unshift("earj");
let middleguest1 = "areeba";
let middleindex1 = Guestarr1.length / 2;
Guestarr1.splice(middleindex1, 0, middleguest1);
Guestarr1.push("bisma");
// console.log(Guestarr1)
console.log("I can invite only two people to dinner");
while (Guestarr1.length > 2) {
    let removeguest = Guestarr1.pop();
    console.log(`Dear ${removeguest},you are not invited to the dinner`);
}
Guestarr1.map((item) => {
    console.log(`Dear ${item}, you are still  invited to a dinner `);
});
Guestarr1.pop();
Guestarr1.pop();
console.log(Guestarr1);
console.log(Guestarr1);
