let array = [7, 9, 0, -2]
let n = 3;
console.log(array.slice(0, n))
console.log(array.slice(1, 4))

// Write a JavaScript program to check whether a string is blank or not.
let str = "  "
if (str.trim().length == 0) {
    console.log("String is Empty")
} else {
    console.log(str)
    console.log("String is NOT Empty")
}

// Write a JavaScript program to check whether the character at the given (character) index is lower case.
let myName = "AnuBhAvSinGh"
let idx = 3
if (myName[idx] == myName[idx].toLowerCase()) {
    console.log("Character is Lowercase")
} else {
    console.log("Character is not Lowercase.")
}

// Write a JavaScript program to strip leading and trailing spaces from a string.
let str2 = "  Hello  "
console.log(`Original String = ${str2}`)
console.log(`String without Spaces = ${str2.trim()}`)

// Write a JavaScript program to check if an element exists in an array or not.
let arr = ["hello", 'a', 23, 64, 99, -6]
let item = 64
if (arr.indexOf(item) != -1) {
    console.log("Element exists in Array")
} else {
    console.log("Element doesn't exist in Array")
}