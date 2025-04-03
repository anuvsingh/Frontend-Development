## Call Stack
- It is a mechanism that manages function execution in a program. 
- It follows the LIFO (Last In, First Out) principle, meaning the last function pushed onto the stack is the first one to be popped off.

## Js is Single Threaded
- Meaning it executes one task at a time in a sequential order. 
- This is due to its event loop mechanism and its use as a language optimized for web applications, where single-threaded behavior ensures simplicity and consistency.
- There are two types of operations: 
    - **Synchronous:** Tasks are executed one after the other in a single-threaded manner.The program waits for the current task to finish before moving to the next one.
    - **Asynchronous:** Tasks to be executed without waiting for a previous task to finish.These operations often rely on callbacks, Promises, or async/await.

## Callback Hell
- Callback hell occurs when callbacks are nested within callbacks in a way that makes the code difficult to read, understand, and maintain. 
- It often arises when performing asynchronous tasks, such as fetching data from an API, reading files, or interacting with databases, where each subsequent task depends on the result of the previous one.

## Promises
- The PROMISE object represents the eventual completion or failure of an asynchronous operation and its resulting value.
- It represents a value that may be available now, or in the future, or never.
- It has 3 states: 
    - **Pending**- The initial state, neither fulfilled nor rejected.
    - **Fulfilled**- The operation was successful.
    - **Rejected**- The operation failed.