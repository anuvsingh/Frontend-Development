// Write a JavaScript function that returns array elements larger than a number.
let array = [4, 2, 10, 8, 7, 6]
let n = 5
function larger(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num < arr[i]) {
            console.log(arr[i])
        }
    }
}
larger(array, n)

// Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”
let str = "abcdabcdefgggh"
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i]
        if (ans.indexOf(currChar) == -1) {
            ans += currChar
        }
    }
    return ans
}
console.log(getUnique(str))

// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
let list = ["Australia", "Germany", "USA", "India"]
function longest(list) {
    let ansIdx = 0;
    for(let i=0; i<list.length; i++) {
        let ansLen = list[ansIdx].length;
        let currLen = list[i].length
        if(currLen > ansLen) {
            ansIdx = i
        }
    }
    return list[ansIdx]
}
console.log(longest(list))

// Write a JavaScript function to count the number of vowels in a String argument
let name = "anubhav"
function vowels(str) {
    let count = 0
    for(let i=0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++;
        }
    }
    return count;
}
console.log(vowels(name))