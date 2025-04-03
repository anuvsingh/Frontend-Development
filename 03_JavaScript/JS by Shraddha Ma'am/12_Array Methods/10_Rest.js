// Allows a function to take an indefinite number of arguments and bundle them in an array

function sum(...args) {
    return args.reduce( (add, el) => add + el)
}
console.log(sum(1, 2, 3, 4, 5));

function print(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log("You Gave us: " + args[i])
    }
}
console.log(print(1, 2, 3, 4, 5))