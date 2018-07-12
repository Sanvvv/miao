function numToArr (n) {
  if (n === 0) return [0]
  var arr = []
  while (n > 0) {
    arr.unshift(n % 10)
    n = Math.floor(n / 10)
  }
  return arr
};

function ListNode (val, next) {
  this.val = val
  this.next = next
};

function add (value, node) {
  var newNode = new ListNode(value, node.next)
  node.next = newNode
}

function doublyListNode (val, next, prev) {
  this.val = val
  this.next = next
  this.prev = prev
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function appendLeft(root, tree) {
  root.left = tree
}

function appendRight(root, tree) {
  root.right = tree
}

// var preorderTraversal = function(root) {
//   if (!root) return []
//   let arr = []
//   pre(root)
//   return arr

//   function pre(node) {
//     if (node.left) pre(node.left)
//     arr.push(node.val)
//     if (node.right) pre(node.right)
//   }
// };



// var inorderTraversal = function(root) {
//   if (!root) return []
//   let arr = []
//   let stack = [root]

//   while (stack.length) {
//     let node = stack.pop()

//     if (node) {
//       if (typeof node === 'number') arr.push(node)
//       else {
//         stack.push(node.val)
//         if (node.right) stack.push(node.right)
//         if (node.left) stack.push(node.left)
//       }
//     }
//   }

//   return arr
// };



// var levelOrder = function(root) {
//   if (!root) return []
//   let arr = []
//   let queue = [root]
//   let level = 0

//   while (queue.length) {
//     let node = queue.shift()

//     if (typeof node === 'number') level = node
//     else if (node) {
//       arr[level] = arr[level] || []
//       arr[level].push(node.val)
//       queue.push(level + 1)
//       if (node.left) queue.push(node.left)
//       if (node.right) queue.push(node.right)
//     }
//   }

//   return arr
// };



// function testLinkedList () {
//   var list = new ListNode(1)
//   add(6, list)
//   add(5, list)
//   add(4, list)
//   add(3, list)
//   add(2, list)
// }


// tree 问题
// function createTree() {
//   var tree1 = new TreeLinkNode(1)
//   var tree2 = new TreeLinkNode(2)
//   var tree3 = new TreeLinkNode(3)
//   var tree4 = new TreeLinkNode(4)
//   var tree5 = new TreeLinkNode(5)
//   var tree6 = new TreeLinkNode(6)
//   var tree7 = new TreeLinkNode(7)
//   var tree8 = new TreeNode(7)
//   var tree9 = new TreeNode(2)

//   appendLeft(tree1, tree2)
//   appendRight(tree1, tree3)
//   appendLeft(tree2, tree4)
//   appendRight(tree2, tree5)
//   appendLeft(tree3, tree6)
//   appendRight(tree3, tree7)
//   appendLeft(tree4, tree8)
//   appendLeft(tree4, tree9)

//   return tree1
// }

// function TreeLinkNode(val) {
//   this.val = val;
//   this.left = this.right = this.next = null;
// }

// var tree = createTree()
// console.log(lowestCommonAncestor(tree))