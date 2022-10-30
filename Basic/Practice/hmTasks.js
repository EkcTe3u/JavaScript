//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let x = 2;
let n = 0
while(n <= 10){
    rez = x**n
    n = n + 1;
}
console.log(rez)


// //1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
function myfunc(n) {    
    return y = x**n
    n= n + 1
}
console.log(myfunc(10))
// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let stroka = ":)"
let kolstrok = 0
let rezult2 = ''
while(kolstrok <= 5){
    console.log(rezult2)
    rezult2=rezult2 + stroka
    kolstrok = kolstrok + 1
}
// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)
function smile(strokA, kolvo) {
    let z = 0
    let rezult3 = ''
    while(z <= kolvo){
        console.log(rezult3)
        rezult3+=strokA
        z = z + 1
    }
}
smile(';)', 5)
