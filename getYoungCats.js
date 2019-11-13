const getGender = require('./getGender')

function getYoungCats (list, n) {
  const ageCats = getGender(list)

  ageCats.sort(function (a, b) {
    return a.age - b.age
  })
  for (let i = ageCats.length - 1; i >= n; i--) {
    ageCats.splice(i, 1)
  }

  return ageCats
}
module.exports = getYoungCats
