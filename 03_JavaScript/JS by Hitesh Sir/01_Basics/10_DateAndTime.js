// JS Date object represent a single moment in time in a platform-independent format.
// It start beginning of January 1, 1970, UTC.

let myDate = new Date()
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2023, 0, 23)   //year, month(start from 0), date
console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);   //milliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));   //seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})