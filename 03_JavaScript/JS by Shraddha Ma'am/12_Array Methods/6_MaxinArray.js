let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2]

let result = nums.reduce( (max, el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
})
console.log(result)