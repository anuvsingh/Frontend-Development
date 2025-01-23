// getElementsById

// getElementsByClassName
let smallImages = document.getElementsByClassName("oldImg");
for (let i=0; i<smallImages.length; i++) {
    smallImages[i].src = "Assets/Spider-Man.png"
    console.log(`Value of Image no. ${i} is Changed`);
}

// querySelector
console.dir(document.querySelector("h1"))
console.dir(document.querySelector("#description"))