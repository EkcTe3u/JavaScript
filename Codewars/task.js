const helloWorld = () => {
    console.log("Hello World!");
}
helloWorld()

const hl =()=> "Hello World!!";
console.log(hl())

// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6


function digitalRoot(n) {
    if (n < 10){
    return n;
    }else{
        const massive = n.toString().split("");
        let b=0
        for(i = 0; i < massive.length; i++){
            b += +massive[i];
        }
        return digitalRoot(b);
    }
    
}
console.log(digitalRoot(132189));

    