const getGender = require('./getGender')

function getOldCats (list, n) {
  const ageCats = getGender(list)

  ageCats.sort(function (a, b) {
    return b.age - a.age
  })
  for (let i = ageCats.length - 1; i >= n; i--) {
    ageCats.splice(i, 1)
  }
  return ageCats
}
module.exports = getOldCats
