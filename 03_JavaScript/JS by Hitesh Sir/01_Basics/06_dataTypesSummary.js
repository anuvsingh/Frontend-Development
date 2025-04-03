/* 
Primitive DataType are of 7 types: 
    - String
    - Number
    - Boolean
    - Null
    - Undefined
    - Symbol
    - BigInt
*/
const score = 100
const scoreValue = 100.33
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)   // false

const bigNumber = 546546548797465132167n
console.log(bigNumber)  //BigInt

/* 
Non-Primitive DataType (Reference DataType) : 
    - Array
    - Objects
    - Functions
*/