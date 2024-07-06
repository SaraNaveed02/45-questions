"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function called make_shirt() that accepts a size and the text of a message that should be printed 
// on the shirt. The function should  print a sentence summarizing the size of the shirt and the message printed 
// on it. Call the function.
function shirt(size, message) {
    console.log(`I am making a ${size.toLowerCase()} T-shit with the message ${message}`);
}
shirt("medium", "HelloWorld");
