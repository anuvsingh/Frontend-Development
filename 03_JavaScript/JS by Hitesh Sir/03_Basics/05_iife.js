// Immediately Invoked Function Expressions (IIFE)

//we use iife to preserve from global scope pollution problem that is declaration

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// (function definition)() and second parenthesis is to call function

// at last we have to put the ; to tell iife that stop context of function

( (name) => {
    // unnamed IIFE
    console.log(`${name}DB CONNECTED`);
})("Mongo");