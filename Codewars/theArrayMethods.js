// Фильтрация чисел больше 5
const numbers = [1, 6, 3, 8, 2, 9];
// Вернуть массив чисел > 5 → [6, 8, 9]
const filteredArray = numbers.filter((value) => value > 5);
console.log(filteredArray);

// Удвоение всех элементов

const nums = [2, 4, 6];
const doubledArray = nums.map((val) => val ** 2);
console.log(doubledArray);

// Поиск первого четного числа

const arr = [1, 3, 5, 8, 9, 10];
// Найти первое четное → 8
const evenNumber = arr.find((value) => value % 2 === 0);
console.log(evenNumber);

// Проверка, все ли числа положительные

const arrayOfNumbers = [1, 2, -3, 4];
// Вернуть false
const result = arrayOfNumbers.every((value) => value > 0);
console.log(result);

// Сумма квадратов четных чисел
const arrNumbers = [1, 2, 3, 4, 5];
// 2² + 4² = 4 + 16 = 20
const sumOfSquares = arrNumbers
  .filter((value) => value % 2 === 0)
  .reduce((sum, current) => sum + current ** 2, 0);
console.log(sumOfSquares);

// Поиск самого длинного слова
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
// Вернуть 'strawberry'

// const longestWord = words.sort((a, b) => b.length - a.length)[0];

const longestWord = words.reduce(
  (longest, current) => (current.length > longest.length ? current : longest),
  ''
);
console.log(longestWord);

// Удаление дубликатов
const dubpicatedNumbers = [1, 2, 2, 3, 4, 4, 5];

const clearArray = [...new Set(dubpicatedNumbers)];
console.log(clearArray);
