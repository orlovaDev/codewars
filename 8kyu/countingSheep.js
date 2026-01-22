// ❓ УСЛОВИЕ:

// Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своих местах. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает присутствие)

// Пример:

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

//   Правильный ответ — 17.
//   Подсказка: Не забудьте проверить наличие некорректных значений, таких как null/undefined.

// ✅ РЕШЕНИЕ

function countSheeps(sheep) {
  let count = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      count++;
    }
  }
  return count;
}
