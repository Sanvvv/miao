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

  // var tag = false
  // values.forEach(el => {
  //   if (comparator(item, el)) tag = true
  // })
  // if (tag) return false
  // else return true

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
    var res = []

    array.forEach(item => {
      if (Array.isArray(item)) {
        item.forEach(element => res.push(element))
      } else res.push(item)
    })

    return res
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
    // TODO: this method mutates array
    return values.reduce((acc, cur) => acc.filter(item => item !== cur), array)
  },

  pullAll: function (array, values) {
    // TODO: this method mutates array
    return values.reduce((acc, cur) => acc.filter(item => item !== cur), array)
  },

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

  union: function (...arrays) {
    return sanvvv.uniq(arrays.reduce((acc, cur) => {
      acc.push(...cur)
      return acc
    }, []))
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

  unzip: function (array) {
    return sanvvv.zip(...array)
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
    }, [[], []])
  },

  // reduce: function (collection, iteratee, accumulator) {
  //   iteratee = iteratee || sanvvv.identity
  //   var f = sanvvv.iteratee(predicate)
  // },
  
  isArguments: function (value) {
    return Object.prototype.toString.call(value) === '[object Arguments]'
  },

  isArray: function (value) {
    return Object.prototype.toString.call(value) === '[object Array]'
  },

  isObject: function (value) {
    return typeof value !== null && typeof value === 'object' || typeof value === 'function'
  },

  isPlainObject: function (value) {
    return Object.prototype.toString.call(value) === '[object Object]'
  },

  isEqual: function (value, other) {
    if (value === other) return true
    if (value !== value && other !== other) return true

    // more...

    if (Object.prototype.toString.call(value) !== Object.prototype.toString.call(other)) return false

    if (sanvvv.isObject(value)) {
      for (var key in other) {
        if (!sanvvv.isEqual(value[key], other[key])) return false
      }
      return true
    }

    return false
  },

  identity: function (...value) {
    return value[0]
  },

  iteratee: function (iter) {
    // TODO: a.b

    // isObject
    if (sanvvv.isPlainObject(iter)) {
      return obj => {
        for (var property in iter) {
          if (!sanvvv.isEqual(obj[property], iter[property])) return false
        }
        return true
      }
    }

    // isArray
    if (sanvvv.isArray(iter)) {
      // !!! 只写了数组 length === 2 的情况
      return obj => sanvvv.isEqual(obj[iter[0]], iter[1])
    }

    // isString && reg
    if (typeof iter === 'string') {
      var reg = /(?<=\/).*?(?=\/)/
      var isReg = reg.exec(iter)
      if (isReg) {
        var r = new RegExp(isReg[0])
        return obj => r.exec(obj)
      } else {
        return obj => obj[iter]
      }
    }
    
    // isFunction
    if (typeof iter === 'function') return iter
  },
}