function SetUserName(username) {
    this.username = username
}

function createUser(username, email, password) {
    SetUserName.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("anubhav", "onepiece@.com", "123")
console.log(chai);
