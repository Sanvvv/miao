var generateMatrix = function(n) {
  
};

// console.log(generateMatrix(5))



function reduce (arr, reducer, initialValue) {
  let i = 1
  let acc = arr[0]

  if (initialValue !== undefined) {
    i--
    acc = initialValue
  }
  
  for (; i < arr,length; i++) {
    acc = reducer(acc, arr[i])
  }

  return acc
}





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

// function createTree() {
//   var tree1 = new TreeLinkNode(0)
//   var tree2 = new TreeLinkNode(3)
//   var tree3 = new TreeLinkNode(6)
//   var tree4 = new TreeLinkNode(2)
//   var tree5 = new TreeLinkNode(4)
//   var tree6 = new TreeLinkNode(6)
//   var tree7 = new TreeLinkNode(7)
//   var tree8 = new TreeNode(7)
//   var tree9 = new TreeNode(2)

//   // appendLeft(tree1, tree2)
//   appendRight(tree1, tree3)
//   // appendLeft(tree2, tree4)
//   // appendRight(tree2, tree5)
//   // appendLeft(tree3, tree6)
//   // appendRight(tree3, tree7)
//   // appendLeft(tree4, tree8)
//   // appendLeft(tree4, tree9)

//   return tree1
// }

// function TreeLinkNode(val) {
//   this.val = val;
//   this.left = this.right = this.next = null;
// }

// var tree = createTree()
// console.log(deleteNode(tree, 6))
