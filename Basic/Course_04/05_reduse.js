const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -54]
let newArray = [[0 , 1], [2, 3], [4, 5]]

const summaArray = array.reduce(function(sum, elem){
    return sum += elem
}, 111)
// , 111 default = array[0]
console.log(summaArray);

const summaArray2 = newArray.reduce(function(sum, elem){
    return sum.concat(elem)
})
console.log(summaArray2);
