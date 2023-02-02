const helloWorld = () => {
    // console.log("Hello World!");
}
helloWorld()

const hl =()=> "Hello World!!";
// console.log(hl())

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
// console.log(digitalRoot(132189));

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

// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))
// console.log(highAndLow('1 2 3'))
// console.log(typeof(highAndLow('1 9 3 4 -5')))


// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
// Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
//  For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, 
// but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
    const newArray = this.split(" ");
    arr = []
    newArray.forEach(element => {
            arr.push(element[0].toUpperCase()+element.slice(1));            
    });
    return arr.join(' ');
  };
//   console.log(String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real"));

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l){ 
    return l.filter(Number.isInteger);
}
console.log(filter_list([1, 'a', 'b', 0, 15]));