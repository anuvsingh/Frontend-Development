const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

marvel_heros.push(dc_heros) //it doesn't merges, it create nested array
console.log(marvel_heros);
console.log(marvel_heros[3]);

const heros = marvel_heros.concat(dc_heros)
console.log(heros);  // it creates new array and add the values to first array

const all_new_heros = [...dc_heros, ...marvel_heros]
console.log(all_new_heros); //best to add two arrays

console.log(Array.isArray("Anubhav"));
console.log(Array.from("Anubhav"));
