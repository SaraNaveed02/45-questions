"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Guestarr = ["Tooba", "Maheen", "Alishba"];
let cannotattend = "Alishba";
console.log(cannotattend + " " + "can not make it,for dinner");
let newguset = "Maryam";
Guestarr[Guestarr.indexOf(cannotattend)] = newguset;
console.log(Guestarr);
Guestarr.map((name) => {
    console.log(`Dear ${name}, you are cordailly  invited to a dinner `);
});
