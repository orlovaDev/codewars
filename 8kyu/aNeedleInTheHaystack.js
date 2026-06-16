// ❓ УСЛОВИЕ:

//  Сможете ли вы найти иголку в стоге сена?
//  Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну «иголку».
//  После того, как ваша функция найдет иголку, она должна вернуть сообщение (в виде строки), которое гласит:
// "found the needle at position " плюс индекс, в котором она найдена, то есть:

//  ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
//  Примечание: В COBOL это должно вернуть "found the needle at position 6"


// ✅ РЕШЕНИЕ

function findNeedle(haystack) {
  let index = haystack.indexOf("needle")
  return "found the needle at position " + index
}

