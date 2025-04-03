// Reduce is used to iterate over an array and accumulate values into a single result. It executes a reducer function on each element of the array, returning a single value.

const myNums = [1, 2, 3]

let myTotal = myNums.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
}, 0)   // zero is basically the initial point for accumulator(acc)

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceTopay);

