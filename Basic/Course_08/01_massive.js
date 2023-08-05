// const names = ['Andrey', 'Kristina', 'Gleb'];
// names.push('Alina'); //add to the end
// names.unshift('Artem'); // add first
// names.shift(); //delite first
// const firtsName = names.shift();
// console.log(`Извлекаем первое имя из массива - ${firtsName}`);
// const lastName = names.pop();
// console.log(`Извлекаем последнее имя из массив - ${lastName}`);
// // delete names[1]; // delete by index
// const reverse = names.reverse();
// console.log(`имена в обратном порядке - ${reverse}`);
// const reversed = names.toReversed();
// console.log(`возвращает новый массив и не трансформирует старый - ${reversed}`);
// const letters = ['a', 'c', 'f', 'd', 'y', 'w'];
// const sort = letters.sort();
// console.log(`${sort} отсортированы по алфавиту трансформирует массив`);
// // toSorted - не траснформирует
// // toSpliced - не траснформирует
// console.log(names);

// const woman = 'Kristina';
// const index = names.indexOf(woman); // -1 если нет элемента
// console.log(index);
// console.log(names[index]);
// const newNames = names.with(index, 'Kristina!!!');
// console.log(names);
// console.log(newNames);

// const capitalNames = names.map(function (name) {
//   const newName = name + '!';
//   return newName;
// });

// console.log(names);
// console.log(capitalNames);

// console.log(names.includes('BBB'))
// console.log(names.indexOf('Kristina') !== -1)

const people = [
  { name: 'Andrey', budget: 14200 },
  { name: 'Kristina', budget: 35200 },
  { name: 'Gleb', budget: 22200 },
  { name: 'Anton', budget: 11500 },
];

// find element with bufget 22200

// let findPerson;

// for (let person of people) {
//   if (person.budget === 22200) {
//     findPerson = person;
//   }
// }

const findPerson = people.find(function (person) {
  //   if (person.budget === 11500) {
  //     return true;
  //   }
  return person.budget === 11500;
});

console.log(findPerson);

const finded = people.find((p) => p.budget === 14200);
console.log(finded);
const findedIndex = people.findIndex((p) => p.budget === 14200);
console.log(findedIndex);

const filtered = people.filter(function (p) {
  return p.budget > 15000;
});
console.log(filtered);

let sumBudget = 0;

filtered.forEach(function (p) {
  sumBudget = sumBudget + p.budget;
});

console.log(sumBudget)
