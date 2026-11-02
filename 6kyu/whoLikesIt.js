// ❓ УСЛОВИЕ:

//  Наверняка вы знакомы с системой «лайков» в Facebook и на других ресурсах. Пользователи могут отмечать «лайком» записи в блогах, изображения или другие объекты.
//  Наша задача — сформировать текст, который будет отображаться рядом с таким объектом.
//  Реализуйте функцию, которая принимает массив с именами людей, поставивших «лайк».
//  Функция должна возвращать текст, оформленный в соответствии с приведёнными ниже примерами:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Примечание: Если имен четыре или более, число в "и еще 2" просто увеличивается.

// ✅ РЕШЕНИЕ1:

// function likes(names) {
//   if (names.length === 1) {
//     return `${names[0]} likes this`
//   } else if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`
//   } else if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   } else if (names.length >= 4) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//   } else {
//     return "no one likes this"
//   }
// }

// ✅ РЕШЕНИЕ2:

// function likes(names) {
//   return (names.length === 1) ? `${names[0]} likes this` : (names.length === 2) ? `${names[0]} and ${names[1]} like this` : (names.length === 3) ? `${names[0]}, ${names[1]} and ${names[2]} like this` : (names.length >= 4) ? `${names[0]}, ${names[1]} and ${names.length - 2} others like this` : "no one likes this"
// }


// ✅ РЕШЕНИЕ3:

function likes(names) {
  switch (names.length) {
    case 0: return "no one likes this"
    case 1: return `${names[0]} likes this`
    case 2: return `${names[0]} and ${names[1]} like this`
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}