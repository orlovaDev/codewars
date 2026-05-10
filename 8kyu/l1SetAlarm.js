// ❓ УСЛОВИЕ:

//Напишите функцию с именем setAlarm/set_alarm/set-alarm/setalarm (в зависимости от языка программирования), которая принимает два параметра. Первый параметр, employed, принимает значение true, если вы работаете, а второй параметр, vacation, принимает значение true, если вы в отпуске.
//
// Функция должна возвращать true, если вы работаете, но не в отпуске (поскольку именно при таких обстоятельствах необходимо устанавливать будильник). В противном случае она должна возвращать false. Примеры:

// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

// ✅ РЕШЕНИЕ

function setAlarm(employed, vacation) {
  return employed && !vacation
}