// ❓ УСЛОВИЕ:

// Доработайте функцию так, чтобы она вычисляла среднее значение трех переданных ей оценок и возвращала буквенное обозначение, соответствующее этой оценке.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// Все проверяемые значения находятся в диапазоне от 0 до 100. Нет необходимости проверять отрицательные значения или значения больше 100.

// ✅ РЕШЕНИЕ 1:
//
// function getGrade(s1, s2, s3) {
// let average = (s1 + s2 + s3) / 3
//   if (average >= 90 && average <= 100) {
//     return 'A'
//   } else if (average >= 80 && average <= 90) {
//     return 'B'
//   } else if (average >= 70 && average <= 80) {
//     return 'C'
//   } else if (average >= 60 && average <= 70) {
//     return 'D'
//   } else if (average >= 0 && average <= 60) {
//     return 'F'
//   }
// }

// ✅ РЕШЕНИЕ 2:

const getGrade = (s1, s2, s3, average = (s1 + s2 + s3) / 3) =>
  average >= 90 ? "A" : average >= 80 ? "B" : average >= 70 ? "C" : average >= 60 ? "D" : "E";

