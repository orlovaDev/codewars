// ❓ УСЛОВИЕ:

//  Эта ката посвящена умножению заданного числа на восемь, если оно четное, и на девять в противном случае.

// ✅ РЕШЕНИЕ

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9
}
