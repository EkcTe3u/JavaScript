// lesson 26

// Реализуйте функцию isInternationalPhone(), которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.

// isInternationalPhone('89602223423'); // false
// isInternationalPhone('+79602223423'); // true
const isInternationalPhone = (number) => {
    if (number[0] === '+') {
        return true
    } else {
        return false
    }
}

console.log(isInternationalPhone('88'))

// const isInternationalPhone = (phone) => phone[0] === '+';

