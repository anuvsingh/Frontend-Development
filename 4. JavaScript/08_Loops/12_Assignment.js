// Write a JS program to delete all occurrences of element ‘num’ in a given array.
let arr = [1, 2, 3, 4, 5, 6, 2, 3]
let num = 2
for(let i = 0; i < arr.length; i++) {
    if(arr[i] == num) {
        arr.splice(i, 1)
    }
}
console.log(arr)

// Write a JS program to find the no of digits in a number.
let number = 287152;
let count = 0;
while (number != 0) {
    number = Math.floor(number / 10); // Reduce the number by dividing it by 10
    count++;
}
console.log(count);

// Write a JS program to find the sum of digits in a number.
let num2 = 287152
let sum = 0
while (num2 != 0) {
    digit = num2 % 10
    sum += digit
    num2 = Math.floor(num2 / 10)
}
console.log(sum)

// Print the factorial of a number
let num3 = 7
let fact = 1
for(let i=1; i<=num3; i++) {
    fact *= i
}
console.log(`Factorial of ${num3} is ${fact}`)

// Find the largest number in an array with only positive numbers.
let arr2 = [2, 3, 10, 100, 10, 89]
let largest = 0
for(let i = 0; i <= arr2.length; i++) {
    if (largest < arr2[i]) {
        largest = arr2[i]
    }
}
console.log(largest)