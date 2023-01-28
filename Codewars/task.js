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

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number   
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"

function highAndLow(numbers){
    numbers = numbers.split(' ');
    let lowNumber = Number(numbers[0]);
    let highNumber = Number(numbers[0]);
    for(i = 0; i < numbers.length; i++) {
        if(lowNumber <= Number(numbers[i])){
            this.lowNumber = lowNumber;
        } else{
            lowNumber = numbers[i];
        }
        if(highNumber >= Number(numbers[i])){
            this.highNumber = highNumber;
        }
        else{
            highNumber = numbers[i];
        }
    }
    
    return `${highNumber} ${lowNumber}`;
}

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))
console.log(highAndLow('1 2 3'))
console.log(typeof(highAndLow('1 9 3 4 -5')))
