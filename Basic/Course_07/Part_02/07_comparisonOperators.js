'use strict';

const city = 'Kiev';
const year = 988;
const flag = true;

const sameCity = 'Kiev';
const nextYear = 989;

console.log('\n[ === ]\n');

console.log(city === 'Kiev' ? 'city = Kiev' : 'city ≠ Kiev'); // условие ? true : false
console.log(year === 988 ? 'year = 988' : 'year ≠ 988');
console.log(flag ? 'flag = true' : 'flag = false');

console.log(city === sameCity ? 'city = sameCity' : 'city ≠ sameCity');
console.log(year === nextYear ? 'year = nextYear' : 'year ≠ nextYear');

console.log('\n[ !== ]\n');

console.log(city !== sameCity ? 'city ≠ sameCity' : 'city = sameCity');
console.log(year !== nextYear ? 'year ≠ nextYear' : 'year = nextYear');

console.log('\n[ >=, >, <=, < ]\n');

console.log(year < nextYear ? 'year < nextYear' : 'year >= nextYear');
console.log(year <= nextYear ? 'year <= nextYear' : 'year > nextYear');
console.log(year > nextYear ? 'year > nextYear' : 'year <= nextYear');
console.log(year >= nextYear ? 'year >= nextYear' : 'year < nextYear');
