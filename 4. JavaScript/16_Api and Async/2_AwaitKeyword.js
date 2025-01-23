// Simulate an asynchronous operation with a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 5000); // Simulates a 5-second delay
    });
}

// Use async/await
async function getData() {
    console.log("Fetching data...");

    // The function pauses here until the Promise resolves
    const result = await fetchData();

    console.log(result);
    console.log("Data processing complete!");
}

// Call the async function
getData();