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
    let res = array.slice(0, array.length)

    if (values) {
      for (var item of values) {
        res = res.filter(element => item.indexOf(element) === -1)
      }
    }
    return res
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
  
  // util
  identity: function (...value) {
    return value[0]
  }
}