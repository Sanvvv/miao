var Sanvvv = {
  chucnk: function (array, size = 1) {
    var res = []
     
    for (var i = 0; i < array.length; i += size) {
      arr.push(array.slice(i, i + size))
    }
    return res
  },

  compact: function (array) {
    return array.filter((element) => element != false)
  },

  concat: function (array, ...values) {
    var res = []

    for (var item of array) {
      res.push(item)
    }
    for (var item of values) {
      // isArray()
      if (Array.isArray(item)) res.push(...item)
      else res.push(item)
    }
    return res
  },

  difference: function (array, values) {
    if (values) {
      return array.filter((element) => values.indexOf(element) === -1)
    } else return array.slice(0, array.length)
  },

  differenceBy: function (array, values, iteratee) {
    var res = []

    if (values) {
      for (var item of array) {
        var target = true

        if (iteratee) {
          for (var value of values) {
            if (iteratee.call(this, item) === iteratee.call(this, value)) {
              target = false
            }
          }
        }
        if (target) res.push(item)
      }
      return res
    } else return array.slice(0, array.length)
  },
}