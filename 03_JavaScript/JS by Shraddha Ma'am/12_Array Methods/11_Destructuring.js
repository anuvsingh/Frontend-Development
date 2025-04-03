// Storing values of array into multiple variables
let names = ["tony", "bruce", "steve", "peter"]
let [winner, runnerup, second, third] = names
console.log(winner, runnerup);
console.log(second, third);

let nums = [25, 55, 65, 100]
let [a, b] = nums
console.log(a, b);

const student = {
    name: "Anubhav",
    class: 10,
    age: 45,
    subjects: ["hindi", "english", "math", "science", "sst"],
    username: "anubhav21",
    password: "12345"
}
const {username: user, password: pass} = student
console.log(user, pass)