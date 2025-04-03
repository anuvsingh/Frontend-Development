## Async Functions
- An async function in JavaScript allows you to work with asynchronous code in a cleaner and more readable way using the **async** and **await** keywords.
- An async function always returns a Promise.
- **Async Keyword**
    - It is used to declare an asynchronous function.
    - When you use the async keyword before a function, the function automatically returns a Promise and enables the use of the await keyword within it.
- **Await Keyword**
    - Pauses the execution of its surrounding async function until the promise is settled(resolve or rejected).

## API
- **A**pplication **P**rogramming **I**nterface
- It is a set of rules and tools that allow different software applications to communicate with each other.
- **Ex:** When you use Spotify, it interacts with backend server via an API to fetch songs, playlists and recommendation.
- We will use web Api.
- APIs return data in the form of *JSON* file.

## JSON
- **J**ava**S**cript **O**bject **N**otation
- It is a data format for storing and exchanging data.
- It is commonly used for exchanging data between a server and a client, such as in APIs or web applications.

- **Accessing Data from JSON**
    - *JSON.parse(data)* - to parse a string data into a JS object.
    - *JSON.stringify(json)* - to parse a JS object data into JSON.

## AJAX
- *A*synchronous *J*avaScript *A*nd *X*ML
- It allows web pages to update and exchange data with a server asynchronously without requiring the entire page to reload.