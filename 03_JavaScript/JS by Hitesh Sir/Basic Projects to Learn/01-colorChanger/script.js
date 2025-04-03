const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "grey") {
            body.style.background = e.target.id
        } else if (e.target.id === "yellow") {
            body.style.background = e.target.id
        } else if (e.target.id === "red") {
            body.style.background = e.target.id
        } else if (e.target.id === "blue") {
            body.style.background = e.target.id
        } else if (e.target.id === "green") {
            body.style.background = e.target.id
        } else {
            body.style.background = "white"
        }
    }) 
});
