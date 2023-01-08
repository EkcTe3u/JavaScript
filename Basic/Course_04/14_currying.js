function mul(a, b) {
    return a * b;
}

const double = mul.bind(null, 2)

console.log(double(2))
console.log(double(22))
console.log(double(222))

const triple = mul.bind(null, 3)

console.log(triple(3))
console.log(triple(33))
console.log(triple(333))

