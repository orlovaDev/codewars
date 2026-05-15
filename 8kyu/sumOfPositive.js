// ❓ УСЛОВИЕ:

//  Получите массив чисел, верните сумму всех положительных единиц.
//  Пример [1, -4, 7, 12] => 1 + 7 + 12 = 20 1+7+12=20
//  Примечание Если суммировать нечего, сумма по умолчанию равна 0.

// ✅ РЕШЕНИE

function positiveSum(arr) {
  let sum = 0;
  arr.forEach(a => a > 0 ? sum += a : 0);
  return sum
}


function minMax(arr) {
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;

}



