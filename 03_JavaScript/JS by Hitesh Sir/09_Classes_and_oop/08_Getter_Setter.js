// getters and setters are special methods that allow you to define how an object's properties are accessed and modified. They are used within objects and classes to control access to private data.

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}anubhav`
    }

    set password(value){
        this._password = value
    }
}

const anubhav = new User("anubh@v.ai", "abc")
console.log(anubhav.email);

// Object - getters and setters
const Users = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(Users)
console.log(tea.email);