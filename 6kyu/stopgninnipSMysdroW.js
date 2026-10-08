// ❓ УСЛОВИЕ:

// Напишите функцию, которая принимает строку, состоящую из одного или нескольких слов, и возвращает ту же строку, но с перевернутыми словами, содержащими пять или более букв (как в названии этой задачи).
// Входные строки содержат только буквы и пробелы.
// Слова разделены ровно одним пробелом; в начале и в конце строки пробелы отсутствуют.

// ✅ РЕШЕНИЕ1:

// function spinWords(string) {
//   const reverseString = string.split(" ").map(word => {
//     if (word.length >= 5) {
//       return word.split("").reverse().join("");
//     } else {
//       return word
//     }
//   })
//   return reverseString.join(" ")
// }

// ✅ РЕШЕНИЕ2:

function spinWords(string) {
  return string.replace(/\b[a-zA-Z]{5,}\b/g, (word) => {
    return word.split('').reverse().join('');
  });
}
