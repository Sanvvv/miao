

const isUSDFormat = (str) => {
  return /(^\$[1-9])(\.[0-9]{2}$)/.test(str)
}


console.log(isUSDFormat('$100,000.00'))






var tree = createTree()
// console.log(invertTree(tree))
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))

function createTree() {
  var tree1 = new TreeNode(1)
  var tree2 = new TreeNode(2)
  var tree3 = new TreeNode(3)
  var tree4 = new TreeNode(5)
  // var tree5 = new TreeLinkNode(4)
  // var tree6 = new TreeLinkNode(6)
  // var tree7 = new TreeLinkNode(7)
  // var tree8 = new TreeNode(7)
  // var tree9 = new TreeNode(2)

  appendLeft(tree1, tree2)
  appendRight(tree1, tree3)
  appendLeft(tree2, tree4)
  // appendRight(tree2, tree5)
  // appendLeft(tree3, tree6)
  // appendRight(tree3, tree7)
  // appendLeft(tree4, tree8)
  // appendLeft(tree4, tree9)

  return tree1
}

function TreeLinkNode(val) {
  this.val = val;
  this.left = this.right = this.next = null;
}


function rowHeights (rows) {
  return rows.map(row => row.reduce((max, cell) => Math.max(max, cell.minHeight()), 0))
}

// map 只是用来创建一个长度为 rows[0].length 的数组
function colWidths (rows) {
  return rows[0].map((_, i) => rows.reduce((max, row) => Math.max(max, row[i].minWidth()), 0))
}

function drawTable (rows) {
  var heights = rowHeights(rows)
  var widths = colWidths(rows)

  function drawLine (blocks, lineNo) {
    return blocks.map(block => block[lineNo]).join(' ')
  }

  function drawRow (row, rowNum) {
    var blocks = row.map((cell, colNum) => cell.draw(widths[colNum], heights[rowNum]))
    return blocks[0].map((_, lineNo) => drawLine(blocks, lineNo)).join('\n')
  }

  return rows.map(drawRow).join('\n')
}

function repeat (str, times) {
  var res = ''
  for (var i = 0; i < times; i++) res += str
  return res
}

function TextCell (text) {
  this.text = text.split('\n')
}

TextCell.prototype.minWidth = function () {
  return this.text.reduce((width, line) => Math.max(width, line.length), 0)
}

TextCell.prototype.minHeight = function () {
  return this.text.length
}

TextCell.prototype.draw = function (width, height) {
  var res = []
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || ''
    res.push(line + repeat(' ', width - line.length))
  }
  return res
}

function objectToText (ary) {
  var rows = []
  var map = new Map()
  var len = getLenth(ary)

  ary.forEach(obj => {
    var row = Array(len + 1).fill(new TextCell(''))
    for (var key in obj) {
      var i = getIndex(key)
      row[i] = new TextCell(String(obj[key]))
    }
    rows.push(row)
  })

  function getLenth (ary) {
    return ary.reduce((max, obj) => Math.max(max, Object.keys(obj).length), 0)
  }

  function getIndex (key) {
    if (map.has(key)) {
      return map.get(key)
    }
    else {
      var i = map.size
      map.set(key, i)
      return i
    }
  }

  return rows
}

function StretchCell (inner, width, height) {
  this.inner = inner
  this.width = width
  this.height = height
}

StretchCell.prototype.minWidth = function () {
  return Math.max(this.inner.minWidth(), this.width)
}

StretchCell.prototype.minHeight = function () {
  return Math.max(this.inner.minHeight(), this.height)
}

// var rows = []
// for (var i = 0; i < 5; i++) {
//   var row = []
//   for (var j = 0; j < 5; j++) {
//     if ((j + i) % 2 == 0) {
//       row.push(new TextCell('##'))
//     } else {
//       row.push(new TextCell('  '))
//     }
//   }
//   rows.push(row)
// }

// console.log(drawTable(rows))
// console.log(objectToText([{a:1}, {b: 2, c: 3}]))
// console.log(drawTable(objectToText([{a:'dasdasd'}, {b: 'rea', c: 3}])))
// console.table([{a:1}, {b: 2, c: 3}])

// function Vector (x, y) {
//   this.x = x
//   this.y = y
// }

// Vector.prototype.plus = function (other) {
//   return new Vector(this.x + other.x, this.y + other.y)
// }

// Vector.prototype.minus = function (other) {
//   return new Vector(this.x - other.x, this.y - other.y)
// }

// Object.defineProperty(Vector.prototype, 'length', {
//   get: function () {
//     return Math.sqrt(this.x ** 2 + this.y ** 2).toFixed(2)
//   }
// })

function testLinkedList () {
  var list = new ListNode(1)
  // add(10, list)
  // add(9, list)
  // add(8, list)
  // add(7, list)
  // add(6, list)
  add(5, list)
  add(4, list)
  add(3, list)
  add(2, list)
  // add(1, list)
  return list
}

var list = testLinkedList()
// console.log(sortedListToBST([-10,-3,0,5,9]))

// var kthSmallest = function(root, k) {
//   let arr = []
//   traverse(root)
  
//   return arr[k].val

//   function traverse() {
//     if (node) {
//       traverse(node.left)
//       arr.push(node)
//       traverse(node.right)
//     }
//   }
// };

// // console.log(zigzagLevelOrder([''], 3))

