## задачи из курсов на stepik.org

- В этом задании в нашу функцию testArray передаются два массива случайной длины заполненные случайными числами. Вам нужно сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.
```
function testArray(a, b) {
  let newArray = a.concat(b)
  let summaNewArray = 0;
  for(let i = 0; i < newArray.length; i++)
    {
      summaNewArray += newArray[i];
    }
    return(summaNewArray)
}
console.log(testArray([1,3,4], [4]))
```
- Реализуйте функцию squareOfSum, которая находит квадрат суммы двух чисел по формуле: a² + 2 * a * b + b²
```
function squareOfSum(a, b) {
    return a**2 + 2*a*b + b**2
}
```
- Реализуйте функцию finalGrade, которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.

  Функция принимает два аргумента:

  exam — оценка за экзамен, число от 0 до 100;
  projects — количество проектов, число от 0 и выше.
  Функция возвращает: число (итоговую оценку).

  Есть четыре возможных итоговых оценки:

  100, если оценка за экзамен выше 90 или есть больше 10 проектов
  90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
  75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
  0 в любом другом случае

```
const finalGrade = function (exam, projects) {
    if (exam>90 || projects > 10){
        return 100
    }
    else if (exam>75 && projects>=5){
        return 90
    }
    else if (exam>50 && projects>=2){
        return 75
    }
    else {return 0}
}
```
- Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum, которая находит сумму последовательности целых чисел. Последовательность задается двумя       значениями: begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма     такой последовательности будет: 20.
```
const sequenceSum = (begin, end) => {
    if (begin>end) {
    return NaN
    }
    else if (begin===end) {
        return begin
    }
    else {
    return begin + sequenceSum(begin+1, end)
    }
  };
  ```
- Реализуйте тело функции smallestDivisor, используя итеративный процесс. Эта функция должна находить наименьший делитель заданного числа.
  Доп. условия: число, передаваемое в функцию, больше нуля; делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим     делителем которой является также единица)
```
const smallestDivisor = (num) => {
    const iter = (minNumber, acc) => {
      if (minNumber === 1) {
        return 1;
      }
      else if ( minNumber % acc === 0){
        return acc
      }
     return iter (minNumber, acc+1)
  };
  return iter(num, 2)
}
```
test
