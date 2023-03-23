'use strict';

const tea = true;
const juice = true;

const vodka = false;
const beer = false;

const goodDrinks = tea && juice; // true
const badDrinks = vodka && beer; // false
const badMix = vodka && juice; // false

console.log('...Logical operator AND (&&)...');

console.log('Mix of Tea AND Juice is ' + goodDrinks);
console.log('Mix of Vodka AND Beer is ' + badDrinks);
console.log('Mix of Vodka AND Juice is ' + badMix);

const engine1 = true;
const engine2 = false;

const fly = engine1 || engine2; // true

console.log('...Logical operator OR (||)...');

console.log('The first engine works? - ' + engine1);
console.log('The second engine works? - ' + engine2);
console.log('Is the plane still flying? - ' + fly);

const happy = true;

const mood = !happy; // false

console.log('...Logical operator NOT (!)...');

console.log('Is he happy? - ' + mood);
