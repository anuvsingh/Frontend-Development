// A variable defined outside a function can be accessible inside another function defined after the variable declaration.
// The opposite is NOT true.

function outerFunc() {  //outer function
    let x = 5
    let y = 6
    function innerFunc() {  //inner function
        console.log(x)
    }
    innerFunc();
}

outerFunc();