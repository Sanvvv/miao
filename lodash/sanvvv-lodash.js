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

  iteratee: function (iter) {
    if (typeof iter === 'string') return obj => obj[iter]
    else return iter
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

  identity: function (...value) {
    return value[0]
  },

  drop: function (array, n = 1) {
    if (n < 0) return array.slice(0, array.length)
    else return array.slice(n, array.length)
  },

  dropRight: function (array, n = 1) {
    if (n >= array.length) return []
    else return array.slice(0, array.length - n)
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
    return values.reduce((acc, cur) => acc.filter(item => item !== cur), array)
  },

  pullAll: function (array, values) {
    return values.reduce((acc, cur) => acc.filter(item => item !== cur), array)
  },

  pullAt: function (array, indexes) {
    var res = []
    var count = 0

    indexes.forEach(i => {
      //  !!!
      var temp = array.splice(i - count, i - count)
      if (temp.length) {
        res.push(temp[0])
        count++
      }
    })
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
    var set = new Set()
    return array.filter(item => {
      if (!set.has(item)) {
        set.add(item)
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

  // zipObjectDeep: function (props = [], values = []) {
  //   var res = {}

  //   props.forEach((item, index) => {
  //     var paths = item.split('.')     
  //   })
  // },

  isEqual: function (value, other) {
    if (value === other) return true
    if (value !== value && other !== other) return true

    // more...

    if (typeof value === 'object') {
      if (typeof other !== 'object') return false
      for (var key in other) {
        if (!sanvvv.isEqual(value[key], other[key])) return false
      }
      return true
    }
    return false
  }
}