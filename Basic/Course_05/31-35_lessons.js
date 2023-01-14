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


