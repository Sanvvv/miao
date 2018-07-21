var sanvvv = {
  chunk: function (array, size = 1) {
    var res = []
     
    for (var i = 0; i < array.length; i += size) {
      res.push(array.slice(i, i + size))
    }
    return res
  },

  compact: function (array) {
    return array.filter(element => element)
  },

  concat: function (array, ...values) {
    var res = []

    for (var item of array) {
      res.push(item)
    }
    for (var item of values) {
      if (Array.isArray(item)) res.push(...item)
      else res.push(item)
    }

    return res
  },

  difference: function (array, ...values) {
    return values.reduce((acc, cur) => acc.filter(item => cur.indexOf(item) === -1), array)
  },

  differenceBy: function (array, values, iteratee = sanvvv.identity) {
    var f = sanvvv.iteratee(iteratee)
    var differBy = values.map(x => f(x))

    return array.filter(item => differBy.indexOf(f(item)) === -1)
  },

  differenceWith: function (array, values, comparator) {
    return array.filter(arr => values.every(value => !comparator(arr, value)))
  },

  drop: function (array, n = 1) {
    return n < 0 ? array.slice(0) : array.slice(n)
  },

  dropRight: function (array, n = 1) {
    if (n >= array.length) return []
    else return array.slice(0, array.length - n)
  },

  dropRightWhile: function (array, predicate = sanvvv.identity) {
    var f = sanvvv.iteratee(predicate)
    var index = -1

    for (var i = array.length - 1; i >= 0; i--) {
      if (!f(array[i])) {
        index = i
        break
      }
    }

    return array.slice(0, index + 1)
  },

  dropWhile: function (array, predicate = sanvvv.identity) {
    var f = sanvvv.iteratee(predicate)
    var index = -1

    for (var i = 0; i < array.length; i++) {
      if (!f(array[i])) {
        index = i
        break
      }
    }

    return array.slice(index, array.length)
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  flatten: function (array) {
    return [].concat(...array)
  },

  findIndex: function (array, predicate = sanvvv.identity, fromIndex = 0) {
    var f = sanvvv.iteratee(predicate)
    return sanvvv.indexOf(array.map(x => f(x)), true, fromIndex)
  },

  findLastIndex: function (array, predicate = sanvvv.identity, fromIndex = array.length - 1) {
    var f = sanvvv.iteratee(predicate)
    return sanvvv.lastIndexOf(array.map(x => f(x)), true, fromIndex)
  },

  flattenDeep: function (array) {
    var res = []

    iterateAndPush(array)
    return res

    function iterateAndPush (arr) {
      arr.forEach(item => {
        if (Array.isArray(item)) iterateAndPush(item)
        else res.push(item)
      })
    }
  },

  flattenDepth: function (array, depth = 1) {
    var res = []

    iterateAndPush(array, 0)
    return res

    function iterateAndPush (arr, deep) {
      arr.forEach(item => {
        if (Array.isArray(item) && deep < depth) iterateAndPush(item, deep + 1)
        else res.push(item)
      })
    }
  },

  fromPairs: function (pairs) {
    var res = {}

    pairs.forEach(item => res[item[0]] = item[1])
    return res
  },

  head: function (array) {
    return array[0]
  },

  indexOf: function (array, value, fromIndex = 0) {
    if (fromIndex < 0) fromIndex += array.length
    for (var i = fromIndex; i < array.length; i++) {
      if (value !== value && array[i] !== array[i]) return i
      else if (array[i] === value) return i
    }
    return -1
  },

  initial: function (array) {
    return array.slice(0, array.length - 1)
  },

  intersection: function (...arrays) {
    return arrays.reduce((acc, cur) => acc.filter(item => cur.indexOf(item) !== -1))
  },

  intersectionBy: function (...rest) {
    var iteratee = sanvvv.identity
    // isArray
    if (Object.prototype.toString.call(rest[rest.length - 1]) !== '[object Array]') {
      iteratee = rest.pop()
    }
    var f = sanvvv.iteratee(iteratee)
    
    return rest.reduce((acc, cur) => acc.filter(item => cur.map(x => f(x)).indexOf(f(item)) !== -1))
  },

  intersectionWith: function (...rest) {
    var comparator = rest.pop()
    return rest.reduce((acc, cur) => acc.filter(item => cur.some(el => comparator(item, el))))
  },

  join: function (array, seperator = ',') {
    return array.reduce((acc, cur) => '' + acc + seperator + cur)
  },

  last: function (array) {
    return array[array.length - 1]
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    if (fromIndex < 0) fromIndex += array.length
    for (var i = fromIndex; i >= 0; i--) {
      if (value !== value && array[i] !== array[i]) return i
      else if (array[i] === value) return i
    }
    return -1
  },

  nth: function (array, n = 0) {
    return n >= 0 ? array[n] : array[array.length + n]
  },

  pull: function (array, ...values) {
    return sanvvv.pullAllBy(array, values)
  },

  pullAll: function (array, values) {
    return sanvvv.pullAllBy(array, values)
  },

  pullAllBy: (array, values, iteratee = sanvvv.identity) => {
    iteratee = sanvvv.iteratee(iteratee)
    array = values.reduce((acc, cur) => acc.filter(item => iteratee(item) !== iteratee(cur)), array)
    return array
  },

//   pullAllWith: (array, values, comparator) => {
    
//   },

  pullAt: function (array, indexes) {
    var res = []
    var slow = 0
    var index = 0

    indexes.sort((a, b) => a - b)

    for (var i = 0; i < array.length; i++) {
      if (i === indexes[index]) {
        res.push(array[i])
        index++
      } else {
        array[slow] = array[i]
        slow++
      }
    }

    array.splice(slow, array.length)
    return res
  },

  reverse: function (array) {
    var len = array.length - 1

    for (var i = 0; i < len / 2; i++) {
      [array[i], array[len - i]] = [array[len - i], array[i]]
    }
    return array
  },

  slice: function (array, start = 0, end = array.length) {
    if (start < 0) start += array.length
    if (end < 0) end += array.length
    return array.filter((item, index) => index >= start && index < end)
  },

  sortedIndex: function (array, value) {
    var left = 0
    var right = array.length
    var mid = Math.floor((left + right) / 2)

    while (right - left > 1) {
      if (array[mid] >= value) right = mid
      else left = mid
      mid = Math.floor((left + right) / 2)
    }

    if (array[mid] < value) mid++
    return mid
  },

  sortedIndexOf: function (array, value) {
    var left = 0
    var right = array.length
    var mid = Math.floor((left + right) / 2)

    while (right - left > 1) {
      if (array[mid] >= value) right = mid
      else left = mid
      mid = Math.floor((left + right) / 2)
    }

    if (array[mid] < value) mid++
    if (array[mid] !== value) return -1
    else return mid
  },

  sortedLastIndex: function (array, value) {
    var left = 0
    var right = array.length
    var mid = Math.floor((left + right) / 2)

    while (right - left > 1) {
      if (array[mid] <= value) left = mid
      else right = mid
      mid = Math.floor((left + right) / 2)
    }

    if (array[mid] <= value) mid++
    return mid
  },

  sortedLastIndexOf: function (array, value) {
    var left = 0
    var right = array.length
    var mid = Math.floor((left + right) / 2)

    while (right - left > 1) {
      if (array[mid] <= value) left = mid
      else right = mid
      mid = Math.floor((left + right) / 2)
    }

    if (array[mid] < value) mid++
    if (array[mid] !== value) return -1
    else return mid
  },

  sortedUniq: function (array) {
    return array.filter((item, index) => item !== array[index - 1])
  },

  uniq: function (array) {
    return [...new Set(array)]
  },

  uniqBy: function (array, iteratee = sanvvv.identity) {
    var f = sanvvv.iteratee(iteratee)
    var set = new Set()

    return array.filter(item => {
      var el = f(item)
      if (!set.has(el)) {
        set.add(el)
        return true
      } else return false
    })
  },

  uniqWith: (array, comparator) => {
    return array.reduce((acc, cur) => { 
      for (var obj of acc) {
        if (comparator(obj, cur)) return acc
      }
      acc.push(cur)
      return acc
    }, [])
  },

  tail: function (array) {
    return array.slice(1, array.length)
  },

  take: function (array, n = 1) {
    return array.slice(0, n)
  },

  takeRight: function (array, n = 1) {
    if (n > array.length) n = array.length
    return array.slice(array.length - n, array.length)
  },

  takeRightWhile: (array, predicate = sanvvv.identity) => {
    predicate = sanvvv.iteratee(predicate)
    for (var i = array.length - 1; i >= 0; i--) {
      if (!predicate(array[i])) return sanvvv.takeRight(array, array.length - 1 - i)
    }
    return []
  },

  takeWhile: (array, predicate = sanvvv.identity) => {
    predicate = sanvvv.iteratee(predicate)
    for (var i = 0; i < array.length; i++) {
      if (!predicate(array[i])) return sanvvv.take(array, i)
    }
    return []
  },

  union: function (...arrays) {
    return sanvvv.uniq(arrays.reduce((acc, cur) => {
      acc.push(...cur)
      return acc
    }, []))
  },

  unionBy: (...arrays) => {
    var iteratee = arrays.pop()
    return sanvvv.uniqBy([].concat(...arrays), iteratee)
  },

  unionWith: (...arrays) => {
    var comparator = arrays.pop()
    return sanvvv.uniqWith([].concat(...arrays), comparator)
  },

  without: function (array, ...values) {
    return array.filter(item => values.indexOf(item) === -1)
  },

  
  xor: function (...arrays) {
    var arr =  arrays.reduce((acc, cur) => {
      acc.push(...cur)
      return acc
    }, [])

    // !!!
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))
  },

  zip: function (...arrays) {
    // TODO: reduce
    var res = []

    arrays.forEach(array => {
      var count = 0
      array.forEach(item => {
        if (!res[count]) {
          res[count] = [item]
          count++
        } else {
          res[count].push(item)
          count++
        }
      })
    })

    return res
  },

  zipWith: (...arrays) => {
    var iteratee = sanvvv.identity
    if (typeof arrays[arrays.length - 1] === 'function') iteratee = arrays.pop()
    return sanvvv.zip(...arrays).reduce((acc, cur) => (acc.push(iteratee(...cur)), acc), [])
  },

  unzip: function (array) {
    return sanvvv.zip(...array)
  },

  unzipWith: (arrays, iteratee = sanvvv.identity) => {
    arrays.push(iteratee)
    return sanvvv.zipWith(...arrays)
  },

  zipObject: function (props = [], values = []) {
    var res = {}

    props.forEach((item, index) => res[item] = values[index])
    return res
  },

  zipObjectDeep: function (props = [], values = []) {
    var res = {}

    props.forEach((item, index) => {
      var paths = item.split('.')
      helper(paths, 0, res, values[index])
    })
    return res

    function helper (paths, index, obj, val) {
      var path = paths[index]

      // 终止条件
      if (index === paths.length - 1) return obj[path] = val

      // 处理数组/对象情况
      if (path.indexOf('[') !== -1) {
        var left = path.indexOf('[')
        var right = path.indexOf(']')
        var i = path.slice(right - 1, right)
        path = path.slice(0, left)

        if (!obj[path]) obj[path] = []
        obj[path][i] = {}
        return helper(paths, index + 1, obj[path][i], val)
      } else {
        if (!obj[path]) obj[path] = {}
        return helper(paths, index + 1, obj[path], val)
      }
    }
  },

  countBy: function (collection, iteratee = sanvvv.identity) {
    var f = sanvvv.iteratee(iteratee)
    return collection.reduce((acc, cur) => {
      var val = f(cur)
      if (!acc[val]) acc[val] = 1
      else acc[val]++ 
      return acc
    }, {})
  },

  every: function (collection, predicate = sanvvv.identity) {
    var f = sanvvv.iteratee(predicate)
    for (var item of collection) {
      if (!f(item)) return false
    }
    return true
  },

  filter: function (collection, predicate = sanvvv.identity) {
    var f = sanvvv.iteratee(predicate)
    return collection.reduce((acc, cur) => {
      if (f(cur)) acc.push(cur)
      return acc
    }, [])
  },

  find: function (collection, predicate = sanvvv.identity, fromIndex = 0) {
    var f = sanvvv.iteratee(predicate)
    for (var item of collection) {
      if (f(item)) return item
    }
  },

  flatMap: function (collection, iteratee = sanvvv.identity) {
    var f = sanvvv.iteratee(iteratee)
    return sanvvv.flatten(collection.map(x => f(x)))
  },

  flatMapDepth: function (collection, iteratee = sanvvv.identity, depth = 1) {
    var f = sanvvv.iteratee(iteratee)
    return sanvvv.flattenDepth(collection.map(x => f(x)), depth)
  },

  forEach: function (collection, iteratee = sanvvv.identity) {
    for (var [key, value] of Object.entries(collection)) {
      iteratee(value, key)
    }
    return collection
  },

  groupBy: function (collection, iteratee = sanvvv.identity) {
    var f = sanvvv.iteratee(iteratee)
    return collection.reduce((acc, cur) => {
      var val = f(cur)
      if (!acc[val]) acc[val] = [cur]
      else acc[val].push(cur)
      return acc
    }, {})
  },

  keyBy: function (collection, iteratee = sanvvv.identity) {
    var f = sanvvv.iteratee(iteratee)
    return collection.reduce((acc, cur) => {
      acc[f(cur)] = cur
      return acc
    }, {})
  },

  map: function (collection, iteratee = sanvvv.identity) {
    var f = sanvvv.iteratee(iteratee)
    return Object.values(collection).reduce((acc, cur, index, array) => {
      acc.push(f(cur, index, array))
      return acc
    }, [])
  },

  partition: function (collection, predicate = sanvvv.identity) {
    var f = sanvvv.iteratee(predicate)
    return collection.reduce((acc, cur) => {
      if (f(cur)) acc[0].push(cur)
      else acc[1].push(cur)
      return acc
    }, [[],[]])
  },

  reduce: function (collection, iteratee, accumulator) {
    iteratee = iteratee || sanvvv.identity
    collection = Object.entries(collection)
    acc = collection[0][1]
    var f = sanvvv.iteratee(iteratee)
    var i = 1

    if (accumulator !== undefined) {
      acc = accumulator
      i = 0
    }

    for (; i < collection.length; i++) {
      acc = f(acc, collection[i][1], collection[i][0])
    }

    return acc
  },

  reduceRight: function (collection, iteratee, accumulator) {
    iteratee = iteratee || sanvvv.identity
    collection = Object.entries(collection)
    var len = collection.length
    var f = sanvvv.iteratee(iteratee)
    var end = 1

    if (accumulator !== undefined) {
      acc = accumulator
      end = 0
    } else acc = collection[len - 1]

    for (var i = len - 1; i >= end; i--) {
      acc = f(acc, collection[i][1], collection[i][0])
    }

    return acc
  },
  
  /**
   * @param  {Array|Object} collection
   * @param  {Function} [predicate=sanvvv.identity]
   * @return {Array} returns new array
   */
  reject: function (collection, predicate = sanvvv.identity) {
    var f = sanvvv.iteratee(predicate)
    return collection.reduce((acc, cur) => {
      if (!f(cur)) acc.push(cur)
      return acc
    }, [])
  },

  /**
   * @param  {Array|Object} collection
   * @return {*}
   */
  sample: function (collection) {
    var co = Object.entries(collection)
    var samp = co[~~(Math.random() * co.length)]
    if (sanvvv.isArray(collection)) return samp[1]
    else return {[samp[0]]: samp[1]}
  },

  /**
   * @param  {Array|Object} collection
   * @return {Array} returns new array
   */
  shuffle: function (collection) {
    // TODO: param Object
    var res = collection.slice(0)
    var len = collection.length

    for (var i = 0; i < res.length; i++) {
      var rdIndex = ~~(Math.random() * (len - i) + i)
      var temp = res[i]
      res[rdIndex] = temp
      res[i] = res[rdIndex]
    }

    return res
  },
  
  /**
   * @param  {Array|Object|string} collection array-like values
   * @return {number} the collection size
   */
  size: function (collection) {
    return Object.keys(collection).length
  },

  /**
   * @param  {Array|Object} collection
   * @param  {Function} [predicate=sanvvv.identity]
   * @return {boolean}
   */
  some: function (collection, predicate = sanvvv.identity) {
    var f = sanvvv.iteratee(predicate)
    for (var item of collection) {
      if (f(item)) return true
    }
    return false
  },

  /**
   * @param  {Array|Object} collection
   * @param  {Function[]} [iteratees=sanvvv.identity]
   * @return {Array} returns new array
   */
  sortBy: function (collection, iteratees = [sanvvv.identity]) {
    // TODO: param Object
    var iters = iteratees.map(x => sanvvv.iteratee(x))
    var co = collection.slice(0)

    for (var i = iters.length - 1; i >= 0; i--) {
      co = collection.sort((a, b) => {
        a = '' + iters[i](a)
        b = '' + iters[i](b)
        return a.localeCompare(b)
      })
    }

    return co
  },

  isArguments: function (value) {
    return Object.prototype.toString.call(value) === '[object Arguments]'
  },

  isArray: function (value) {
    return Object.prototype.toString.call(value) === '[object Array]'
  },

  isArrayBuffer: function (value) {
    return Object.prototype.toString.call(value) === '[object ArrayBuffer]'
  },

  isArrayLike: function (value) {
    return !sanvvv.isNil(value) && value.hasOwnProperty('length') && typeof value !== 'function'
  },

  isBoolean: function (value) {
    return Object.prototype.toString.call(value) === '[object Boolean]'
  },

  isDate: function (value) {
    return Object.prototype.toString.call(value) === '[object Date]'
  },

  isElement: function (value) {
    return value !== null && typeof value === 'object' && value.nodeType === 1
  },

  isEmpty: function (value) {
    return sanvvv.isNil(value) || Object.values(value).length === 0
  },
  
  isError: function (value) {
    return value instanceof Error === true
  },

  isFinite: function (value) {
    return Number.isFinite(value)
  },

  isFunction: function (value) {
    return typeof value === 'function'
  },

  isInteger: function (value) {
    return Number.isInteger(value)
  },

  isLength: function (value) {
    return sanvvv.isNumber(value) && value >= 0 && value < Number.MAX_SAFE_INTEGER && value === Math.floor(value)
  },

  isMap: function (value) {
    return Object.prototype.toString.call(value) === '[object Map]'
  },

  isMatch: function (object, source) {
    for (var key in source) {
      if (!sanvvv.isEqual(object[key], source[key])) return false
    }
    return true
  },

  isNaN: function (value) {
    return Object.prototype.toString.call(value) === '[object Number]' && isNaN(value)
  },

  isNil: function (value) {
    return value === null || value === undefined
  },

  isNull: function (value) {
    return value === null 
  },

  isNumber: function (value) {
    return Object.prototype.toString.call(value) === '[object Number]'
  },

  isObject: function (value) {
    return value !== null && typeof value === 'object' || typeof value === 'function'
  },

  isObjectLike: function (value) {
    return typeof value === 'object' && value !== null
  },

  isPlainObject: function (value) {
    // !!!
    if (!Object.prototype.toString.call(value) === '[object Object]') return false
    if (value.constructor === Object) return true
    return false
  },

  isRegExp: function (value) {
    return Object.prototype.toString.call(value) === '[object RegExp]'
  },

  isSafeInteger: function (value) {
    return sanvvv.isInteger(value) && value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER
  },

  isSet: function (value) {
    return Object.prototype.toString.call(value) === '[object Set]'
  },

  isString: function (value) {
    return Object.prototype.toString.call(value) === '[object String]'
  },

  isSymbol: function (value) {
    return typeof value === 'symbol'
  },

  isUndefined: function (value) {
    return typeof value === 'undefined'
  },

  isWeakMap: function (value) {
    return Object.prototype.toString.call(value) === '[object WeakMap]'
  },

  isWeakSet: function (value) {
    return Object.prototype.toString.call(value) === '[object WeakSet]'
  },

  isEqual: function (value, other) {
    if (value === other) return true
    if (value !== value && other !== other) return true
    if (Object.prototype.toString.call(value) !== Object.prototype.toString.call(other)) return false

    // more...

    if (sanvvv.isObject(value)) {
      var val = Object.keys(value)
      var oth = Object.keys(other)

      if (val.length !== oth.length) return false
      for (var key of val) {
        if (!sanvvv.isEqual(value[key], other[key])) return false
      }
      return true
    }

    return false
  },

  /**
   * @param  {*} value
   * @return {Array} Returns the converted array
   */
  toArray: value => {
    if (!sanvvv.isNil(value) && sanvvv.isArrayLike(value) || sanvvv.isObjectLike(value)) {
      return Object.values(value)
    } else return []
  },

  /**
   * @param  {number} number
   * @param  {number} [precision=0]
   * @return {number} Returns the rounded up number
   */
  ceil: (number, precision = 0) => Math.ceil(number * 10 ** precision) / 10 ** precision,

  /**
   * @param  {Array} array
   * @return {*}
   */
  max: array => sanvvv.maxBy(array),

  /**
   * @param  {Array} array
   * @param  {Function} [iteratee=sanvvv.identity]
   * @return {*} Returns the maximum value or undefined
   */
  maxBy: (array, iteratee = sanvvv.identity) => {
    if (!array.length) return undefined
    var f = sanvvv.iteratee(iteratee)
    return array.reduce((acc, cur) => f(acc) > f(cur) ? acc : cur)
  },

  /**
   * @param  {Array} array
   * @return {*}
   */
  min: array => sanvvv.minBy(array),

  /**
   * @param  {Array} array
   * @param  {Function} [iteratee=sanvvv.identity]
   * @return {*} Returns the minimum value or undefined
   */
  minBy: (array, iteratee = sanvvv.identity) => {
    if (!array.length) return undefined
    var f = sanvvv.iteratee(iteratee)
    return array.reduce((acc, cur) => f(acc) < f(cur) ? acc : cur)
  },

  /**
   * @param  {number} number
   * @param  {number} [precision=0]
   * @return {number} Returns the rounded up number
   */
  round: (number, precision = 0) => Math.round(number * 10 ** precision) / 10 ** precision,
  
  /**
   * @param  {Array} array
   * @return {number}
   */
  sum: array => sanvvv.sumBy(array),

  /**
   * @param  {Array} array
   * @param  {Function} [iteratee=sanvvv.identity]
   * @return {number}
   */
  sumBy: (array, iteratee = sanvvv.identity) => {
    var f = sanvvv.iteratee(iteratee)
    return array.reduce((acc, cur) => acc += f(cur), 0)
  },

  /**
   * @param  {number} [lower=0]
   * @param  {number} [upper=1]
   * @param  {boolean} floating
   * @return {}
   * @retrun {number}
   */
  // random: (lower = 0, upper = 1, floating) => {
  //   return Math.random() * (upper - lower) + lower
  // },

  /**
   * @param  {Object} object
   * @param  {...Object} ...sources
   * @return {Object}
   */
  assign: (object, ...sources) => {
    return sources.reduce((acc, cur) => {
      for (var [key, value] of Object.entries(cur)) acc[key] = value
      return acc
    }, object)
  },

  /**
   * @param  {Object} object
   * @param  {...Object} ...sources
   * @return {Object}
   */
  assignIn: (object, ...sources) => {
    return sources.reduce((acc, cur, key) => {
      for (var key in cur) acc[key] = cur[key]
      return acc
    }, object)
  },

  /**
   * @param  {Object} object
   * @param  {...Object} ...sources
   * @return {Object}
   */
  defaults: (object, ...sources) => {
    return sources.reduce((acc, cur, key) => {
      for (var [key, value] of Object.entries(cur)) {
        if (acc[key] === undefined) acc[key] = value
      }
      return acc
    }, object)
  },

  /**
   * @param  {Object} object
   * @param  {Function} [predicate=sanvvv.identity]
   * @return {*}
   */
  findKey: (object, predicate = sanvvv.identity) => {
    predicate = sanvvv.iteratee(predicate)
    for (var key in object) {
     if (predicate(object[key])) return {[key]: object[key]}
    }
    return undefined
  },

  /**
   * @param  {Object} object
   * @param  {Function} [iteratee=sanvvv.identity]
   * @return {Object}
   */
  forIn: (object, iteratee = sanvvv.identity) => {
    for (var key in object) {
      var flag = iteratee(object[key], key, object)
      if (flag === false) return object
    }
    return object
  },

  /**
   * @param  {Object} object
   * @param  {Function} [iteratee=sanvvv.identity]
   * @return {Object}
   */
  forInRight: (object, iteratee = sanvvv.identity) => {
    var reg = []
    for (var key in object) reg.push(key)
    while (reg.length) {
      var key = reg.pop()
      var flag = iteratee(object[key], key, object)
      if (flag === false) return object
    }
    return object
  },

  /**
   * @param  {Object} object
   * @param  {Function} [iteratee=sanvvv.identity]
   * @return {Object}
   */
  // forOwn: function (object, iteratee = sanvvv.identity) {
  //   return Object.keys(object).sanvvv.forEach(object, iteratee)
  // },

  /**
   * @param  {Object} object
   * @param  {Function} [iteratee=sanvvv.identity]
   * @return {Object}
   */
  // forOwnRight: function (object, iteratee = sanvvv.identity) {
  //   return Object.keys(object).sanvvv.forEachRight(object, iteratee)
  // },

  /**
   * @param  {Object} object
   * @return {Array} Returns the function names
   */
  functions: object => Object.keys(object),

  /**
   * @param  {Object} object
   * @param  {Array|string} path
   * @param  {*} defaultValue
   * @return {*}
   */
  // get: function (object, path, defaultValue) {
  //   var iteratee = sanvvv.iteratee(path)
  //   return iteratee(object)
  // },

  /**
   * @param  {Object} object
   * @return {Object}
   */
  invert: object => Object.entries(object).reduce((acc, cur) => (acc[cur[1]] = cur[0], acc), {}),

  /**
   * @param  {Object} object
   * @param  {Function} iteratee=sanvvv.identity
   * @return {Object}
   */
  invertBy: (object, iteratee = sanvvv.identity) => {
    iteratee = sanvvv.iteratee(iteratee)
    return Object.entries(object).reduce((acc, cur) => {
      var key = iteratee(cur[1])
      if (acc[key]) acc[key].push(cur[0])
      else acc[key] = [cur[0]]
      return acc
    }, {})
  },

  /**
   * @param  {Object} object
   * @param  {Array|string} path
   * @param  {...*} ...args
   * @return *
   */
  // invoke: function (object, path, ...args) {

  // },
  
  /**
   * @param  {Object} object
   * @return {Array} Returns the array of property names
   */
  keys: object => Object.keys(object),

  /**
   * @param  {Object} object
   * @param  {Function} [iteratee=sanvvv.identity]
   * @return {Object}
   */
  mapKeys: (object, iteratee = sanvvv.identity) => {
    iteratee = sanvvv.iteratee(iteratee)
    return Object.entries(object).reduce((acc, cur) => {
      var key = iteratee(cur[1], cur[0], object)
      acc[key] = cur[1]
      return acc
    }, {})
  },

  /**
   * @param  {Object} object
   * @param  {Function} [iteratee=sanvvv.identity]
   * @return {Object}
   */
  mapValues: (object, iteratee = sanvvv.identity) => {
    iteratee = sanvvv.iteratee(iteratee)
    return Object.entries(object).reduce((acc, cur) => {
      var value = iteratee(cur[1], cur[0], object)
      acc[cur[0]] = value
      return acc
    }, {})
  },

  /**
   * @param  {Object} object
   * @param  {...Object} ...source
   * @return {Object}
   */
  // merge: (object, ...source) => {
  //   return source.reduce((acc, cur) => {

  //   }, object)
  // },

  /**
   * @param  {Object} object
   * @param  {...(string|string[])} ...paths
   * @return {Object}
   */
  omit: (object, ...paths) => {
    var res = {}
    paths = sanvvv.flatten(paths)
    
    for (var key in object) {
      if (paths.indexOf(key) === -1) res[key] = object[key]
    }

    return res
  },

  /**
   * @param  {Object} object
   * @param  {...(string|string[])} ...paths
   * @return {Object}
   */
  pick: (object, ...paths) => {
    return sanvvv.flatten(paths).reduce((acc, cur) => {
      if (object[cur] !== undefined) acc[cur] = object[cur]
      return acc
    }, {})
  },

  /**
   * @param  {Object} object
   * @return {Array}
   */
  toPairs: object => [Object.entries(object)],

  /**
   * @param  {Object} object
   * @return {Array}
   */
  values: object => Object.values(object),

  /**
   * @param  {Function} func
   * @param  {...*} ...args
   * @return {*}  Returns the func result or error object
   */
  attempt: (func, ...args) => {
    try {
      return func(...args)
    } catch (e) {
      return e
    }
  },

  /**
   * @param  {Object} object
   * @param  {...(string|string[])} methodNames
   * @return {Object}
   */
  // bindAll: (object, methodNames) => {

  // }

  /**
   * @param  {Array} pairs
   * @return {Function}
   */
  cond: pairs => match => {
    // TODO: 并绑定 this ???
    for (var func of pairs) {
      if (func[0](match)) return func[1]()
    }
  },

  /**
   * @param  {Object} source
   * @return {Function}
   */
  conforms: source => obj => Object.entries(source).every(src => src[1](obj[src[0]])),

  /**
   * @param  {*} value
   * @return {Function}
   */
  constant: value => () => value,

  /**
   * @param  {*} value
   * @param  {*} defaultValue
   * @return {*}
   */
  defaultTo: (value, defaultValue) => sanvvv.isNil(value) || sanvvv.isNaN(value) ? defaultValue : value,

  /**
   * @param  {...(Function|Function[])} ...funcs
   * @return {Function}
   */
  flow: funcs => (...args) => funcs.reduce((acc, cur) => cur(acc), funcs.shift()(...args)),

  /**
   * @param  {...(Function|Function[])} ...funcs
   * @return {Function}
   */
  // flowRight: funcs => (...args) => sanvvv.reduceRight(funcs, (acc, cur) => cur(acc), funcs.pop()(...args)),

  
  /**
   * This method returns the first argument it receives
   * 
   * @param  {*} value
   * @return {*}
   */
  identity: value => value,

  /**
   * Creates a function that invokes func with the arguments of the created functions
   *
   * @param  {*} iter
   * @return {Function}
   */
  iteratee: iter => {
    // isObject
    if (Object.prototype.toString.call(iter) === '[object Object]') {
      return sanvvv.matches(iter)
    }

    // isArray
    // TODO: 不应该比较大小
    if (sanvvv.isArray(iter)) {
      // !!! 只写了数组 length === 2 的情况
      return obj => sanvvv.isEqual(obj[iter[0]], iter[1])
    }

    // isRegExp
    // /(?<=\/).*?(?=\/)/
    if (sanvvv.isRegExp(iter)) {
      return str => iter.exec(str)
    }

    // isString
    if (typeof iter === 'string') {
      return sanvvv.method(iter)
    }
    
    // isFunction
    if (typeof iter === 'function') return iter
  },

  /**
   * Creates a function that performs a partial deep comparison 
   * between a given object and source
   * the function returns boolean
   * 
   * @param  {Object} source
   * @return {Function}
   */
  matches: source => obj => {
    for (var property in source) {
      if (!sanvvv.isEqual(obj[property], source[property])) return false
    }
    return true
  },

  
  /**
   * Creates a function that performs a partial deep comparison 
   * between the value at path of a given object to srcValue
   * the function returns boolean
   * 
   * @param  {Array|string} path
   * @param  {*} srcValue
   * @return {Function}
   */
  matchesProperty: (path, srcValue) => obj => sanvvv.isEqual(sanvvv.method(path), srcValue),

  /**
   * Creates a function that invokes the method at path of a given object
   * the function returns value
   * 
   * @param  {Array|string} path
   * @param  {...*} args
   * @return {Function}
   */
  method: (path, ...args) => obj => {
    // TODO: args: The arguments to invoke the method with
    var p = path.slice(0)
    if (typeof path === 'string') p = path.split('.')
    return p.reduce((acc, cur) => acc[cur], obj[p.shift()])
  },

//   methodOf: (object, ...args) => param => {
//     // The arguments to invoke the method with
//     if (typeof param === 'string') {
//       return 'TODO'
//     } else {
//       return object[param[0]][param[1]]
//     }
//   },

//   mixin: (object, source, options) => {
//     // TODO options 链式调用
//     var obj = typeof source === 'object' ? object : sanvvv
//     var src = object
//     var opt = options || {}

//     if (typeof object === 'function') obj = obj.prototype

//     for (var property in src) {
//       var val = src[property]
//       if (typeof val === 'function') obj[property] = val
//     }
//   },
  
//   noop: () => undefined,

//   nthArg: (n = 0) => (...args) => {
//     return n >= 0 ? args[n] : args[args.length + n]
//   },
  
//   property: path => sanvvv.method(path),

//   propertyOf: object => sanvvv.methodOf(object),

//   range: (start, end, step = 1) => {
//     var res = []

//     if (!end) {
//       end = start
//       start = 0 
//     }

//     if (end > 0) {
//       for (var i = start; i < end; i += step) res.push(i)
//     } else {
//       for (var i = start; i > end; i -= Math.abs(step)) res.push(i)
//     }

//     return res
//   },

//   rangeRight: (start, end, step = 1) => {
//     var res = []

//     if (!end) {
//       end = start
//       start = 0 
//     }

//     if (end > 0) {
//       for (var i = start; i < end; i += step) res.unshift(i)
//     } else {
//       for (var i = start; i > end; i -= Math.abs(step)) res.unshift(i)
//     }

//     return res
//   },

//   times: (n, iteratee = sanvvv.identity) => {
//     // TODO: iterate -> sanvvv.iteratee
//     var res = []
//     for (var i = 0; i < n; i++) res.push(iteratee(i))
//     return res
//   },

//   // TODO: 将使用到path的地方都更新使用函数toPath
//   toPath: value => value.replace('[', '.').replace(']', '').split('.'),
  
}
