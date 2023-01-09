// lesson 21

const printMotto = () => {
    console.log("Winter is coming")
  }
  printMotto()

//   lesson 22

const run = () => {
    return 5; /* Функция возвращает значение и ее выполнение на этом заканчивается*/ 
    return 10;
  };
  
  // Что будет выведено на экран?
  console.log(run());

  const sayHurrayThreeTimes = () => {
    const word = 'hurray!';
    return `${word} ${word} ${word}`;
  }

  console.log(sayHurrayThreeTimes())

//   lesson 23


const truncate = (word, index) =>{
    return word.slice(0, index)+'...'
}

console.log(truncate('hello', 3))


const truncate2 = (text, length) =>{
return `${text.slice(0, length)}...`;
  return result;
}
console.log(truncate2('abcde', 3))

// lesson 24

const getHiddenCard = (card, num = 4) => {
    return '*'.repeat(num)+card.slice(12)
  }
console.log(getHiddenCard('1234123456789101',4))

const sleep = (card, num = 2) => {
    return `${'*'.repeat(num)}${card.slice(12, 16)}`
}

console.log(sleep('1234567887654321'))

// const getHiddenCard = (cardNumber, starsCount = 4) => {
//     const visibleDigitsLine = cardNumber.slice(12);
//     return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
//   };

//  lesson 25
// Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву строки к верхнему регистру
const capitalize = (text) =>{
    return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`
}

console.log(capitalize("hello!"))

const up =(text) => `${text[0].toUpperCase()}${text.slice(1)}`

console.log(up('abrakadabra'));
