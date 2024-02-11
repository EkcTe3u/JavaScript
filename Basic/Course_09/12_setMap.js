const goods = ['Laptop', 'Keyboard', 'Mouse'];
const basket = new Set(goods);
console.log(basket);
for (const name of goods) {
  console.log(`Element: ${name}`);
}
basket.add('Bag');
basket.add('Mouse'); //дубликаты не добавляются

console.log(basket);

{
  const order = new Set(['Laptop', 'Keyboard']);
  const stock = new Set(['Mouse', 'Keyboard']);

  const basket = new Set([...order].filter((item) => !stock.has(item)));
  const basket2 = new Set([...order].filter((item) => stock.has(item)));
  console.log(basket);
  console.log(basket2);
}
// Хэш таблица
{
  const electronics = new Map();
  electronics.set('Laptop', 1500);
  electronics.set('Keaboard', 100);
  console.log(electronics);
  const goods = new Map();
  goods.set('Laptop', 1500);
  goods.set('Keaboard', 100);
  for (const [key, value] of goods) {
    console.log(`Price of ${key} is ${value}`);
  }
}
