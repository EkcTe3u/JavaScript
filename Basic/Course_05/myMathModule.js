// lesson 38

// Создайте функцию getTriangleArea(), которая принимает два аргумента h и b и 
// вычисляет площадь треугольника по формуле A = 1/2 * h * b, где h — высота, а b — основание треугольника.

export const getTriangleArea = (h, b) => {
  const area = (h * b) / 2;
  return area;
};

// console.log(getTriangleArea(5, 10))
// console.log(getTriangleArea(15, 12))

