// Returns the first index of occurrence of some value in string or gives -1 if not found.
let str = "ILoveJava"
console.log(str.indexOf("Love"))    //1 means found
console.log(str.indexOf("C"))    //-1 means not found
console.log(str.indexOf("o"))    //2 (only if 1 index)
console.log(str.indexOf(""))    //0 Why? - In JavaScript, when you use .indexOf("") on a string, it searches for an empty string. And here's the key rule: An empty string "" is considered to be present at every index in a string, including the start. But when indexOf("") is called, it returns the first valid index where the empty string can be found — and that is always 0.
