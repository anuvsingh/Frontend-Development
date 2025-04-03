let input = document.createElement("input")
let button = document.createElement("button")
button.innerText = "Click me"
document.querySelector("body").append(input)
document.querySelector("body").append(button) 

button.setAttribute("id", "btn")
input.setAttribute("placeholder", "username")

button.classList.add("btncolor")

let h1 = document.createElement("h1")
h1.innerHTML = "<u>DOM Assignment</u>"
document.querySelector("body").append(h1)
h1.classList.add("DomColor")

let para = document.createElement("p")
para.innerHTML = "Apna College <b>Delta</b> Practice"
document.querySelector("body").append(para)