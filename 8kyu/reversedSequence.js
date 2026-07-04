// ❓ УСЛОВИЕ:

//  Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.
//  Пример: n=5 --> [5,4,3,2,1]

// ✅ РЕШЕНИЕ:

const reverseSeq = n => {
  let result = []
  for (let i = n; i > 0; i--) {
    result.push(i)
  }
  return result
}