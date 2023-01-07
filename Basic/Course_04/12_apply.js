// apply

// func.apply(context, [arg1, arg2, arg3, ...])

function sum(a, b) {
    return a + b
}
 const result = sum.apply(null, [2, 4])

 console.log(result);

 function summa(){
    for(var i=0, res = 0; i<arguments.length; res+=arguments[i++]);
        return res;
 }

 const test = [1, 3, 5]
//  console.log(summa(1, 2, 3, 4, 5, 6, 6, 7, 8))
 console.log(summa.apply(null, test))


 Math.max(22, 222, 2)
 console.log(Math.max(22, 222, 2));
 let array = []

 array.push(3)
 array.push(33)
 array.push(333)

console.log(Math.max(array));

console.log(Math.max.apply(null, array));



