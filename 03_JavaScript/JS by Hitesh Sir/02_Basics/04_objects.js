// const tinderUser = new Object() //Singelton Object
const tinderUsers = {}  //Non-Singelton Object

tinderUsers.id = "123abc"
tinderUsers.name = "Anubhav"
tinderUsers.isLoggedIn = false

// console.log(tinderUsers);

// Nested Object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Anubhav",
            lastName: "Singh"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userFullname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj4 = {
    5: "e",
    6: "f"
}
// {} acts like empty target that fills all sources it's nice practice
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

