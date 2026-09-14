// ❓ УСЛОВИЕ:

//  Вам будет передан массив, содержащий две строки. Ваша задача — написать функцию, которая принимает эти две строки и транспонирует их так, чтобы символы располагались сверху вниз, а не слева направо.

//  Форматирование:
//  между двумя символами должен быть один пробел;
//  если одна строка длиннее другой, на месте отсутствующего символа должен стоять пробел;
//  строки должны разделяться символом переноса строки;
//  последняя строка не должна заканчиваться символом переноса строки.

// ✅ РЕШЕНИЕ1:

function transposeTwoStrings(array) {
  const [str1, str2] = array;
  const maxLength = Math.max(str1.length, str2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const char1 = str1[i] || ' ';
    const char2 = str2[i] || ' ';
    result.push(`${char1} ${char2}`);
  }

  return result.join('\n');
}


// ✅ РЕШЕНИЕ2:

function transposeTwoStrings2(array) {
  const [str1, str2] = array;
  const length = Math.max(str1.length, str2.length);
  const result = [];
  for (let i = 0; i < length; i++) {
    const char = (array[0][i] || " ") + " " + (array[1][i] || " ");
    result.push(char);
  }
  return result.join('\n');
}