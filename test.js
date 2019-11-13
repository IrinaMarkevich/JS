const chai = require('chai')
const assert = chai.assert
const pick = require('./pick')
const catFactory = require('./catFactory')
const catsGroupGenerate = require('./catsGroupGenerate')
const getGender = require('./getGender')
const getName = require('./getName')
const getOldCats = require('./getOldCats')
const getYoungCats = require('./getYoungCats')
const nameStats = require('./nameStats')
const catFactoryMod = require('./catFactoryMod')
const catsGroupGenerateMod = require('./catsGroupGenerateMod')

it('Function pick returns a number', () => {
  assert.isNumber(pick([1, 2, 3, 4, 5]), '')
})

it('Function catFactory returns a Object', () => {
  assert.isObject(catFactory(), '')
})

it('Function catsGroupGenerate returns a Array', () => {
  assert.isArray(catsGroupGenerate(5), '')
})

it('Function getGender returns a Array', () => {
  assert.isArray(getGender(catsGroupGenerate(5)), '')
})

it('Function getGender returns a "m" ', () => {
  const arr = getGender(catsGroupGenerate(5))
  for (let i = 0; i < arr.length; i++) {
    assert.equal(arr[i].gender, 'm', '')
  }
})

it('Function getName returns a Array', () => {
  assert.isArray(getName(catsGroupGenerate(5)), '')
})

it('Function getName returns a name ', () => {
  const arr = getName(catsGroupGenerate(5))
  let isRight = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'Murka' || arr[i] === 'Murzik' || arr[i] === 'Vasily') {
      isRight = true
    }
  }
  assert.isTrue(isRight, '')
})

it('Function getOldCats returns a Array', () => {
  assert.isArray(getOldCats(catsGroupGenerate(5), 2), '')
})

it('Function getOldCats returns 2 elements', () => {
  const arr = getOldCats(catsGroupGenerate(100), 2)
  assert.equal(arr.length, 2, '')
})

it('Function getYoungCats returns a Array', () => {
  assert.isArray(getYoungCats(catsGroupGenerate(5), 2), '')
})

it('Function getYoungCats returns 2 elements', () => {
  const arr = getYoungCats(catsGroupGenerate(100), 2)
  assert.equal(arr.length, 2, '')
})

it('Function nameStats returns a Object', () => {
  assert.isObject(nameStats(catsGroupGenerate(5)), '')
})

it('Function catFactoryMod returns a Object', () => {
  assert.isObject(catFactoryMod('age', 7), '')
})

it('Function catFactoryMod returns a Object (age: 7)', () => {
  const obj = catFactoryMod('age', 7)
  assert.equal(obj.age, 7, '')
})

it('Function catsGroupGenerateMod returns a Array', () => {
  assert.isArray(catsGroupGenerateMod(15, 'age', 7), '')
})

it('Function catsGroupGenerateMod returns a Array (Object {age; 7})', () => {
  const arr = catsGroupGenerateMod(15, 'age', 7)
  for (let i = 0; i < arr.length; i++) {
    assert.equal(arr[i].age, 7, '')
  }
})
