// ❓ УСЛОВИЕ:

// На этот раз без сюжета и теории. Примеры ниже показывают, как писать функции accum:

// Примеры:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// Параметром функции accum является строка, содержащая только буквы от a до z и от A до Z.

// ✅ РЕШЕНИЕ:

function accum(s) {
  return s
    .split('')
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join('-');
}