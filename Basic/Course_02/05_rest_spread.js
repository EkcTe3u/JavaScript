// Rest

//  function average(a, b,...args) {
//      return args.reduce((acc, i) => acc += i, 0) / args.length
//  }

//  console.log(average(10, 20, 30, 40, 50))

// Spread

const array = [1, undefined, 3, 5, 8, 13]

// console.log(...array);
// console.log(Math.max(...array));
// console.log(Math.min(...array));
// console.log(Math.max.apply(null, array));

// const fib = [1, ...array]
// console.log(fib);

// Destructuring

// const a = array[0]
// const b = array[1]
// const [a, b = 33,...c] = array
// console.log(a, b, c);
// const [a,,c] = array
// console.log(a, c);

// Onjects
const address = {
    country: "Russia", 
    town: "Saint-Petersbug",
    // street: "Lenina",
    concat: function() {
        return `${this.country}, ${this.town}, ${this.street}`
    }
}
// console.log(address.concat());

// const {country, town, street = "test", concat: addressConcat} = address

// console.log(country);
// console.log(addressConcat.call(address))
// console.log(street);

const {town, ...rest} = address

console.log(town);
console.log(rest);

const newAdress = {...address, street: "Test", code: 123}
console.log(newAdress);
