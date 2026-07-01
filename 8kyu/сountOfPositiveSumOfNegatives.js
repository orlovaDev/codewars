// ❓ УСЛОВИЕ:

//  Дан массив целых чисел. Верните массив, где первый элемент — количество положительных чисел, а второй — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным числом.
// Если входные данные представляют собой пустой массив или значение null, возвращается пустой массив.

// Пример:

// Для ввода [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], вам следует вернуть [10, -65].

// ✅ РЕШЕНИЕ1

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return []

  let negativeSum = 0
  let positiveCount = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      negativeSum += input[i]
    } else if (input[i] > 0) {
      positiveCount++
    }
  }
  return [positiveCount, negativeSum]
}

// ✅ РЕШЕНИЕ2

// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) return []
//   let positiveCount = input.filter(num => num > 0).length;
//   let negativeSum = input.filter(num => num < 0).reduce((sum, num) => sum + num, 0);
//   return [positiveCount, negativeSum]
// }

