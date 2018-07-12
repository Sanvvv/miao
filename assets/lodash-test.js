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
    },
    {
      i: [[1,2,3], [1, 2], [2]],
      e: [3]
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
  ],

  indexOf: [
    {
      i: [[1, 2, 1, 2], 2],
      e: 1
    },
    {
      i: [[1, 2, 1, 2], 2, 2],
      e: 3
    },
    {
      i: [[1, NaN], NaN],
      e: 1
    },
    {
      i: [[1,2,3,4], 2, -2],
      e: -1
    }
  ],

  initial: [
    {
      i: [[1,2,3]],
      e: [1,2]
    },
    {
      i: [[1]],
      e: []
    },
    {
      i: [[]],
      e: []
    }
  ],

  intersection: [
    {
      i: [[2, 1, 4], [2, 1, 5], [2, 1, 5]],
      e: [2, 1]
    },
  ],

  join: [
    {
      i: [['a', 'b', 'c'], '~'],
      e: 'a~b~c'
    }
  ],

  last: [
    {
      i: [[1, 2, 3]],
      e: 3
    },
    {
      i: [[1]],
      e: 1
    }
  ],

  lastIndexOf: [
    {
      i: [[1, 2, 1, 2], 2],
      e: 3
    },
    {
      i: [[1, 2, 1, 2], 2, 2],
      e: 1
    },
    {
      i: [[1, 2, 2, 4], 2, -3],
      e: 1
    }
  ],

  nth: [
    {
      i: [['a', 'b', 'c', 'd'], 1],
      e: 'b'
    },
    {
      i: [['a', 'b', 'c', 'd'], -2],
      e: 'c'
    }
  ],

  pull: [
    {
      i: [['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c'],
      e: ['b', 'b']
    },
    {
      i: [[1,2,3,4,5],3,5],
      e: [1,2,4]
    }
  ],

  pullAll: [
    {
      i: [['a', 'b', 'c', 'a', 'b', 'c'], ['a', 'c']],
      e: ['b', 'b']
    }
  ],

  pullAt: [
    {
      i: [['a', 'b', 'c', 'd'], [1, 3]],
      e: ['b', 'd']
    }
  ],

  slice: [
    {
      i: [[1,2,3,4], -3, -2],
      e: [2]
    },
  ],

  sortedIndex: [
    {
      i: [[30, 50], 60],
      e: 2
    },
    {
      i: [[30, 50], 40],
      e: 1
    },
    {
      i: [[1,1,1,1,1], 1],
      e: 0
    },
    {
      i: [[1], 2],
      e: 1
    },
    {
      i: [[], 2],
      e: 0
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