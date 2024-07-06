"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time
let items;
function sandwich(items) {
    let person = [`A person wants a sandwich ${items}`];
    console.log(person);
}
sandwich("ketchup");
sandwich("tiki");
sandwich("onion");
