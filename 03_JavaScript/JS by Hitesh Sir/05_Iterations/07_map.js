// Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => num + 10)
// console.log(newNums);

// Chaining function
const newNums = myNumbers
                        .map((num) => num * 10 )
                        .map( (num) => num + 1)
                        .filter( (num) => num >= 40)

console.log(newNums);
