"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner
let Guestarr2 = ["Tooba", "Maheen", "Alishba"];
let cannotattend2 = "Alishba";
let newguest1 = "Maryam";
Guestarr2[Guestarr2.indexOf(cannotattend2)] = newguest1;
Guestarr2.unshift("earj");
let middleguest2 = "areeba";
let middleindex2 = Guestarr2.length / 2;
Guestarr2.splice(middleindex2, 0, middleguest2);
Guestarr2.push("bisma");
// console.log(Guestarr2)
console.log(Guestarr2.length + " " + "people are invited to dinner.");
