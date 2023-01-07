function setAlphabet() {
    console.log(typeof arguments);
    let arg = []
    for(let i=0; i<arguments.length; i++){
        arg[i]=arguments[i]
    }
    console.log(arg.concat(['f', 'g']))
    console.log(arg);
}

setAlphabet('a', 'b', 'c', 'd', 'e')