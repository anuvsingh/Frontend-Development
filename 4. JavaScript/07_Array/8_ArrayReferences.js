// Array references are different so with the same values if we compare it can give false

console.log("name" == "name")
console.log("name" === "name")

// Read the error showing in line 8 and 10
console.log([1] == [1])
console.log([1] === [1])
console.log([] == [])
console.log([] === [])

let arr = ['a', 'b']
let arrCopy = arr
console.log(arr)
console.log(arrCopy)
arrCopy.push('c')
console.log(arr)
console.log(arr == arrCopy)