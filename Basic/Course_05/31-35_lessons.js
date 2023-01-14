// lesson 31

// Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается null:

// getNumberExplanation(8);   // null
 
// // Объяснения есть только для указанных ниже чисел
// getNumberExplanation(666); // 'devil number'
// getNumberExplanation(42);  // 'answer for everything'
// getNumberExplanation(7);   // 'prime number'

const getNumberExplanation = (number) => {
    
    switch (number) {
        case 666:
            return 'devil number';
        case 42:
            return 'answer for everything';
        case 7:
            return 'prime number';
        default:
            return null
    }
}

console.log(getNumberExplanation(666))

// lesson 32

// Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. Для этого нужно идти от верхней границы к нижней. 
// То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.

// printNumbers(4);
// 4
// 3
// 2
// 1
// finished!

const printNumbers = (i) => {
    while (i >= 1){
        console.log(i)
        i -= 1
    }
    console.log('finished!')
}

console.log(printNumbers(6))
