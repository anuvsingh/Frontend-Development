## What is API ?
- API stands for *(Application Programming Interface)*. 
- It refers to a set of rules and protocols that allow different software applications to communicate with each other. 
- APIs enable JavaScript code to interact with web services, databases, browsers, and other applications.

## What is Promises ?
- It is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
- It helps to handle asynchronous tasks in a cleaner and more readable way compared to callbacks.

## Why Use Promises ?
- Before promises, JS used callback functions to handle asynchronous tasks, which often led to callback hell *(nested callbacks that make the code hard to read and maintain)*.
- Promises provide a structured way to handle asynchronous code.

## Handling Promises
- A promise can be in one of three states:
    - **Pending** - Initial state, neither fulfilled nor rejected.
    - **Fulfilled** - The operation was successful.
    - **Rejected** - The operation failed.

## Fetch API
- The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.
- With the Fetch API, you make a request by calling fetch(), which is available as a global function in both window and worker contexts. 
- You pass it a Request object or a string containing the URL to fetch, along with an optional argument to configure the request.

## fetch()
- The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response.
- You can then check the request status and extract the body of the response in various formats, including text and JSON, by calling the appropriate method on the response.
- The fetch() function will reject the promise on some errors, but not if the server responds with an error status like 404: so we also check the response status and throw if it is not OK.