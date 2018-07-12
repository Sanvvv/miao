// diagonal traverse
var findDiagonalOrder = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let arr = []
  let i = 0
  let j = 0

  // while (j < n) {
  //   let countj = j
  //   arr.push(i)
  // }

  for (let j = 0; j < n; j++) {
    if (j % 2 === 0) {
      let x = j
      let y = 0
      while (x >= 0) {
        arr.push(matrix[x][y])
        x--
        y++
      }
    } else {
      let x = 0
      let y = j
      while (y >= 0) {
        arr.push(matrix[x][y])
        x++
        y--
      }
    }
  }

  for (let i = 1; i < m; i++) {
    if (i % 2 === 1) {
      let x = i
      let y = n - 1
      while (y >= 0) {
        arr.push(matrix[x][y])
        x++
        y--
      }
    }
  }

  console.log(arr)
};

var a = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  [ 10, 11, 12 ]
 ];

 findDiagonalOrder(a)

//  var deleteNode = function(root, key) {
//   if (!root) return null
//   let nodeArr = []
//   let lastNode = root
//   let target = getNode(root, key)
//   if (target) traverse(target)
//   else return root

//   let index = nodeArr.indexOf(target)
//   replaceNode(index) 

//   return root
  
//   function getNode(node, key) {
//     if (key === node.val) {
//       return node
//     } else {
//       lastNode = node
//     }
    
//     if (key < node.val) {
//       if (!node.left) return null
//       return getNode(node.left, key)
//     } else {
//       if (!node.right) return null
//       return getNode(node.right, key)
//     }
//   }

//   function replaceNode(index) {
//     if (lastNode.right) {
//       replaceRight(index)
//     } else if (lastNode.left) {
//       replaceLeft(node)
//     }
//   }

//   function replaceLeft(index) {
//     let node = nodeArr[index]

//     if (node) {
//       if (node.left) {
//         node.val = nodeArr[index - 1].val
//         replaceLeft(index - 1)
//       } else nodeArr[index + 1].left = null
//     }
//   }

//   function replaceRight(index) {
//     let node = nodeArr[index]

//     if (node) {
//       if (node.right) {
//         node.val = nodeArr[index + 1].val
//         replaceRight(index + 1)
//       } else nodeArr[index - 1].right = null
//     }
//   }

//   function traverse(node) {
//     if (node) {
//       traverse(node.left)
//       nodeArr.push(node)
//       traverse(node.right)
//     }
//   }
// };