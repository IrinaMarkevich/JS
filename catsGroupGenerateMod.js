const catFactoryMod = require('./catFactoryMod')

function catsGroupGenerate (n, prop, value) {
  const catsGroup = []

  for (let i = 0; i < n; i++) {
    catsGroup[i] = catFactoryMod(prop, value)
  }
  return catsGroup
}
module.exports = catsGroupGenerate
