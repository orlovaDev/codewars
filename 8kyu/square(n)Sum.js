// ❓ УСЛОВИЕ:

//  Дополните функцию суммы квадратов так, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.

// Например, для [1, 2, 2] должно вернуться 9

// ✅ РЕШЕНИE

function squareSum(numbers){
  let sum = 0;
  const squareNumbers = numbers.map(n => n ** 2)
  squareNumbers.forEach(n => sum += n)
  return sum;
}

// ✅ РЕШЕНИE 2
//  function squareSum(numbers) {
//   return numbers.reduce((sum, n) => sum + n ** 2, 0)
//  }