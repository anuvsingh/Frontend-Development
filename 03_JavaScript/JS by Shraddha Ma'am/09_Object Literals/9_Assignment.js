/* 
Create a program that generates a random number representing a dice roll. [The number should be between 1 and 6].
*/
let dice = Math.floor(Math.random() * 6) + 1
console.log(dice)

// Create an object representing a car that stores the following properties for the car: name, model, color. Print the car’s name.
let carInfo = {
    name: "Ford Mustang",
    model: "GT 1969",
    color: "Black & White"
}
console.log(carInfo.name)

// Create an object Person with their name, age and city. Edit their city's original value to change it to "New York". Add a new property country and set it to the United States.
let Person = {
    name: "Anubhav",
    age: 21,
    city: "Ballia"
}
console.log(Person)
Person.city = "New York"
Person.country = "United States"
console.log(Person)