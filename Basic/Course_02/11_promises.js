
// const promise = new Promise ( (resolve, reject) => {
//     setTimeout(() => {
//         resolve('Sucsess')
//     }, 1000)
// })
// promise.then(data => console.log(data))

const delay = ms => new Promise(((resolve, reject) =>{
    setTimeout(() => resolve(`Done! ${ms}`), ms)
}))

// delay(1000).then(data => delay(500))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Finally'))

// async function asyncDelay() {
//     const data = await delay(2000)
//     console.log(data)
// }

// asyncDelay()

// all promises
Promise.all([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))
// fastest
Promise.race([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))