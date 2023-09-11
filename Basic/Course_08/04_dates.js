console.log(new Date());

const now = new Date();
const start = new Date(1000 * 60 * 60 * 24 * 365);
const date = new Date(2011, 0, 4);
console.log(date);
console.log(start);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
