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

// lesson 33

// Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку и возвращает её:

// joinNumbersFromRange(1, 1); // '1'
// joinNumbersFromRange(2, 3); // '23'
// joinNumbersFromRange(5, 10); // '5678910'

const joinNumbersFromRange = (start, finish) =>{
    let str = ''
    let i = start
    while (i <= finish) {
        str = str + i.toString()
        i += 1
    }

    // while (i <= finish) {
    //     result = `${result}${i}`;
    //     i = i + 1;
    //   }

    return str
}
console.log(joinNumbersFromRange(1, 1))
console.log(joinNumbersFromRange(2, 3))
console.log(joinNumbersFromRange(5, 10))