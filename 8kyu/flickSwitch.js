// ❓УСЛОВИЕ:

//Создайте функцию, которая всегда возвращает True/True для каждого элемента в заданном списке.
// Однако, если элемент — это слово «flick», переключитесь на возврат противоположного логического значения.
//
// Примеры:
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
//
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
//
// ['bicycle', 'harmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

// Примечания:
// "flick" всегда будет отображаться в нижнем регистре.
// Список может содержать несколько элементов типа flick.
// Меняйте логическое значение для того же элемента, что и сам flick.

// ✅ РЕШЕНИЕ1:

function flickSwitch(arr) {
  let state = true;
  return arr.map(el => el === 'flick' ? state = !state : state);
}


const result = flickSwitch(['codewars', 'flick', 'code', 'wars']);
console.log(result); // [true, false, false, false]

// ✅ РЕШЕНИЕ2:


function flickSwitch2(arr) {
  let state2 = true
  return arr.map(el => {
    if (el === 'flick') {
      state2 = !state2
    }
    return state2
  })
}

const result2 = flickSwitch2(['codewars', 'flick', 'code', 'wars']);
console.log(result2); // [true, false, false, false]