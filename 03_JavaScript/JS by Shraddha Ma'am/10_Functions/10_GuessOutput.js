let greet = "hello" //global scope

function changeGreet() {
    let greet = "namaste"   //function scope
    console.log(greet)
    function innerGreet() { //lexical scope
        console.log(greet)
    }
    innerGreet();
}

console.log(greet)
changeGreet();