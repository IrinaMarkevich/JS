const catsGroupGenerate = require('./catsGroupGenerate')
const getGender = require('./getGender')
const getName = require('./getName')
const nameStats = require('./nameStats')

const list = catsGroupGenerate(5)

for (let i = 0; i < list.length; i++) {
  console.log(list[i])
}
console.log('  ')

const mcats = getGender(list)
console.log(mcats)
const nameCats = getName(list)
console.log(nameCats)

const Stats = nameStats(list)
console.log(Stats)
