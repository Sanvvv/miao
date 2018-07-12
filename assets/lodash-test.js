var test = {
  chunk: [
    {
      i:  [['a', 'b', 'c', 'd'], 3],
      e:  [['a', 'b', 'c'], ['d']]
    }
  ],

  difference: [
    {
      i: [[1,2,3,4], [1,2], [3]],
      e: [4]
    }
  ],

  differenceBy: [
    {
      i: [[{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'],
      e: [{ 'x': 2 }]
    }
  ],

  drop: [
    {
      i: [[1,2,3]],
      e: [2,3]
    },
    {
      i: [[1,2,3], 5],
      e: []
    },
    {
      i: [[1,2,3], 0],
      e: [1,2,3]
    }
  ],

  dropRight: [
    {
      i: [[1,2,3]],
      e: [1,2]
    },
    {
      i: [[1,2,3], 2],
      e: [1]
    },
    {
      i: [[1,2,3], 5],
      e: []
    }
  ],

  fill: [
    {
      i: [[4, 6, 8, 10], '*', 1, 3],
      e: [4, '*', '*', 10]
    },
    {
      i: [Array(3), 2],
      e: [2,2,2]
    }
  ],

  head: [
    {
      i: [[1,2,3]],
      e: 1
    }
  ],

  flatten: [
    {
      i: [[1, [2, [3, [4]], 5]]],
      e: [1, 2, [3, [4]], 5]
    }
  ],

  flattenDeep: [
    {
      i: [[1, [2, [3, [4]], 5]]],
      e: [1,2,3,4,5]
    }
  ],

  flattenDepth: [
    {
      i: [[1, [2, [3, [4]], 5]], 1],
      e: [1, 2, [3, [4]], 5]
    },
    {
      i: [[1, [2, [3, [4]], 5]], 2],
      e: [1, 2, 3, [4], 5]
    }
  ],

  fromPairs: [
    {
      i: [[['a', 1], ['b', 2]]],
      e: { 'a': 1, 'b': 2 }
    }
  ]
}

for (let func in test) {
  for (let f of test[func]) {
    let expect = JSON.stringify(f.e)
    let result = JSON.stringify(sanvvv[func](...f.i))

    if (expect !== result) {
      console.log('-------------------------------')
      console.log(func)
      console.log('input : ' + JSON.stringify(f.i))
      console.log('expect: ' + expect)
      console.log('result: ' + result )
    }
  }
}

console.log('-------------------------------')
console.log('complete')
console.log('-------------------------------')

// identity
// var object = { 'a': 1 };
// console.log(sanvvv.identity(object) === object);