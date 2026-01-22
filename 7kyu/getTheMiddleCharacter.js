// ❓ УСЛОВИЕ:

// Вам будет предоставлена ​​непустая строка. Ваша задача — вернуть средний (средние) символ (или символы) этой строки. Если длина строки нечетная, верните средний символ. Если длина строки четная, верните два средних символа.

// Пример:

// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// ✅ РЕШЕНИЕ

function getMiddle(s) {
  const length = s.length
  const middle = Math.floor(length / 2)
  if (length % 2 === 0) {
return s[middle - 1] + s[middle]
  } else {
    return s[middle]
  }
}