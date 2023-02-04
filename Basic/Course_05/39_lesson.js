// Реализуйте функцию fib() и экспортируйте её по умолчанию. Функция вычисляет положительные числа Фибоначчи. Аргументом является порядковый номер числа, 
// нумерация чисел в последовательности начинается с нуля.

// Формула:

// f(0) = 0
// f(1) = 1
// f(n) = f(n-1) + f(n-2)

fib = (n) => {
    let fib_sum = 0;
    let fib1 = 0;
    let fib2 = 1;
    for(let i = 0; i< n - 1; i++ ){
        fib_sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib_sum;
    }
    return fib_sum;
}
console.log(fib(0));
console.log(fib(5));
console.log(fib(10));
const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// export default fib;


// Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:

// Если число делится без остатка на 3, то вместо него выводится слово Fizz
// Если число делится без остатка на 5, то вместо него выводится слово Buzz
// Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
// В остальных случаях выводится само число
// Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). Для простоты считаем, 
// что эти параметры являются целыми числами больше нуля. Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.


fizzBuzz = (begin, end) => {
    for (begin; begin <= end; begin ++){
        if (begin % 3 === 0 && begin % 5 === 0){
            console.log('FizzBuzz')
        }else if(begin % 3 === 0){
            console.log('Fizz');
        }else if (begin % 5 === 0) {
            console.log('Buzz');
        }else {
            console.log(begin);
        }
    }
}

fizzBuzz(11, 20)