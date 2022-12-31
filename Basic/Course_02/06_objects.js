const cityField = "city"
const job = 'QA Engineer'

const person = {
    age: 38,
    name: "Andrey",
    job,// job: job, если совпадают
    [cityField + Date.now()]: 'Saint-Petersburg',
    "country-live": "Russia",
    print: ()=> "Person",
    toString: function() {
        return Object
        .keys(this)
        .filter(key => key !== "toString")
        .map(key => this[key])
        .join(" ")
    }
}
    // console.log(person.toString())
    // console.log(person.print());
    // console.log(person);

    // Methods

    const first = {a: 1}
    const second = {b: 2}
    // сравнение на экваивалентность
    // console.log(Object.is(20, 10))

// // console.log(Object.assign(first, second))
// console.log(Object.assign({}, first, second))
// console.log(Object.assign({}, first, {
//     c: 2,
//     D: 3
// }))
// console.log(first);

const obj = Object.assign({}, first, {
    c: 2,
    D: 3
})

console.log(obj);
console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));