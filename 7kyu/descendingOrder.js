// ❓ УСЛОВИЕ:

// Ваша задача — создать функцию, которая принимает в качестве аргумента любое неотрицательное целое число и возвращает его вместе с цифрами в порядке убывания. По сути, нужно переставить цифры, чтобы получить максимально возможное число.

// Пример:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// ✅ РЕШЕНИЕ1

function descendingOrder(n) {
  let str = String(n);
  let digits = [];
  for (let i = 0; i < str.length; i++) {
    digits.push(str[i]);
  }
  digits.sort(function(a, b) {
    return b - a;
  });
  let resultString = "";
  for (let i = 0; i < digits.length; i++) {
    resultString += digits[i];
  }
  return Number(resultString);
}

// ✅ РЕШЕНИЕ2

function descendingOrder2(n){
  return parseInt(String(n).split('').sort((a, b) => b - a).join(''), 10);
}