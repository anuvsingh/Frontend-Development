// First Promise
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    setTimeout(function () {
        console.log('Async task is Completed');
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log("Promise Consumed");
})

// OR

// Second Promise
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(function () {
    console.log("Async 2 Resolved");
})

// Third Promise
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Anubhav", email: "anubhav@.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

// Fourth Promise
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false   //true will print reject code
        if (!error) {
            resolve({ username: "luffy", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log('The Promise is either Resolved or Rejected');
})

// Promise Five
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false   //true will print reject code
        if (!error) {
            resolve({ username: "Nami", password: "cat" })
        } else {
            reject('ERROR: Nami is wrong')
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR:", error);
//     }
// }

// getAllUsers()

// It will print first in the comparision of all the above functions
fetch('https://api.github.com/users/anuvsingh')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})