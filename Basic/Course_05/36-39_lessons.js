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