var test = {
  chunk: [
    {
      i: [['a', 'b', 'c', 'd'], 3],
      e: [['a', 'b', 'c'], ['d']]
    }
  ],

  difference: [
    {
      i: [[1, 2, 3, 4], [1, 2], [3]],
      e: [4]
    },
    {
      i: [[1, 2, 3], [1, 2], [2]],
      e: [3]
    }
  ],

  differenceBy: [
    {
      i: [[{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'],
      e: [{ 'x': 2 }]
    },
    {
      i: [[2.1, 1.2], [2.3, 3.4], Math.floor],
      e: [1.2]
    }
  ],

  differenceWith: [
    {
      i: [[{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 3, 'y': 1 }], [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], sanvvv.isEqual],
      e: [{ 'x': 3, 'y': 1 }]
    }
  ],

  drop: [
    {
      i: [[1, 2, 3]],
      e: [2, 3]
    },
    {
      i: [[1, 2, 3], 5],
      e: []
    },
    {
      i: [[1, 2, 3], 0],
      e: [1, 2, 3]
    }
  ],

  dropRight: [
    {
      i: [[1, 2, 3]],
      e: [1, 2]
    },
    {
      i: [[1, 2, 3], 2],
      e: [1]
    },
    {
      i: [[1, 2, 3], 5],
      e: []
    }
  ],

  dropRightWhile: [
    {
      i: [[
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': false }
      ], { 'user': 'pebbles', 'active': false }],
      e: [{ 'user': 'barney', 'active': true }, { 'user': 'fred', 'active': false }]
    },
    {
      i: [[
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': false }
      ], function (o) { return !o.active; }],
      e: [{ 'user': 'barney', 'active': true }]
    },
    {
      i: [[
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': false }
      ], ['active', false]],
      e: [{ 'user': 'barney', 'active': true }]
    },
    {
      i: [[
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': false }
      ], 'active'],
      e: [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': false }
      ]
    }
  ],

  dropWhile: [
    {
      i: [[
        { 'user': 'barney', 'active': false },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': true }
      ], ['active', false]],
      e: [{ 'user': 'pebbles', 'active': true }]
    },
    {
      i: [[
        { 'user': 'barney', 'active': false },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': true }
      ], function (o) { return !o.active; }],
      e: [{ 'user': 'pebbles', 'active': true }]
    }
  ],

  fill: [
    {
      i: [[4, 6, 8, 10], '*', 1, 3],
      e: [4, '*', '*', 10]
    },
    {
      i: [Array(3), 2],
      e: [2, 2, 2]
    }
  ],

  head: [
    {
      i: [[1, 2, 3]],
      e: 1
    }
  ],

  flatten: [
    {
      i: [[1, [2, [3, [4]], 5]]],
      e: [1, 2, [3, [4]], 5]
    }
  ],

  findIndex: [
    {
      i: [[
        { 'user': 'barney', 'active': false },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': true }
      ], { 'user': 'fred', 'active': false }],
      e: 1
    },
    {
      i: [[
        { 'user': 'barney', 'active': false },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': true }
      ], 'active'],
      e: 2
    }
  ],

  findLastIndex: [
    {
      i: [[
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': false }
      ], 'active'],
      e: 0
    },
    {
      i: [[
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': false }
      ], function (o) { return o.user == 'pebbles'; }],
      e: 2
    }
  ],

  flattenDeep: [
    {
      i: [[1, [2, [3, [4]], 5]]],
      e: [1, 2, 3, 4, 5]
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
      i: [[1, 2, 3, 4], 2, -2],
      e: -1
    }
  ],

  initial: [
    {
      i: [[1, 2, 3]],
      e: [1, 2]
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

  intersectionBy: [
    {
      i: [[2.1, 1.2], [2.3, 3.4], Math.floor],
      e: [2.1]
    },
    {
      i: [[{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'],
      e: [{ 'x': 1 }]
    }
  ],

  intersectionWith: [
    {
      i: [[{ 'x': 1, 'y': 1 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 1 }, { 'x': 2, 'y': 2 }], [{ 'x': 1, 'y': 1 }], sanvvv.isEqual],
      e: [{ 'x': 1, 'y': 1 }]
    }
  ],

  join: [
    {
      i: [['a', 'b', 'c'], '~'],
      e: 'a~b~c'
    },
    {
      i: [[1, 2, 3], 4],
      e: '14243'
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
      i: [[1, 2, 3, 4, 5], 3, 5],
      e: [1, 2, 4]
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
      i: [['a', 'b', 'c', 'd', 'e'], [1, 3]],
      e: ['b', 'd']
    }
  ],

  slice: [
    {
      i: [[1, 2, 3, 4], -3, -2],
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
      i: [[1, 1, 1, 1, 1], 1],
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
  ],

  sortedIndexOf: [
    {
      i: [[4, 5, 5, 5, 6], 5],
      e: 1
    },
    {
      i: [[1, 2, 3, 4], 5],
      e: -1
    },
    {
      i: [[1, 2, 3, 4], 0],
      e: -1
    },
    {
      i: [[1], 0],
      e: -1
    },
    {
      i: [[1], 1],
      e: 0
    }
  ],

  sortedLastIndex: [
    {
      i: [[4, 5, 5, 5, 6], 5],
      e: 4
    },
    {
      i: [[1, 3], 1],
      e: 1
    }
  ],

  sortedLastIndexOf: [
    {
      i: [[4, 5, 5, 5, 6], 5],
      e: 3
    },
    {
      i: [[1, 2, 2, 4], 2],
      e: 2
    }
  ],

  sortedUniq: [
    {
      i: [[1, 1, 2]],
      e: [1, 2]
    }
  ],

  uniq: [
    {
      i: [[2, 1, 2]],
      e: [2, 1]
    },
    {
      i: [[false, 0, '0', 1, '1']],
      e: [false, 0, '0', 1, '1']
    }
  ],

  uniqBy: [
    {
      i: [[2.1, 1.2, 2.3], Math.floor],
      e: [2.1, 1.2]
    },
    {
      i: [[{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x'],
      e: [{ 'x': 1 }, { 'x': 2 }]
    }
  ],

  tail: [
    {
      i: [[1, 2, 3]],
      e: [2, 3]
    }
  ],

  take: [
    {
      i: [[1, 2, 3]],
      e: [1]
    },
    {
      i: [[1, 2, 3], 2],
      e: [1, 2]
    },
    {
      i: [[1, 2, 3], 5],
      e: [1, 2, 3]
    },
    {
      i: [[1, 2, 3], 0],
      e: []
    }
  ],

  takeRight: [
    {
      i: [[1, 2, 3]],
      e: [3]
    },
    {
      i: [[1, 2, 3], 2],
      e: [2, 3]
    },
    {
      i: [[1, 2, 3], 5],
      e: [1, 2, 3]
    },
    {
      i: [[1, 2, 3], 0],
      e: []
    },
    {
      i: [[1], 2],
      e: [1]
    }
  ],

  union: [
    {
      i: [[2], [1, 2]],
      e: [2, 1]
    }
  ],

  // unionBy: [
  //   {
  //     i: [[2.1], [1.2, 2.3], Math.floor],
  //     e: [2.1, 1.2]
  //   },
  //   {
  //     i: [[{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'],
  //     e: [{ 'x': 1 }, { 'x': 2 }]
  //   }
  // ],

  without: [
    {
      i: [[1, 2, 1, 3], 1, 2],
      e: [3]
    },
    {
      i: [[1, 2], 1, 2],
      e: []
    }
  ],

  xor: [
    {
      i: [[2, 1], [2, 3]],
      e: [1, 3]
    }
  ],

  zip: [
    {
      i: [['a', 'b'], [1, 2], [true, false]],
      e: [['a', 1, true], ['b', 2, false]]
    }
  ],

  unzip: [
    {
      i: [[['fred', 30, true], ['barney', 40, false]]],
      e: [['fred', 'barney'], [30, 40], [true, false]]
    }
  ],

  zipObject: [
    {
      i: [['a', 'b'], [1, 2]],
      e: { 'a': 1, 'b': 2 }
    }
  ],

  zipObjectDeep: [
    {
      i: [['a.b[0].c', 'a.b[1].d'], [1, 2]],
      e: { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
    }
  ],

  countBy: [
    {
      i: [[6.1, 4.2, 6.3], Math.floor],
      e: { '4': 1, '6': 2 }
    },
    {
      i: [['one', 'two', 'three'], 'length'],
      e: { '3': 2, '5': 1 }
    }
  ],

  every: [
    {
      i: [[
        { 'user': 'barney', 'age': 36, 'active': false },
        { 'user': 'fred', 'age': 40, 'active': false }
      ], { 'user': 'barney', 'active': false }],
      e: false
    },
    {
      i: [[true, 1, null, 'yes'], Boolean],
      e: false
    }
  ],

  filter: [
    {
      i: [[
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false }
      ], function (o) { return !o.active; }],
      e: [{ 'user': 'fred', 'age': 40, 'active': false }]
    },
    {
      i: [[
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false }
      ], { 'age': 36, 'active': true }],
      e: [{ 'user': 'barney', 'age': 36, 'active': true }]
    },
    {
      i: [[
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false }
      ], ['active', false]],
      e: [{ 'user': 'fred', 'age': 40, 'active': false }]
    },
    {
      i: [["abc", "def"], /ef/],
      e: ["def"]
    }
  ],

  find: [
    {
      i: [[
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1, 'active': true }
      ], function (o) { return o.age < 40; }],
      e: { 'user': 'barney', 'age': 36, 'active': true },
    },
    {
      i: [[
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1, 'active': true }
      ], { 'age': 1, 'active': true }],
      e: { 'user': 'pebbles', 'age': 1, 'active': true }
    }
  ],

  flatMap: [
    {
      i: [[1, 2], function duplicate(n) {
        return [n, n];
      }],
      e: [1, 1, 2, 2]
    }
  ],

  flatMapDepth: [
    {
      i: [[1, 2], function duplicate(n) {
        return [[[n, n]]];
      }, 2],
      e: [[1, 1], [2, 2]]
    }
  ],

  forEach: [
    {
      i: [{ 'a': 1, 'b': 2 }, function (value, key) {
        // console.log(value);
      }],
      e: { 'a': 1, 'b': 2 }
    },
    {
      i: [[1, 2], function (value, key) {
        // console.log(value);
      }],
      e: [1, 2]
    }
  ],

  groupBy: [
    {
      i: [[6.1, 4.2, 6.3], Math.floor],
      e: { '4': [4.2], '6': [6.1, 6.3] }
    },
    {
      i: [['one', 'two', 'three'], 'length'],
      e: { '3': ['one', 'two'], '5': ['three'] }
    }
  ],

  keyBy: [
    {
      i: [[
        { 'dir': 'left', 'code': 97 },
        { 'dir': 'right', 'code': 100 }
      ], function (o) {
        return String.fromCharCode(o.code);
      }],
      e: { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
    }
  ],

  map: [
    {
      i: [[4, 8], function square(n) {
        return n * n;
      }],
      e: [16, 64]
    },
    {
      i: [[
        { 'user': 'barney' },
        { 'user': 'fred' }
      ], 'user'],
      e: ['barney', 'fred']
    },
    {
      i: [{ 'a': 4, 'b': 8 }, function square(n) {
        return n * n;
      }],
      e: [16, 64]
    },
    {
      i: [[{ a: { b: 1 } }, { a: { b: 2 } }], 'a.b'],
      e: [1, 2]
    },
    {
      i: [[1, 2, 3], function (v, i, o) { return v + i + o.length * 2 }],
      e: [7, 9, 11]
    }
  ],

  reduce: [
    {
      i: [[1, 2], function (sum, n) {
        return sum + n;
      }, 0],
      e: 3
    },
    {
      i: [{ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
        (result[value] || (result[value] = [])).push(key);
        return result;
      }, {}],
      e: { '1': ['a', 'c'], '2': ['b'] }
    }
  ],

  reduceRight: [
    {
      i: [[[0, 1], [2, 3], [4, 5]], function (flattened, other) {
        return flattened.concat(other);
      }, []],
      e: [4, 5, 2, 3, 0, 1]
    }
  ],

  reject: [
    {
      i: [[
        { 'user': 'barney', 'age': 36, 'active': false },
        { 'user': 'fred', 'age': 40, 'active': true }
      ], function (o) { return !o.active; }],
      e: [{ 'user': 'fred', 'age': 40, 'active': true }]
    },
    {
      i: [[
        { 'user': 'barney', 'age': 36, 'active': false },
        { 'user': 'fred', 'age': 40, 'active': true }
      ], ['active', false]],
      e: [{ 'user': 'fred', 'age': 40, 'active': true }]
    }
  ],

  size: [
    {
      i: [[1, 2, 3]],
      e: 3
    },
    {
      i: [{ 'a': 1, 'b': 2 }],
      e: 2
    },
    {
      i: ['pebbles'],
      e: 7
    }
  ],

  some: [
    {
      i: [[null, 0, 'yes', false], Boolean],
      e: true
    },
    {
      i: [users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
      ], { 'user': 'barney', 'active': false }],
      e: false
    }
  ],

  sortBy: [
    {
      i: [[
        { 'user': 'fred', 'age': 48 },
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred', 'age': 40 },
        { 'user': 'barney', 'age': 34 }
      ], [function (o) { return o.user; }]],
      e: [{ 'user': 'barney', 'age': 36 },
      { 'user': 'barney', 'age': 34 },
      { 'user': 'fred', 'age': 48 },
      { 'user': 'fred', 'age': 40 }]
    },
    {
      i: [[{ 'user': 'fred', 'age': 48 },
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred', 'age': 40 },
      { 'user': 'barney', 'age': 34 }
      ], ['user', 'age']],
      e: [{ 'user': 'barney', 'age': 34 },
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred', 'age': 40 },
      { 'user': 'fred', 'age': 48 }]
    }
  ],

  isArguments: [
    {
      i: [function () { return arguments; }()],
      e: true
    },
    {
      i: [[1, 2, 3]],
      e: false
    }
  ],

  isEqual: [
    {
      i: [{ 'a': 1 }, { 'a': 1 }],
      e: true
    },
    {
      i: [[1, 2, 3], [1, 2, 3]],
      e: true
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
      console.log('result: ' + result)
    }
  }
}

// ***************** iteratee ************************
// console.log('-------------------------------')
// console.log('iteratee')

// var users = [
//   { 'user': 'barney', 'age': 36, 'active': true },
//   { 'user': 'fred',   'age': 40, 'active': false }
// ];

// var it = sanvvv.iteratee({ 'user': 'barney', 'active': true })
// console.log(users.filter(x => it(x)))

// var it = sanvvv.iteratee(['user', 'fred'])
// console.log(users.filter(x => it(x)))

// var it = sanvvv.iteratee('user')
// console.log(users.map(x => it(x)), 'expect: ["barney", "fred"]')
// **************************************************

console.log('-------------------------------')
console.log('complete')
console.log('-------------------------------')
