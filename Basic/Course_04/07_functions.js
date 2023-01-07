console.log(sum(1, 2));

// function declaration
function sum(a, b){
    return a + b;
}

// function exspreasion

const sum1 = function (a, b){
    return a + b;
}
// only after

console.log(sum1(2, 4));

// named function exspreasion

const func = function sum(a, b){
    return a + b;
}
function f(n){
    return n ? n * f(n - 1) : 1
}
console.log(f(5));