const charScores = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10
}

function scrabble(string) {
  if (typeof string !== 'string' || string === '') {
    console.log('Please enter a valid word')
    return 0
  }

  let totalScore = 0
  string = string.toLowerCase()
  for (const i in string) {
    if (string[i] === ' ' || string[i] === '\t' || string[i] === '\n') {
      console.log('oops')
    } else {
      console.log(string[i])
      console.log(charScores)
      console.log(charScores[string[i]])
      totalScore += charScores[string[i]]
    }
  }
  return totalScore
}

console.log(scrabble(' '))

module.exports = scrabble
