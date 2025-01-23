function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("First task completed"), 1000);
    });
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Second task completed"), 1000);
    });
}

// Chaining the promises
firstTask()
    .then((result) => {
        console.log(result); // Output: "First task completed"
        return secondTask();
    })
    .then((result) => {
        console.log(result); // Output: "Second task completed"
    })
    .catch((error) => {
        console.error(error);
    });
