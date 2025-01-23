// Check if all numbers in our array are multiples of 10 or not
let arr = [10, 100, 50, 1000, 70]
console.log(arr.every( (el) => (el % 10 == 0)))

// Create a function to find the min number in an array
let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2]
let result = nums.reduce( (min, el) => {
    if (el < min) {
        return el
    } else {
        return min        
    }
})
console.log(result);
