"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'large', message = 'HELLOWORLD') {
    console.log(`I am making  ${size.toLowerCase()} T-shit with the Message "${message}."`);
}
make_shirt();
make_shirt("Medium", "LOVE IT");
