function sum(num) {
    if(num <= 0) {
        return 0;
    }
    return num + sum(num-1);
}

let n = 5
console.log(sum(n))