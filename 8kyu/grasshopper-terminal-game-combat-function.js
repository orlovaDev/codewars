// УСЛОВИЕ:

// Создайте боевую функцию, которая принимает текущее здоровье игрока и полученный урон, и возвращает новое значение здоровья игрока. Здоровье не может быть меньше 0.

// РЕШЕНИЕ:

function combat(health, damage) {
  let newHealth = health - damage;
  if (newHealth > 0) {
    return newHealth;
  } else {
    return 0;
  }
}

