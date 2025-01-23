/* 
    for(element of collection) {
        do something
    }
*/
let fruits = ["miss ayese", "nebula", "black widow", "wanda", "wonder woman"]
for(fruit of fruits) {
    console.log(fruit)
}

for(char of "theavengers") {
    console.log(char)
}

// Nested for-of Loop
let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder women", "flash"]
];
for(list of heroes) {
    for(hero of list) {
        console.log(hero)
    }
}