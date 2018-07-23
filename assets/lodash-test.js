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

  pullAllBy: [
    {
      i: [[{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }], [{ 'x': 1 }, { 'x': 3 }], 'x'],
      e: [{ 'x': 2 }]
    }
  ],

  pullAllWith: [
    {
      i: [[{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }], [{ 'x': 3, 'y': 4 }], sanvvv.isEqual],
      e: [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
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

  unionBy: [
    {
      i: [[2.1], [1.2, 2.3], Math.floor],
      e: [2.1, 1.2]
    },
    {
      i: [[{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'],
      e: [{ 'x': 1 }, { 'x': 2 }]
    }
  ],

  unionWith: [
    {
      i: [[{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }], sanvvv.isEqual],
      e: [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
    }
  ],

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

  xorBy: [
    {
      i: [[2.1, 1.2], [2.3, 3.4], Math.floor],
      e: [1.2, 3.4]
    }
  ],

  xorWith: [
    {
      i: [[{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }], sanvvv.isEqual],
      e: [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
    }
  ],

  zip: [
    {
      i: [['a', 'b'], [1, 2], [true, false]],
      e: [['a', 1, true], ['b', 2, false]]
    }
  ],

  zipWith: [
    {
      i: [[1, 2], [10, 20], [100, 200], function (a, b, c) {
        return a + b + c;
      }],
      e: [111, 222]
    }
  ],

  unzip: [
    {
      i: [[['fred', 30, true], ['barney', 40, false]]],
      e: [['fred', 'barney'], [30, 40], [true, false]]
    }
  ],

  unzipWith: [
    {
      i: [[[1, 10, 100], [2, 20, 200]], function (a, b) { return a + b }],
      e: [3, 30, 300]

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

  includes: [
    {
      i: [[1, 2, 3], 1],
      e: true
    },
    {
      i: [[1, 2, 3], 1, 2],
      e: false
    },
    {
      i: [{ 'a': 1, 'b': 2 }, 1],
      e: true
    },
    {
      i: ['abcd', 'bc'],
      e: true
    },
  ],

  invokeMap: [
    {
      i: [[[5, 1, 7], [3, 2, 1]], 'sort'],
      e: [[1, 5, 7], [1, 2, 3]]
    },
    {
      i: [[123, 456], String.prototype.split, ''],
      e: [['1', '2', '3'], ['4', '5', '6']]
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

  orderBy: [
    {
      i: [[
        { 'user': 'fred', 'age': 48 },
        { 'user': 'barney', 'age': 34 },
        { 'user': 'fred', 'age': 40 },
        { 'user': 'barney', 'age': 36 }
      ], ['user', 'age'], ['asc', 'desc']],
      e: [{ 'user': 'barney', 'age': 36 },
      { 'user': 'barney', 'age': 34 },
      { 'user': 'fred', 'age': 48 },
      { 'user': 'fred', 'age': 40 }]
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
    },
    {
      i: [[1, 2, 3, 4, 5, 6, 7], function (a, b) { return a + b }],
      e: 28
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

  conformsTo: [
    {
      i: [{ 'a': 1, 'b': 2 }, { 'b': function(n) { return n > 1; }, 'a': function(n) { return n >= 1; }}],
      e: true
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

  isPlainObject: [
    {
      i: [document],
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
  ],

  isEmpty: [
    {
      i: [null],
      e: true
    },
    {
      i: [true],
      e: true
    },
    {
      i: [1],
      e: true
    },
    {
      i: [[1, 2, 3]],
      e: false
    },
    {
      i: [{ 'a': 1 }],
      e: false
    },
  ],

  isLength: [
    {
      i: [2],
      e: true
    },
    {
      i: [Number.MIN_VALUE],
      e: false
    },
    {
      i: [Infinity],
      e: false
    },
    {
      i: ['3'],
      e: false
    },
  ],

  isNaN: [
    {
      i: [NaN],
      e: true
    },
    {
      i: [new Number(NaN)],
      e: true
    },
    {
      i: [undefined],
      e: false
    },
    {
      i: [{}],
      e: false
    }
  ],

  isMatch: [
    {
      i: [{ 'a': 1, 'b': 2 }, { 'b': 2 }],
      e: true
    },
    {
      i: [{ 'a': 1, 'b': 2 }, { 'b': 1 }],
      e: false
    }
  ],

  toArray: [
    {
      i: [{ 'a': 1, 'b': 2 }],
      e: [1, 2]
    },
    {
      i: ['abc'],
      e: ['a', 'b', 'c']
    },
    {
      i: [1],
      e: []
    },
    {
      i: [null],
      e: []
    }
  ],

  ceil: [
    {
      i: [4.006],
      e: 5
    },
    {
      i: [6.004, 2],
      e: 6.01
    },
    {
      i: [6040, -2],
      e: 6100
    },
  ],

  max: [
    {
      i: [[4, 2, 8, 6]],
      e: 8
    },
    {
      i: [[]],
      e: undefined
    }
  ],

  maxBy: [
    {
      i: [[{ 'n': 1 }, { 'n': 2 }], function (o) { return o.n; }],
      e: { 'n': 2 }
    },
    {
      i: [[{ 'n': 1 }, { 'n': 2 }], 'n'],
      e: { 'n': 2 }
    }
  ],

  meanBy: [
    {
      i: [[{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], function(o) { return o.n; }],
      e: 5
    },
    {
      i: [[{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n'],
      e: 5
    }
  ],

  minBy: [
    {
      i: [[{ 'n': 1 }, { 'n': 2 }], function (o) { return o.n; }],
      e: { 'n': 1 }
    },
    {
      i: [[{ 'n': 1 }, { 'n': 2 }], 'n'],
      e: { 'n': 1 }
    }
  ],

  round: [
    {
      i: [4.006],
      e: 4
    },
    {
      i: [4.006, 2],
      e: 4.01
    },
    {
      i: [4060, -2],
      e: 4100
    }
  ],

  sumBy: [
    {
      i: [[{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], function (o) { return o.n; }],
      e: 20
    },
    {
      i: [[{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n'],
      e: 20
    },
    {
      i: [[]],
      e: 0
    }
  ],

  // random: [
  //   {
  //     i: [0, 5],
  //     e: 1
  //   },
  //   {
  //     i: [5],
  //     e: 1
  //   },
  //   {
  //     i: [5],
  //     e: 1
  //   },
  //   {
  //     i: [1.2, 5.2],
  //     e: 1
  //   },
  // ],

  // at: [
  //   {
  //     i: [{ 'a': [{ 'b': { 'c': 3 } }, 4] }, ['a[0].b.c', 'a[1]']],
  //     e: [3, 4]
  //   }
  // ],

  defaults: [
    {
      i: [{ 'a': 1 }, { 'b': 2 }, { 'a': 3 }],
      e: { 'a': 1, 'b': 2 }
    }
  ],

  findKey: [
    {
      i: [{
        'barney': { 'age': 36, 'active': true },
        'fred': { 'age': 40, 'active': false },
        'pebbles': { 'age': 1, 'active': true }
      }, function (o) { return o.age < 40; }],
      e: 'barney'
    },
    {
      i: [{
        'barney': { 'age': 36, 'active': true },
        'fred': { 'age': 40, 'active': false },
        'pebbles': { 'age': 1, 'active': true }
      }, { 'age': 1, 'active': true }],
      e: 'pebbles'
    }
  ],

  // get: [
  //   {
  //     i: [{ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c'],
  //     e: 3
  //   },
  //   {
  //     i: [{ 'a': [{ 'b': { 'c': 3 } }] }, ['a', '0', 'b', 'c']],
  //     e: 3
  //   },
  //   {
  //     i: [{ 'a': [{ 'b': { 'c': 3 } }] }, 'a.b.c', 'default'],
  //     e: 'default'
  //   },
  // ],

  invert: [
    {
      i: [{ 'a': 1, 'b': 2, 'c': 1 }],
      e: { '1': 'c', '2': 'b' }
    }
  ],

  invertBy: [
    {
      i: [object = { 'a': 1, 'b': 2, 'c': 1 }],
      e: { '1': ['a', 'c'], '2': ['b'] }
    },
    {
      i: [object = { 'a': 1, 'b': 2, 'c': 1 }, function (value) {
        return 'group' + value;
      }],
      e: { 'group1': ['a', 'c'], 'group2': ['b'] }
    }
  ],

  // invoke: [
  //   {
  //     i: [{ 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] }, 'a[0].b.c.slice', 1, 3],
  //     e: [2, 3]
  //   }
  // ],

  mapKeys: [
    {
      i: [{ 'a': 1, 'b': 2 }, function (value, key) {
        return key + value;
      }],
      e: { 'a1': 1, 'b2': 2 }
    }
  ],

  mapValues: [
    {
      i: [{
        'fred': { 'user': 'fred', 'age': 40 },
        'pebbles': { 'user': 'pebbles', 'age': 1 }
      }, function (o) { return o.age; }],
      e: { 'fred': 40, 'pebbles': 1 }
    },
    {
      i: [{
        'fred': { 'user': 'fred', 'age': 40 },
        'pebbles': { 'user': 'pebbles', 'age': 1 }
      }, 'age'],
      e: { 'fred': 40, 'pebbles': 1 }
    }
  ],

  // merge: [
  //   {
  //     i: [{
  //       'a': [{ 'b': 2 }, { 'd': 4 }]
  //     }, {
  //       'a': [{ 'c': 3 }, { 'e': 5 }]
  //     }],
  //     e: { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
  //   }
  // ],

  omit: [
    {
      i: [{ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']],
      e: { 'b': '2' }
    }
  ],

  pick: [
    {
      i: [{ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']],
      e: { 'a': 1, 'c': 3 }
    }
  ],

  toPairs: [
    {
      i: [{ a: 1, b: 2 }],
      e: [['a', 1], ['b', 2]]
    }
  ],

  camelCase: [
    {
      i: ['Foo Bar'],
      e: 'fooBar'
    },
    {
      i: ['--foo-bar--'],
      e: 'fooBar'
    },
    {
      i: ['__FOO_BAR__'],
      e: 'fooBar'
    }
  ],

  capitalize: [
    {
      i: ['fred-123aSd'],
      e: 'Fred-123asd'
    }
  ],

  endsWith: [
    {
      i: ['abc', 'c'],
      e: true
    },
    {
      i: ['abc', 'b'],
      e: false
    },
    {
      i: ['abc', 'b', 2],
      e: true
    },
  ],

  escape: [
    {
      i: [`!@#$%^&*()<>"'`],
      e: "!@#$%^&amp;*()&lt;&gt;&quot;&#39;"
    }
  ],

  kebabCase: [
    {
      i: ['Foo Bar'],
      e: 'foo-bar'
    },
    // {
    //   i: ['fooBar'],
    //   e: 'foo-bar'
    // },
    {
      i: ['__FOO_BAR__'],
      e: 'foo-bar'
    },
  ],

  lowerCase: [
    {
      i: ['--Foo-Bar--'],
      e: 'foo bar'
    },
    // {
    //   i: ['fooBar'],
    //   e: 'foo bar'
    // },
    {
      i: ['__FOO_BAR__'],
      e: 'foo bar'
    },
  ],

  pad: [
    {
      i: ['abc', 8],
      e: '  abc   '
    },
    {
      i: ['abc', 8, '_-'],
      e: '_-abc_-_'
    },
    {
      i: ['abc', 3],
      e: 'abc'
    },
  ],

  padEnd: [
    {
      i: ['abc', 6, '_-'],
      e: 'abc_-_'
    }
  ],

  padStart: [
    {
      i: ['abc', 6, '_-'],
      e: '_-_abc'
    }
  ],

  repeat: [
    {
      i: ['*', 3],
      e: '***'
    },
    {
      i: ['abc', 2],
      e: 'abcabc'
    },
    {
      i: ['abc', 0],
      e: ''
    },
  ],

  replace: [
    {
      i: ['Hi Fred', 'Fred', 'Barney'],
      e: 'Hi Barney'
    }
  ],

  trim: [
    {
      i: ['-_2-ab_c-dddd_-', '_-'],
      e: '2-ab_c-dddd'
    }
  ],

  trimEnd: [
    {
      i: ['-_-abc-_-', '_-'],
      e: '-_-abc'
    }
  ],

  trimStart: [
    {
      i: ['-_-abc-_-', '_-'],
      e: 'abc-_-'
    }
  ],

  truncate: [
    {
      i: ['hi-diddly-ho there, neighborino'],
      e: 'hi-diddly-ho there, neighbo...'
    },
    {
      i: ['hi-diddly-ho there, neighborino', {
        'length': 24,
        'separator': ' '
      }],
      e: 'hi-diddly-ho there,...'
    },
    {
      i: ['hi-diddly-ho there, neighborino', {
        'length': 24,
        'separator': /,? +/
      }],
      e: 'hi-diddly-ho there...'
    },
    {
      i: ['hi-diddly-ho there, neighborino', {
        'omission': ' [...]'
      }],
      e: 'hi-diddly-ho there, neig [...]'
    },
  ],

  range: [
    {
      i: [4],
      e: [0, 1, 2, 3]
    },
    {
      i: [-4],
      e: [0, -1, -2, -3]
    },
    {
      i: [1, 5],
      e: [1, 2, 3, 4]
    },
    {
      i: [0, 20, 5],
      e: [0, 5, 10, 15]
    },
    {
      i: [0, -4, -1],
      e: [0, -1, -2, -3]
    },
    {
      i: [0],
      e: []
    }
  ],

  times: [
    {
      i: [3, String],
      e: ['0', '1', '2']
    },
    {
      i: [4, sanvvv.constant(0)],
      e: [0, 0, 0, 0]
    }
  ],

  toPath: [
    {
      i: ['a.b.c'],
      e: ['a', 'b', 'c']
    },
    {
      i: ['a[0].b.c'],
      e: ['a', '0', 'b', 'c']
    }
  ]


}

// ----------------------------------------------------------------------------------------

var test2 = function () {

  var iteratee = function () {
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }
    ]

    return [
      {
        i: sanvvv.filter(users, sanvvv.iteratee({ 'user': 'barney', 'active': true })),
        e: [{ 'user': 'barney', 'age': 36, 'active': true }]
      },
      {
        i: sanvvv.map(users, sanvvv.iteratee('user')),
        e: ['barney', 'fred']
      },
      {
        i: sanvvv.filter(['abc', 'def'], /ef/),
        e: ['def']
      }
    ]
  }()

  var assign = function () {
    function Foo() {
      this.a = 1;
    }

    function Bar() {
      this.c = 3;
    }

    Foo.prototype.b = 2;
    Bar.prototype.d = 4;

    return [
      {
        i: sanvvv.assign({ 'a': 0 }, new Foo, new Bar),
        e: { 'a': 1, 'c': 3 }
      }
    ]
  }()

  var assignIn = function () {
    function Foo() {
      this.a = 1;
    }

    function Bar() {
      this.c = 3;
    }

    Foo.prototype.b = 2;
    Bar.prototype.d = 4;

    return [
      {
        i: sanvvv.assignIn({ 'a': 0 }, new Foo, new Bar),
        e: { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
      }
    ]
  }()

  var forIn = function () {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }

    Foo.prototype.c = 3;

    return [
      {
        i: sanvvv.forIn(new Foo, function (value, key) {
          // console.log(key);
        }),
        e: { a: 1, b: 2 }
      }
    ]
  }()

  var method = function () {
    var objects = [
      { 'a': { 'b': sanvvv.constant(2) } },
      { 'a': { 'b': sanvvv.constant(1) } }
    ];

    return [
      {
        i: sanvvv.map(objects, sanvvv.method('a.b')),
        e: [2, 1]
      },
      {
        i: sanvvv.map(objects, sanvvv.method(['a', 'b'])),
        e: [2, 1]
      }
    ]
  }()

  var methodOf = function () {
    var array = [0, 1, 2],
      object = { 'a': array, 'b': array, 'c': array };

    return [
      // {
      //   i: sanvvv.map(['a[2]', 'c[0]'], sanvvv.methodOf(object)),
      //   e: [2, 0]
      // },
      {
        i: sanvvv.map([['a', '2'], ['c', '0']], sanvvv.methodOf(object)),
        e: [2, 0]
      }
    ]
  }()

  var matches = function () {
    var objects = [
      { 'a': 1, 'b': 2, 'c': 3 },
      { 'a': 4, 'b': 5, 'c': 6 }
    ]

    return [
      {
        i: sanvvv.filter(objects, sanvvv.matches({ 'a': 4, 'c': 6 })),
        e: [{ 'a': 4, 'b': 5, 'c': 6 }]
      }
    ]
  }()

  var mixin = function () {
    function vowels(string) {
      return string
    }

    sanvvv.mixin({ 'vowels': vowels });

    return [
      {
        i: sanvvv.vowels('fred'),
        e: 'fred'
      }
    ]
  }()

  var property = function () {
    var objects = [
      { 'a': { 'b': 2 } },
      { 'a': { 'b': 1 } }
    ];

    return [
      {
        i: objects.map(x => sanvvv.property('a.b')(x)),
        e: [2, 1]
      }
    ]
  }()

  return {
    iteratee,
    assign,
    matches,
    forIn,
    assignIn,
    // method,
    methodOf,
    mixin,
    property
  }

}()



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

// ------------------------------------------------------------------------------------------

for (let func in test2) {
  for (let f of test2[func]) {
    let expect = JSON.stringify(f.e)
    let result = JSON.stringify(f.i)

    if (expect !== result) {
      console.log('-------------------------------')
      console.log(func)
      console.log('expect: ' + expect)
      console.log('result: ' + result)
    }
  }
}

console.log('-------------------------------')
console.log('complete')
console.log('-------------------------------')
