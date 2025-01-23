// Arrow functions allow us to write shorter function syntax
// Arrow function are nameless function
// Syntax: const function = (arg1, arg2, ...) => {function definition}
const sum = (a, b) => {
    console.log(a+b)
}
sum(5, 7)

const print = () => {
    console.log("Hello JAVA")
}
print();

// Implicit return
const mul = (a, b) => (
    a * b
)
console.log(mul(5, 8))