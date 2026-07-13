// ❓ УСЛОВИЕ:

//Правила игры «Камень, ножницы, бумага»:

// Камень побеждает ножницы,
// Ножницы побеждают бумагу,
// Бумага побеждает камень,
// Два одинаковых хода — ничья.

//   Rock beats Scissors,
//   Scissors beat Paper,
//   Paper beats Rock,

// Начнём! Вам будут даны допустимые ходы двух игроков в «Камень, ножницы, бумага», и вы должны будете указать, кто победил: «Игрок 1 победил!» для игрока 1 и «Игрок 2 победил!» для игрока 2. В случае ничьей верните «Ничья!».

// "scissors",     "paper"     --> "Player 1 won!"
// "scissors",     "rock"      --> "Player 2 won!"
// "paper",        "paper"     --> "Draw!"

// ✅ РЕШЕНИE:

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!"

  if (p1 === "scissors" && p2 === "paper" || p1 === "rock" && p2 === "scissors" || p1 === "paper" && p2 === "Rock") {
    return "Player 1 won!"
  } else {
    return "Player 2 won!"
  }
};


