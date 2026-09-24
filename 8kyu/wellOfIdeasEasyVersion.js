// ❓ УСЛОВИЕ:

//  Кажется, что на каждую удачную идею для ката приходится немало неудачных!
//  В этом задании вам нужно проверить переданный массив на наличие хороших («good») и плохих («bad») идей.
//  Если хороших идей одна или две, верните строку «Publish!», а если больше двух — «I smell a series!».
//  Если же хороших идей нет (что случается довольно часто), верните «Fail!».

// ✅ РЕШЕНИЕ:

function well(x) {
  const goodIdeas = x.filter(i => i === "good")
  if (goodIdeas.length === 0) {
    return "Fail!"
  } else if (goodIdeas.length <= 2) {
    return "Publish!"
  } else {
    return "I smell a series!"
  }
}
