"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
//uppercase
let uppercase = "hello";
let upper = uppercase.toUpperCase();
console.log(upper);
//lowercase
let lowercase = "HELLO WORLD";
let lower = lowercase.toLowerCase();
console.log(lower);
//titlecase
let word = lowercase.split(" ");
let titlecase = " ";
for (let i = 0; i < word.length; i++) {
    titlecase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
}
;
console.log(titlecase);
