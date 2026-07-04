// ❓ УСЛОВИЕ:

//  Напишите функцию `bmi`, которая вычисляет индекс массы тела (bmi = weight / height²).
//  Если bmi <= 18,5, верните `Underweight`.
//  Если bmi <= 25,0, верните `Normal`.
//  Если bmi <= 30,0, верните `Overweight`.
//  Если bmi > 30, верните `Obese`.

// ✅ РЕШЕНИЕ:

function bmi(weight, height) {
  let value = weight / height ** 2
  return value <= 18.5 ? "Underweight" :
    value <= 25 ? "Normal" :
      value <= 30 ? "Overweight" : "Obese"
}


