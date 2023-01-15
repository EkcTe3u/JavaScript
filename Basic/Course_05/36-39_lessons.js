// lesson 36

// Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. 
// n – задается на входе в функцию.

// Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

// const text = 'I never look back';
// // Каждый третий элемент
// makeItFunny(text, 3); // 'I NevEr LooK bAck'

const makeItFunny = (text, num) => {
        let i = ~~(text.length / num)
        i = ~~(text.length / i)
        while (text.length >= num){
            text = `${text.substring(0, num-1)}${text.substring(num-1, num).toUpperCase()}${text.substring(num, text.length)}`
            num += i
        }
        return text   
}


// const makeItFunny = (str, n) => {
//     let i = 0;
//     let result = '';
//     while (i < str.length) {
//       const current = str[i];
//       if ((i + 1) % n === 0) {
//         result = `${result}${current.toUpperCase()}`;
//       } else {
//         result = `${result}${current}`;
//       }
//       i++;
//     }
  
//     return result;
//   };
console.log(~~(5/2))
console.log(makeItFunny('I never look back', 3))
console.log(makeItFunny('hello', 2))

// const a = "abcdabcdabcd"
// let f = `${a.slice(0,3)}${a[3].toUpperCase()}${a.slice(4, a.length)}`
// console.log(f);

console.log('abc!abc abc'.substring(3,4))

// lesson 37

// Сэмвелл обнаружил, что его сообщения перехватываются в замке «Близнецы» и там читаются. Из-за этого их атаки перестали быть внезапными. 
// Немного подумав, он разработал программу, которая бы шифровала сообщения по следующему алгоритму. Она бы брала текст и переставляла 
// в нем каждые два подряд идущих символа.

// encrypt('move');   // 'omev'
// encrypt('attack'); // 'taatkc'
// encrypt('car!'); // 'ac!r'
 
// // Если число символов нечётное,
// // то последний символ остаётся на своём месте
// encrypt('go!'); // 'og!'

const encrypt = (text) => {
    if (text.length % 2 === 0) {
        let resultText = ''
        for (let i = 0; i < text.length; i += 2){
            resultText = `${resultText}${text[i+1]}${text[i]}`
        }
        return resultText
    }else {
        let resultText = ''
        for (let i = 0; i < text.length  ; i += 2){
            resultText = `${resultText}${text[i+1]}${text[i]}`
        }
        return resultText.replace('undefined', '')

    }
}

// const encrypt = (str) => {
//     let result = '';
//     for (let i = 0; i < str.length; i += 2) {
//       const nextSymbol = str[i + 1] || '';
//       result = `${result}${nextSymbol}${str[i]}`;
//     }
  
//     return result;
//   };

console.log(encrypt('move'))
console.log(encrypt('attack'))
console.log(encrypt('GO!'))
console.log(encrypt('omev'))
console.log(encrypt('taatkc'))
console.log(encrypt('ac!r'))


