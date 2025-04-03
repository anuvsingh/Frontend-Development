// Action that can be performed on an object
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};

console.log(calculator)
console.log(calculator.add)
console.log(calculator.add(20, 30))
console.log(calculator.sub(50, 30))
console.log(calculator.mul(5, 10))