// ❓ УСЛОВИЕ:

//  Если вам предоставлено число от 0 до 9, верните его прописью.
//  Обратите внимание, что входные данные гарантированно находятся в диапазоне от 0 до 9.
//  Вход: 1 Выход: "One".
//  Если ваш язык программирования поддерживает оператор switch, попробуйте его использовать.

// ✅ РЕШЕНИЕ:

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero"
    case 1:
      return "One"
    case 2:
      return "Two"
    case 3:
      return "Three"
    case 4:
      return "Four"
    case 5:
      return "Five"
    case 6:
      return "Six"
    case 7:
      return "Seven"
    case 8:
      return "Eight"
    case 9:
      return "Nine"
  }
}
