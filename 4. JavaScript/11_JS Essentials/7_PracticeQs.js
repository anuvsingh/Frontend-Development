// Write an arrow function that returns the square of a number 'n'
const square = (n) => (
    n*n
)
console.log(square(5))

// Write a function that prints anything 5 times at intervals of 2s each.
let count = 0
let id = setInterval(() => {
    console.log("I am Monkey D Luffy")
    count++
    if (count == 5) {
        clearInterval(id)
    }
}, 2000);