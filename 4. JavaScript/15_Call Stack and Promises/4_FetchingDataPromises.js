function fetchData() {
    return new Promise((resolve, reject) => {
        let dataFetched = true; // Simulating a condition
        if (dataFetched) {
            resolve("Data fetched successfully!");
        } else {
            reject("Failed to fetch data.");
        }
    });
}

// Using the Promise
fetchData()
    .then((data) => {
        console.log(data); // Output: "Data fetched successfully!"
    })
    .catch((error) => {
        console.error(error); // Output: "Failed to fetch data."
    })
    .finally(() => {
        console.log("Operation completed."); // Executes regardless of success or failure
    });
