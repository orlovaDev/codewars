// ❓ УСЛОВИЕ:

//  Проверяет, совпадает ли количество символов «x» и «o» в строке. Метод должен возвращать логическое значение и быть нечувствительным к регистру. Строка может содержать любые символы.

// Примеры ввода/вывода:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



// ✅ РЕШЕНИЕ

function XO(str) {
  const normalized = str.toLowerCase();
  const xCount = (normalized.match(/x/g) || []).length;
  const oCount = (normalized.match(/o/g) || []).length;
  return xCount === oCount;
}

