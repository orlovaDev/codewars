// ❓УСЛОВИЕ:

// Вам дана функция animal, принимающая 1 параметр: obj, например, такого вида:
//   { name: "dog", legs: 4, color: "white" }

// нужно вернуть строку следующего вида:
// "This white dog has 4 legs."

// ✅ РЕШЕНИЕ:

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
