function strings(arr) {
    let result = ""
    for(let i=0; i<arr.length; i++) {
        result += str[i]
    }
    return result
}

let str = ["I", "am", "Monkey", "D", "Luffy"]
console.log(str)

console.log(strings(str))