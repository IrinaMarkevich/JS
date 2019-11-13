const catsGroupGenerate = require('./catsGroupGenerate')
const getGender = require('./getGender')
const getName = require('./getName')
const getOldCats = require('./getOldCats')
const getYoungCats = require('./getYoungCats')
const list = catsGroupGenerate(15)

for (let i = 0; i < list.length; i++) {
  //console.log(list[i])
}
const mcats = getGender(list)
const nameCats = getName(list)
const oldCats = getOldCats(list, 5)
const youngCats = getYoungCats(list, 5)
for (let i = 0; i < mcats.length; i++) {
 // console.log(mcats[i])
}

for (let i = 0; i < nameCats.length; i++) {
  //console.log(nameCats[i])
}
for (let i = 0; i < oldCats.length; i++) {
 // console.log(oldCats[i])
}

for (let i = 0; i < youngCats.length; i++) {
  console.log(youngCats[i])
}
