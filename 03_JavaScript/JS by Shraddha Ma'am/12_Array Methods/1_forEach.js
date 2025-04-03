// arr.forEach(some function definition or name); - for all elements of array now the definition or name of the function will be applied.
let arr = [1, 2, 3, 4, 5];

function print(el) {
    console.log(el)
}
arr.forEach(print)

// OR

arr.forEach(function(el) {
    console.log(el)
});