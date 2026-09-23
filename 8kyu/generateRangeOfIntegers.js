// ❓ УСЛОВИЕ:

//  Реализуйте функцию generateRange, которая принимает три аргумента (start, stop, step) и возвращает диапазон целых чисел от start до stop (включительно) с шагом step.

//  Примеры:
// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]

//  Примечание:
// start < stop
// step > 0

// ✅ РЕШЕНИЕ:

function generateRange(min, max, step) {
  const result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}