// Object Literals
const user = {
    username: "anubhav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);  // user object
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);  // empty object


// Constructor Function
function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}
// if you don't give 'new' keyword, overwrite problem will come
// when you use new keyword, a empty new object is created -> constructor() call hota h new keyword ki wajah se aur copy ho jaata hai.
const userOne = new User("anubhav", 12, true)
const userTwo = new User("arpit", 0, false)
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);
