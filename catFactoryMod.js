const pick = require('./pick')
function catFactoryMod (prop, value) {
  const name = ['Murka', 'Vasily', 'Murzik']
  const age = [3, 4, 5, 6, 7]
  const gender = ['m', 'f']
  const legsCount = [3, 4]
  const tailLength = [5, 10, 15]
  const cat = {
    name: pick(name),
    age: pick(age),
    gender: pick(gender),
    legsCount: pick(legsCount),
    tailLength: pick(tailLength)
  }

  for (const key in cat) {
    if (key === prop) {
      cat[key] = value
    }
  }
  return cat
}
module.exports = catFactoryMod
