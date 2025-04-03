// Get Values
let student = {
    name: "Anubhav",
    marks: 94.4
}
console.log(student['name'])
console.log(student.marks)

// Js automatically converts objects keys to strings
// Even if we made the number as a key, the number will be converted to string.
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
}
console.log(obj)