// Rest

function average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.lenght
}

console.log(average(10, 20, 30, 40))