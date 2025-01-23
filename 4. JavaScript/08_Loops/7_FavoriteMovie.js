const favMovie = "Avataar"

let guess = prompt("Guess my Favorite Movie ?")

while ((guess != favMovie) && (guess != "Quit")) {
    guess = prompt("Wrong Guess! Try Again...")
}

if (guess == favMovie) {
    alert("CONGRATULATION...You Win")
} else {
    alert("You QUIT...You LOSE!!!")
}