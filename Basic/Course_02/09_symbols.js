const symbol = Symbol('demo')
const other = Symbol('demo')
// console.log(symbol);
// console.log(other);
// console.log(other === symbol);

const obj = {
    name: 'Andrey',
    demo: 'DEMO',
    [symbol]: 'meta'
}
// console.log(obj);
for (let key in obj){
    console.log(key);
}