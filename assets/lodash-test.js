var test = {
  chunk: {
    i:  [['a', 'b', 'c', 'd'], 3],
    e:  [['a', 'b', 'c'], ['d']]
  },

  difference: {
    i: [[1,2,3,4], [1,2], [3]],
    e: [4]
  },

  differenceBy: {
    i: [[{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'],
    e: [{ 'x': 2 }]
  }
}

for (let f in test) {
  let expect = JSON.stringify(test[f].e)
  let result = JSON.stringify(sanvvv[f](...test[f].i))
  
  if (expect !== result) {
    console.log('-------------------------------')
    console.log(f)
    console.log('expect: ' + expect)
    console.log('result: ' + result )
  }
}

console.log('-------------------------------')
console.log('complete')
