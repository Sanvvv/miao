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
        res = res.filter((element) => item.indexOf(element) === -1)
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
}