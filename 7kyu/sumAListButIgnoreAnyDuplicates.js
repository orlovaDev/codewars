// ❓ УСЛОВИЕ:

// Пожалуйста, напишите функцию, которая суммирует список, но игнорирует все повторяющиеся элементы.
//
// Например, для списка [3, 4, 3, 6] функция должна возвращать 10, а для списка [1, 10, 3, 10, 10] функция должна возвращать 4.

// ✅ РЕШЕНИЕ:

function sumNoDuplicates(numList) {
  let sumNum = 0;
  for (let i = 0; i < numList.length; i++) {
    if (numList.indexOf(numList[i]) === numList.lastIndexOf(numList[i])) {
      sumNum += numList[i];
    }
  }
  return sumNum;
}
