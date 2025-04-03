// Users enters a max number and then tries to guess a random generated number between 1 to max.
const max = prompt("Enter the Max Number")
const random = Math.floor(Math.random() * max) + 1
let guess = prompt("Guess the Number")

while (true) {
    if (guess == "quit") {
        console.log("User Quit")
        break;
    }
    if (guess == random) {
        console.log("You are Right...Congrats!!!")
        break;
    } else {
        guess = prompt("WRONG..Try Again!!")
    }
}