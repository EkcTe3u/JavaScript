// 1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел

const sum = (a, b) => {
    return a + b ;
}
console.log(sum(4, 2));

// 2) Сделать функцию которая вернёт в консоль квадрат переданного числа

const sqrt = (a) => a ** 2;

console.log("sqrt = ",sqrt(3))

// Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
// {"name":И,
// "surname":Ф,
// "middlename":О}

const jsonBack = (name, surname, middlename) => {
    return {'name': name,
            'surname': surname,
                'middlename': middlename}
}

console.log('jsonBack = ', jsonBack('Andrey', 'Sozdatelev'));

// 4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращяет функция которая на вход принимает массив чисел 
// Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"
const returnEvenNumbers = (massive) => {
    let newEvenMassive = [];
    let newOddMasive = [];
    for (const element of massive){
        if (element % 2 === 0) {
            newEvenMassive.push(element);
        } else {
            newOddMasive.push(element);
        }
    }
    if (newEvenMassive.length === 0){
        return "No even numbers";
    }else{
    return `newEvenMassive = ${newEvenMassive}
newOddMassive = ${newOddMasive}`;
}  
}

console.log(returnEvenNumbers([1, 3, 5, 7]));