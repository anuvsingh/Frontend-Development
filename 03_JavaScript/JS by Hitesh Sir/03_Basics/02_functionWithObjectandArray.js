// ...(triple dots) -> rest operator and spread operator
// What we have to call this operator depends when we are using it
function calculateCartPrice(...num1) {  // rest operator
    return num1
}
console.log(calculateCartPrice(5, 23, 45, 200, 5000));

const user = {
    username: "Anubhav",
    price: 19999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    username: "Stark",
    price: 100000000
})

const myNewArray = [200, 100, 900, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 1000, 10, 50]));