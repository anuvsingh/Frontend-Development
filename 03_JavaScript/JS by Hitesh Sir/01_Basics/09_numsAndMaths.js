// +++++++++++++++++++++ NUMBERS +++++++++++++++++++++++
const score = 400
console.log(score);
console.log(typeof score);  //number

const balance = new Number(1500)
console.log(balance);
console.log(typeof balance);    //object
// You are creating a Number object using the new Number() constructor. This wraps the primitive number 1500 inside an object. 

console.log(balance.toString().length);
console.log(typeof balance);    //object
// JavaScript will automatically convert between primitives and objects when necessary (this process is called autoboxing), which can sometimes mask the differences between them. But when you explicitly create an object with new Number(), you’re opting into that object behavior.

console.log(balance.toFixed(2));

const otherNum = 123.8966   //try 12.8966 and 1123.8966 also

console.log(otherNum.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++ MATHS ++++++++++++++++++++++++
console.log(Math)

console.log(Math.abs(-5))   // negative & positive => positive

console.log(Math.round(5.67));
console.log(Math.ceil(3.01));
console.log(Math.floor(8.999));

console.log(Math.min(45, 12, 8, 98));
console.log(Math.max(45, 12, 8, 98));

console.log(Math.random()); //value will be always b/t 0 and 1
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)