// DOM Events can only do one word at a click time means multiple function cannot be implemented.
let btns = document.querySelectorAll("button")
/*
for(let btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("You hovered a button")
    }
}
*/
function sayHello() {
    alert("Hello 😊")
}
function sayError() {
    alert("Error...!!!")
}

// Event Listener can do multiple function runs at a time.
for (let btn of btns) {
    btn.addEventListener("click", sayHello)
    btn.addEventListener("click", sayError)
}