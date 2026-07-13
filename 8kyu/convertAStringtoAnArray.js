// ❓ УСЛОВИЕ:

//  Напишите функцию для разделения строки и преобразования её в массив слов.

// Примеры (Ввод ==> Вывод):

// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// ✅ РЕШЕНИE:

function stringToArray(string){
  return string.split(" ")
}