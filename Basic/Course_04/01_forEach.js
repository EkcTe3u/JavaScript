const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = []

array.forEach(function(elem){
    newArray.push(elem * 2)
})

console.log(newArray)
let newArraySum = 0

array.forEach(function(elem){
    newArraySum += elem
})

console.log(newArraySum)