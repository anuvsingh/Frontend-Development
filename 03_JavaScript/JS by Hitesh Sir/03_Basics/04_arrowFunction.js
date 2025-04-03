/********************* this Keyword **********************/
const user = {
    username: "anubhav",
    price: "999",
    
    // this means current context
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "arpit"
// user.welcomeMessage()

// console.log(this);  // reference to null object -> {}

function chai() {
    let username = "anubhav"
    console.log(this.username); //undefined
    console.log(this);
}
// chai()


/****************** arrow Function *********************/
const coffee = () => {
    let username = "anubhav"
    console.log(this.username); //undefined
    console.log(this);  // reference to null object -> {}
}
coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2   //implicit return
// }
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)    //explicit return

console.log(addTwo(5, 10));

const obj = () => ({username: "anubhav"})
console.log(obj());
