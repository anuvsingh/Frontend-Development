function sayMyName() {  //function without parameters
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
}
sayMyName   // this line only takes reference
// sayMyName() // this line executes function


function addTwoNums(num1, num2) { //function with parameters
    return num1 + num2
}
console.log(addTwoNums(5, 10)); //when we call functions, the passed values are called arguments

console.log(addTwoNums(5, "a"));
console.log(addTwoNums(5, null));


function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
let user = loginUserMessage("Anubhav")

console.log(user);
console.log(loginUserMessage());
