function hello() {
    console.log("Hello");
}
function demo() {
    hello();
}
demo();

// Visualizing the Call Stack
function one() {
    return 1;
}
function two() {
    return one() + one();
}
function three() {
    let ans = two() + one();
    console.log(ans);
}
three();