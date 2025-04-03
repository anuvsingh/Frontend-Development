const myArr = [1, 2, 3, 4, 5, 6, true, "Anubhav"]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(4, 3, 2, 1)

// console.log(myArr);
// console.log(myArr[2]);
// console.log(myArr.length);

const arr = [1, 2, 3, 4, 5]

console.log(arr.push(10));  //add value
console.log(arr.push(6));
console.log(arr);
console.log(arr.pop()); //delete last value
console.log(arr);

arr.unshift(0)
console.log(arr);   //add value at start

console.log(arr.includes(5));

const newArr = arr.join()

console.log(newArr);
console.log(typeof newArr);

console.log("A", arr)
const myn1 = arr.slice(1, 3)
console.log(myn1);

console.log("B", arr)
const myn2 = arr.splice(1, 3)   // it manipulates original array
console.log(myn2);

console.log("C", arr)