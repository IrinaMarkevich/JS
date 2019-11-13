function nameStats (list) {
  let k = 0
  let j = 0
  let x = 0
  for (let i = 0; i < list.length; i++) {
    if(list[i].name === 'Murka') {
      k += 1
    }
    if(list[i].name === 'Murzik') {
      j++
    }
    if(list[i].name === 'Vasily') {
      x++
    }
  }

  const stats = {
    Murka: k,
    Murzik: j,
    Vasily: x
  }
  return stats
}
module.exports = nameStats
