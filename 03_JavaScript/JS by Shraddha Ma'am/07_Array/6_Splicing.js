// splice - removes/replaces/add elements in place
// splice(start: number, deleteCount: number, ...items: string[]);

let colors = ["red", "yellow", "blue", "orange", "pink", "white"]

console.log(colors.splice(4))
console.log(colors)

console.log(colors.splice(0, 1))
console.log(colors)

console.log(colors.splice(0, 1, "black", "grey"))
console.log(colors)