// SetInterval ki individual id hoti hai.
let id = setInterval(() => {
    console.log("I am Iron Man")
}, 3000);
console.log(id)

let id2 = setInterval(() => {
    console.log("I am Thanos")
}, 2000);
console.log(id2)

// To stop SetInterval we use clearInterval
clearInterval(id)