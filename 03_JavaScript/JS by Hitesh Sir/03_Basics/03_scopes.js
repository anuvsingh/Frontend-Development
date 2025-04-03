// Curly braces is Scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);  //error
// console.log(b);  //error
console.log(c); //var is not scope bounded that is bad thing


// NESTED SCOPES
// Small childs can take ice-cream from Men but men cannnot take from child
function one() {
    const username = "Anubhav"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error

    two()
}

// one()

if (true) {
    const username = "anubhav"
    if (username === "anubhav") {
        const website = " singh"
        console.log(username + website);
    }
}
// console.log(username);   //error

// ++++++++++++++++++++++INTERESTING+++++++++++++++++++++++

console.log(addone(5)); //no error
function addone(num) {  //function
    return num + 1
}

// We call this HOISTING

// console.log(addTwo(5));  //error
const addTwo = function(num){   //expression function
    return num + 2
}
console.log(addTwo(5));