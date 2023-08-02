const names = ['Andrey', 'Kristina', 'Gleb'];
names.push('Alina'); //add to the end
names.unshift('Artem'); // add first
names.shift(); //delite first
const firtsName = names.shift();
console.log(`Извлекаем первое имя из массива - ${firtsName}`);
const lastName = names.pop();
console.log(`Извлекаем последнее имя из массив - ${lastName}`);
// delete names[1]; // delete by index
const reverse = names.reverse();
console.log(`имена в обратном порядке - ${reverse}`);
const reversed = names.toReversed();
console.log(`возвращает новый массив и не трансформирует старый - ${reversed}`);
const letters = ['a', 'c', 'f', 'd', 'y', 'w'];
const sort = letters.sort();
console.log(`${sort} отсортированы по алфавиту трансформирует массив`);
// toSorted - не траснформирует
// toSpliced - не траснформирует
console.log(names);

const woman = 'Kristina';
const index = names.indexOf(woman); // -1 если нет элемента
console.log(index);
console.log(names[index]);
const newNames = names.with(index, 'Kristina!!!');
console.log(names);
console.log(newNames);
