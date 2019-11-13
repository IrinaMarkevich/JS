const catFactory = require('./catFactory')

function catsGroupGenerate (n) {
  const catsGroup = []
  for (let i = 0; i < n; i++) {
    catsGroup[i] = catFactory()
  }

  return catsGroup
}
module.exports = catsGroupGenerate
