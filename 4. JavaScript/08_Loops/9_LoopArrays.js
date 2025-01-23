let fruits = ["mango", "apple", "banana", "litchi", "orange"]

// array index start from 0 - try to write i<=fruits.length
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i])
}


// Nested Loops with Nested Arrays
let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder women", "flash"]
];
for(let i=0; i<heroes.length; i++){
    console.log(`LIST #${i}`)
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j])
    }
}