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

  differenceBy: function (array, values, iteratee) {
    var res = []

    if (values) {
      for (var item of array) {
        var target = true

        if (typeof iteratee === 'function') {
          for (var value of values) {
            if (iteratee.call(this, item) === iteratee.call(this, value)) {
              target = false
            }
          }
        } else {
          for (var value of values) {
            if (JSON.stringify(item) === JSON.stringify(value)) target = false
          }
        }
        if (target) res.push(item)
      }
      return res
    } else return array.slice(0, array.length)
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
    return array.reduce((acc, cur) => acc + seperator + cur)
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
  },

  slice: function (array, start = 0, end = array.length) {
    if (start < 0) start += array.length
    if (end < 0) end += array.length
    return array.filter((item, index) => index >= start && index < end)
  },

  sortedIndex: function (array, value) {
    var min = 0
    var max = array.length
    var mid = Math.floor((min + max) / 2)

    while (max - min > 1) {
      if (array[mid - 1] < value && value <= array[mid] ) return mid
      else if (array[mid] < value) min = mid
      else max = mid
      
      mid = Math.floor((min + max) / 2)
    }

    if (array[mid] < value) mid++
    return mid
  }
}