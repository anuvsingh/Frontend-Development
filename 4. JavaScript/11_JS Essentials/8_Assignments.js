// Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayAverage = (arr) => {
    let total = 0
    for(let number of arr) {
        total += number
    }
    return total / arr.length;
};
let arr = [1, 2, 3, 4, 5, 6]
console.log(arrayAverage(arr))

// Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
const isEven = (num) => {
    if (num % 2 == 0) {
        console.log(`${num} is Even Number.`)
    }
    console.log(`${num} is Odd Number.`)
};
isEven(5)