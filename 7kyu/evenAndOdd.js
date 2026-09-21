// ❓ УСЛОВИЕ:

//  Дано целое число N. Можно ли составить два числа NE и NO таким образом, чтобы NE состояло из четных цифр N, а NO — из нечетных цифр N?
//  Верните массив (кортеж в Python) из двух элементов, где первый — NE, а второй — NO.

// ✅ РЕШЕНИЕ:

function evenAndOdd(num){
  let NEStr = ""
  let NOStr = ""
  for (let char of num.toString()) {
    let digit = Number(char);
    if (digit % 2 === 0) {
      NEStr += char;
    } else {
      NOStr += char;
    }
  }
  const NE = NEStr === "" ? 0 : +NEStr;
  const NO = NOStr === "" ? 0 : +NOStr;
  return [NE, NO];
}

