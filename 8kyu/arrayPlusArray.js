// ❓ УСЛОВИЕ:  
 
// Я новичок в программировании, и теперь мне нужно получить сумму двух массивов... Точнее, сумму всех их элементов. Буду благодарен за помощь. P.S. Каждый массив содержит только целые числа. Результатом тоже будет число.

// ✅ РЕШЕНИЕ1 


function arrayPlusArray(arr1, arr2) {
  let arr = []
  for (let i = 0; i < arr1.length; i++) {
   arr.push(arr1[i])
  }
  for (let j = 0; j < arr2.length; j++) {
    arr.push(arr2[j])
  }
//   return arr
  let sum = 0
  for (let k = 0; k < arr.length; k++){
sum = sum + arr[k]
  }
  return sum
}


// ✅ РЕШЕНИЕ2 

function arrayPlusArray(arr1, arr2) {
    let sum = 0
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
        sum += arr2[j];
    }
    return sum
}
