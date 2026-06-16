// ❓ УСЛОВИЕ:

// Напишите функцию, которая вычисляет среднее арифметическое чисел в заданном массиве.
// Примечание: пустые массивы должны возвращать 0.

// ✅ РЕШЕНИЕ:

// function findAverage(array) {
//   if (array.length === 0)
//     return 0;
//   let sumArray = 0
//   for (let i = 0; i < array.length; i++) {
//     sumArray += array[i]
//   }
//   return sumArray / array.length
// }


// ✅ РЕШЕНИЕ2:

function findAverage(array) {
  return array.length === 0 ? 0 : array.reduce((sum, num) => sum + num, 0 ) / array.length
}
