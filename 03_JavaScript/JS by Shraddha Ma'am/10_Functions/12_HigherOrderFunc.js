// Higher Order Function
/* 
A function that does one or both:
- takes one or multiple functions as arguments
- returns a function
*/
function multipleGreet(func, n) {
    for (let i=1; i<=n; i++) {
        func();
    }
}
let greet = function() {
    console.log("hello")
}
multipleGreet(greet, 5)


// Returns a Function
function oddEvenTest(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n % 2 == 0));
        }
    } else if(request == "even") {
        return function(n) {
            console.log((n % 2 == 0));
        }
    } else {
        console.log("Wrong Request")
    }
}
let request = "odd"
let func = oddEvenTest(request)
console.log(func)