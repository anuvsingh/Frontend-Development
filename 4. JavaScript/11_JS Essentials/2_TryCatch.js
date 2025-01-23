// TRY statement allows you to define a block of code to be tested for errors while it is being executed.
// CATCH statement allows you to define a block of code to be executed, if an error occurs in the try block.

try {
    console.log(a)
} catch (err) {
    console.log("Variable not Defined")
    console.log(err)
}