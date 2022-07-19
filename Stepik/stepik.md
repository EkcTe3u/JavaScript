// задачи из курсов на stepik.org

В этом задании в нашу функцию testArray передаются два массива случайной длины заполненные случайными числами. Вам нужно сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.

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
