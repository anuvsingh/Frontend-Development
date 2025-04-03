// Value we pass to the function
/*
SYNTAX: function funcName(arg1, arg2, .....) {
    do something
} 
*/

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function reminder(a, b){
    return a % b;
}

let a = 20
let b = 5
console.log(add(a, b))
console.log(subtract(a, b))
console.log(multiply(a, b))
console.log(reminder(a, b))