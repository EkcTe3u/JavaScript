// // Number
// const num = 25 // integer
// console.log(num)
// const float = 25.25 //float
// console.log(float)
// const pow = 10e3 // 10 в 3 степени
// console.log(pow)
// console.log('MAX_SAFE_INTEGER' , Number.MAX_SAFE_INTEGER) // max number javascript над которым может производить действия
// console.log('Math.pow 53' , Math.pow(2, 53) - 1)
// console.log("MIN_SAFE_INTEGER" ,Number.MIN_SAFE_INTEGER)
// console.log("Max_Value", Number.MAX_VALUE) // мах число которое воспринимает javascript
// console.log("Min Value", Number.MIN_VALUE)
// console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY) // позитивная бесконечность
// console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY)
// console.log("1 / 0 = ", 1/0) // бесконечность
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)
// const primerNaN = 2 / undefined
// console.log(isNaN(primerNaN))
// console.log(Number.isNaN(25))
// console.log(Number.isFinite(Infinity)) // является ли число конечным
// console.log(Number.isFinite(25))

// const stringInt = "42"
// const stringFloat = "42.42"
// console.log(stringInt + 2) // конкатенация 422
// console.log(Number.parseInt(stringInt) + 2) // парсим число из строки = 44
// console.log(parseInt(stringInt) + 2) 
// console.log(Number(stringInt) + 2) // 42 + 2
// console.log(+stringInt + 2) // +(строка) преобразует строчку в число

// console.log(Number.parseInt(stringFloat) + 2) // отсекает нецелочисленное значение
// console.log(Number.parseFloat(stringFloat) + 2) // работает с нецелыми числами

// console.log(0.4 + 0.2) // 0.6---> 0.6000000000000001
// console.log((2/5) + (1/5))
// console.log((0.4 + 0.2).toFixed(4)) //0.6000 сколько знаков сохранить после запятой
// console.log(+(0.4 + 0.2).toFixed(1)) 
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// BigInt - тип данных для взаимодествия с числами более max interger
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(90071992547409919999) //не можем взаимодействовать и оперировать
// console.log(typeof 90071992547409919999)
// console.log(typeof 90071992547409919999n) // BigInt
// console.log(90071992547409919999n -9007199254740991999n)
// console.log(-90071992547409919999n)
// // console.log(90071992547409919999.255225n) // error

// console.log(10n - 4) // error разные типы данных
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))

// Math