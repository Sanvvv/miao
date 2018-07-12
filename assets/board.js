var kthSmallest = function(root, k) {
  let arr = []
  traverse(root)
  
  return arr[k].val

  function traverse() {
    if (node) {
      traverse(node.left)
      arr.push(node)
      traverse(node.right)
    }
  }
};

// console.log(zigzagLevelOrder([''], 3))

function createTree() {
  var tree1 = new TreeLinkNode(0)
  var tree2 = new TreeLinkNode(3)
  var tree3 = new TreeLinkNode(6)
  var tree4 = new TreeLinkNode(2)
  var tree5 = new TreeLinkNode(4)
  var tree6 = new TreeLinkNode(6)
  var tree7 = new TreeLinkNode(7)
  var tree8 = new TreeNode(7)
  var tree9 = new TreeNode(2)

  // appendLeft(tree1, tree2)
  appendRight(tree1, tree3)
  // appendLeft(tree2, tree4)
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

var tree = createTree()
console.log(deleteNode(tree, 6))


// lodash

// var a = [1.3,2.4,3.1]
// var b = Sanvvv.differenceBy(a, [1,2.2])
// b[0] = 'no'
// console.log('origin:', a, 'result:', b)
// console.log(b)

// console.log(Sanvvv.difference(
//   a
// ))

