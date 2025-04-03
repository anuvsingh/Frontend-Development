// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Anubhav",
    [mySym]: "myKey1",
    age: 20,
    location: "Varanasi",
    email: "anubhav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser);
console.log(typeof JsUser);

console.log(JsUser.email);
// OR
console.log(JsUser["email"]);   //it's best
console.log(JsUser[mySym]); //Symbol data type

JsUser.email = "anuv@mymail.com"
console.log(JsUser);

// Object.freeze(JsUser);  //it will freeze JsUser means you can't manipulate
JsUser.location = "Ballia"
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
