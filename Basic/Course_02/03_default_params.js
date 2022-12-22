const defaultB = 10
const getDefault = c => c * 2
function compute(a = 15, b = getDefault(a)) {
    return a + b
}

console.log(compute())