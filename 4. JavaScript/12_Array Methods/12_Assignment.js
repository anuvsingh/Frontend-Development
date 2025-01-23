// Square and sum the array elements using the arrow function and then find the average of the array
let arr = [1, 2, 3, 4, 5]
const square = arr.map(el => {
    return el * el
})
console.log("Square of Elements:", square)
let sum = square.reduce( (acc, curr) => acc + curr)
console.log("Sum of Squares:", sum)
let avg = sum / arr.length
console.log("Average:", avg)

// Create a new array using the map function whose each element is equal to the original element plus 5
const newArr = arr.map(el => {
    return el + 5
})
console.log("Old Array:", arr);
console.log("New Array:", newArr)

// Create a new array whose elements are in uppercase of words present in the original array
let str = ["luffy", "zoro", "nami", "robin", "sanji"]
let uppercase = str.map( (el) => {
    return el.toUpperCase();
})
console.log("Uppercase String:", uppercase)