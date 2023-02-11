// classes
class Person {
  constructor(userName, age, isMarried) {
    this.userName = userName;
    this.age = age;
    this.isMarried = isMarried;
  }

  sayHi(yourName) {
    console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
  }
}

// Теперь создадим новые объекты на основе класса person

const person1 = new Person("Марк", 30, false);
const person2 = new Person("Павел", 28, true);

console.log(person1);
console.log(person2);

// Они были созданы с указанными свойствами, плюс оба имеют методы которые были описаны в конструкторе

person1.sayHi("Юрий");
person2.sayHi("Елена");



// ================= DOM elements ================