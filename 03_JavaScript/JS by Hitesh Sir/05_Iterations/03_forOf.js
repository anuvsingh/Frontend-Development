// for of

const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// India will not be print duplicates map is unique
// Also map will print in the insertion order
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// for-of cannot iterate Object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
console.log(myObject);

// myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }