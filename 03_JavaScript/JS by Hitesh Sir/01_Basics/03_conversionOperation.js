let score = "33abcd"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)  

//NaN - not a number
// "33" => 33 -> number type
// "33abc" => NaN -> number type
// true => 1; false => 0 -> number type

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false2
// "anubhav" => true

let someNumber = 100

let stringNum = String(someNumber)
console.log(stringNum)
console.log(typeof stringNum)