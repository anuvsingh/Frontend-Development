// ARRAY METHODS
// Push: add to end
// Unshift: add to start
// Pop: delete from end and returns it
// Shift: delete from start and return it

let pirates = ["Luffy", "Zoro", "Sanji"]
console.log(pirates)    //print
console.log(pirates.push("Robin"))  //returns 4
console.log(pirates)    //print updated one
console.log(pirates.unshift("Nami"))    //returns 5
console.log(pirates)    //print updated one
console.log(pirates.pop())  //returns Robin
console.log(pirates.shift())    //returns Nami
console.log(pirates)    //print updated one

let colors = ["red", "yellow", "blue"]
// indexOf Method - returns index of something
console.log(colors.indexOf("yellow"))
console.log(colors.indexOf("green"))

// includes Method - search a value present(true) or not(false)
console.log(colors.includes("red"))
console.log(colors.includes("purple"))