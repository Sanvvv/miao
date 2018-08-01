var MyMap = function () {
  function MyMap (iter) {
    this.entries = []

    if (iter) {
      for (let ary of iter) {
        this.set(ary[0], ary[1])
      }
    }
  }

  MyMap.prototype = {
    get size() {
      return this.entries.length
    },

    clear: function () {
      this.entries = []
    },

    delete: function (key) {
      let ary = this.entries
      for (let i = 0; i < ary.length; i++) {
        if (isEqual(ary[i][0], key)) {
          this.entries.splice(i, 1)
          return true
        }
      }
      return false
    },

    get: function (key) {
      for (let item of this.entries) {
        if (isEqual(item[0], key)) return item[1]
      }
      return undefined
    },

    has: function (key) {
      for (let item of this.entries) {
        if (isEqual(item[0], key)) return true
      }
      return false
    },

    set: function (key, val) {
      for (let item of this.entries) {
        if (isEqual(item[0], key)) {
          item[1] = val
          return
        }
      }
      this.entries.push([key, val]) 
    },
  }

  function isEqual (self, other) {
    if (self === other) return true
    if (self !== self && other !== other) return true
    return  false
  }

  return MyMap
}()

var MySet = function () {
  function MySet (iter) {
    this.entries = []

    if (iter) {
      for (let key of iter) {
        this.add(key)
      }
    }
  }

  MySet.prototype = {
    get size() {
      return this.entries.length
    },

    clear: function () {
      this.entries = []
    },

    delete: function (key) {
      let ary = this.entries
      for (let i = 0; i < ary.length; i++) {
        if (isEqual(ary[i], key)) {
          this.entries.splice(i, 1)
          return true
        }
      }
      return false
    },

    has: function (key) {
      for (let item of this.entries) {
        if (isEqual(item, key)) return true
      }
      return false
    },

    add: function (key) {
      for (let item of this.entries) {
        if (isEqual(item, key)) return
      }
      this.entries.push(key) 
    }
  }

  function isEqual (self, other) {
    if (self === other) return true
    if (self !== self && other !== other) return true
    return  false
  }

  return MySet
}()

var MyArr = function () {
  MyArr = function (...args) {
    this.length = 0
    for (let val of args) this.push(val)
  }

  function addArray (pos, array, t) {
    // this function won't move other index of array
    for (let count = 0; count < array.length; pos++, count++) {
      t[pos] = array[count]
    }
    return pos
  }

  /**
   * @param  {number} start start index
   * @param  {number} deleteCount count
   * @param  {Object} t thisArg
   * @return {MyArr} return the deleted array
   */
  function _delete (start = 0, deleteCount = 1, t) {
    let res = t.slice(start, start + deleteCount)
    let len = t.length - deleteCount < start ? start : t.length - deleteCount
    let end = t.slice(start + deleteCount)
    let pos = start

    pos = addArray(pos, end, t)
    for (; pos < t.length; pos++) delete t[pos]
    
    t.length = len < 0 ? 0 : len
    return res
  }

  /**
   * @param  {number} start start index
   * @param  {*} value Array or others
   * @param  {Object} t thisArg
   * @param  {boolean} tag if true, add the items in array
   * @return {number} return the length of the array
   */
  function _add (start, value, t, tag = false) {
    // add items in array
    if (tag && isArray(value)) {
      let len = t.length + value.length
      let end = t.slice(start)
      let pos = start

      pos = addArray(pos, value, t)
      pos = addArray(pos, end, t)

      t.length = len
    // only add one element
    } else {
      for (let i = t.length - 1; i >= start; i--) t[i + 1] = t[i]
      t[start] = value
      t.length++
    }

    return t.length
  }

  function isArray (value) {
    return Object.prototype.toString.call(value) === '[object Array]' || value instanceof MyArr
  }

  MyArr.prototype = {
    push: function (val) {
      return _add(this.length, val, this)
    },

    pop: function () {
      return _delete(this.length - 1, 1, this)[0]
    },
    
    unshift: function (val) {
      return _add(0, val, this)
    },

    shift: function () {
      return _delete(0, 1, this)[0]
    },

    forEach: function (callback) {
      // TODO: thisArg
      for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) === false) break
      }
    },

    forEachRight: function (callback) {
      for (let i = this.length - 1; i >= 0; i--) {
        let tag = callback(this[i], i, this)
        if (tag === false) break
      }
    },

    slice: function (begin = 0, end = this.length) {
      // TODO: 负值
      let res = new MyArr()
      for (let i = begin; i < end; i++) {
        if (this[i]) res.push(this[i])
      }
      return res
    },
    
    splice: function (start, deleteCount = 1, ...items) {
      // TODO: 负值
      let res = _delete(start, deleteCount, this)
      _add(start, items, this, true)
      return res
    },

    concat: function (...values) {
      for (let value of values) {
        if (isArray(value)) {
          let ary = new MyArr()
          for (let i = 0; i < value.length; i++) {
            ary.push(value[i])
          }
          _add(this.length, ary, this, true)
        } else {
          _add(this.length, value, this)
        }
      }
      return this
    },

    copyWith: function (target = 0, start = 0, end = this.length) {
      let period = this.slice(start, end)
      addArray(target, period, this)
      return this
    },

    every: function (callback, thisArg) {
      // thisArg
      for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) === false) return false
      }
      return true
    },

    some: function (callback, thisArg) {
      // thisArg
      for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) === true) return true
      }
      return false
    },

    fill: function (value, start = 0, end = this.length) {
      if (end > this.length) end = this.length
      for (let i = start; i < end; i++) {
        this[i] = value
      }
      return this
    },

    join: function (separator) {
      let str = ''
      if (this.length === 0) return str
      if (this.length === 1) return str + this[0]

      this.forEach((val, index, ary) => {
        str += val + separator
        return (index + 1) !== ary.length - 1
      })

      return str + this[this.length - 1]
    },

    reverse: function () {
      let denseIndex = new MyArr()
      let len = this.length
      denseIndex.length = this.length

      for (let index in this) {
        if (this.hasOwnProperty(index)) {
          denseIndex[len - 1 - index] = 1
        }
      }
      for (let i = 0; i < len / 2; i++) {
        let temp = this[i]
        this[i] = this[len - 1 - i]
        this[len - 1 - i] = temp
      }
      for (let i = 0; i < len; i++) {
        if (!denseIndex[i]) delete this[i]
      }

      return this
    },

  // prototype end
  }

  return MyArr
}()