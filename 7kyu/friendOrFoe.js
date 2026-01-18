// ❓ УСЛОВИЕ:

// Напишите программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей. Если имя состоит ровно из 4 букв, вы можете быть уверены, что это ваш друг! В противном случае, вы можете быть уверены, что это не ваш друг...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []

// Входные строки будут содержать только буквы. Примечание: сохраните исходный порядок имен в выходных данных

// ✅ РЕШЕНИЕ(более подробное)

function friend(friends) {
  myFriends = [];
  for (let i = 0; i <= friends.lendth; i++) {
    let currentName = friends[i];
    if (currentName.length === 4) {
      myFriends.push(currentName);
    }
  }
  return myFriends;
}

// ✅ РЕШЕНИЕ 2 (более совремненное и лаконичное)

function friend(friends) {
  return friends.filter((name) => name.length === 4);
}
