class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encrypyPassword() {
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("anubhav", "onepiece@.com", "123")
console.log(chai.encrypyPassword());
console.log(chai.changeUsername());


// BTS (behind the scenes)
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encrypyPassword = function() {
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());