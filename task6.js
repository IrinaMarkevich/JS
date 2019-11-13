const catFactoryMod = require('./catFactoryMod')
const catsGroupGenerateMod = require('./catsGroupGenerateMod')

const prop = 'age'
const value = 7
const cat = catFactoryMod(prop, value)
console.log(cat)

const groupMod = catsGroupGenerateMod(15, prop, value)
for (let i = 0; i < groupMod.length; i++) {
  console.log(groupMod[i])
}
