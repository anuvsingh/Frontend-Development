const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
// for-in can iterate Object
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
    // console.log(programming);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// Map are not iterable through for-in
for (const key in map) {
    // console.log(key);
    // console.log(map);
    // console.log(map[key]);
}