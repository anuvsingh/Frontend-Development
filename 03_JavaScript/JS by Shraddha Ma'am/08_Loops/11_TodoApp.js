/* 
        TODO APP
    - list: to show all todos
    - add: to add a note
    - delete: to delete a task
    - quit: to exit the todo
*/

let todo = []
let req = prompt("Please Enter your Request")

while (true) {
    if (req == "quit") {
        console.log("Quitting App")
        break;
    }

    if (req == "list") {
        console.log("---------------")
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i])
        }
        console.log("---------------")
    } else if (req == "add") {
        let task = prompt("Please Enter task you want to add")
        todo.push(task)
        console.log("Task Added")
    } else if (req == "delete") {
        let idx = prompt("Please Enter Task Index")
        todo.slice(idx, 1)
        console.log("Task Deleted")
    } else {
        console.log("Wrong Request")
    }

    req = prompt("Please Enter your Request")
}