## Tree
### 226 Invert Binary Tree

```js
var invertTree = function(root) {
  if (root === null) return root
  
  var temp;
  temp = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(temp)
  
  return root
};
```

### 872 Leaf-Similar Trees

直接在函数中返回树叶的值数组

```js
const dfs = (node) => {    
  if (node.left === null && node.right === null) {
      return [node.val];
  }
  
  let left, right;
  node.left ? left = dfs(node.left) : left = [];
  node.right ? right = dfs(node.right) : right = [];
  
  return left.concat(right);
}
```

### 669 Trim a Binary Search Tree

```js
var trimBST = function(root, L, R) {
  if (node === null) return null
  if (node.val < L) return traverse(node.right)
  if (node.val > R) return traverse(node.left)
  
  node.left = trimBST(node.left, L, R)
  node.right = trimBST(node.right, L, R)
  return node
};
```

### 700	Search in a Binary Search Tree

需要利用好左小右大的特性，不需要全部遍历

### 100 Same Tree

```js
var isSameTree = function(p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
```

### 108	Convert Sorted Array to Binary Search Tree

```js
var sortedArrayToBST = function(nums) {
  if(!nums.length) return null
  var mid = Math.floor((nums.length)/2)
  var root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid+1))
  return root
};
```

### 543	Diameter of Binary Tree

不用传参即可获得 depth

```js
var diameterOfBinaryTree = function(root) {
  let res = 1;
  depth(root);
  return res - 1;

  function depth(node) {
    if (!node) return 0;
    let l = depth(node.left);
    let r = depth(node.right);

    res = Math.max(res, l + r + 1);
    return Math.max(l, r) + 1;
  }
};
```

### ? levelOrderTraverse

```js
var levelOrderTraverse = function(root) {
  let res = []
  traverse(root, 0)
  return res
  
  function traverse(node, depth) {
    if (!node) return
    traverse(node.left, depth + 1)
    traverse(node.right, depth + 1)
    if (!res[depth]) res[depth] = [node.val]
    else res[depth].push(node.val)
  }
};
```

### 101 Symmetric Tree

lve

### 235 Lowest Common Ancestor of a Binary Search Tree

```js
var lowestCommonAncestor = function(root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right
    } else {
      return root
    }
  }
};
```

### 572 Subtree of Another Tree

```js
var isSubtree = function(s, t) {
  return s !== null && (isSameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t))
};
```

### 437 Path Sum III

```js
var pathSum = function(root, sum) {
  if (!root) return 0
  return traverse(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)

  function traverse(node, sum) {
    let res = 0
    if (!node) return res

    if (sum === node.val) res++
    
    res += traverse(node.left, sum - node.val)
    res += traverse(node.right, sum - node.val)
    return res
  }
};
```

### 111	Minimum Depth of Binary Tree

```js
var minDepth = function(root) {
  if (!root) return 0
  if (!root.left) return minDepth(root.right) + 1
  if (!root.right) return minDepth(root.left) + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};
```

## Array
### Find All Numbers Disappeared in an Array

- 直接在原地修改数组为负值表示已经访问过

```js
var findDisappearedNumbers = function(nums) {
  let res = []

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1
    if (nums[index] > 0) nums[index] = -nums[index]
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1)
  }

  return res
};
```

## stack
### Binary Search Tree Iterator
```js
class BSTIterator {
  constructor(root) {
    this.stack = [];
    this.pushToStack(root);
  }
  
  pushToStack(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  hasNext() {
    return this.stack.length > 0;
  }
  
  next() {
    const node = this.stack.pop();
    this.pushToStack(node.right);
    return node.val;
  }
}
```

## backtracking
### Combination Sum

```js
var combinationSum = function(candidates, target) {
  let res = []
  let store = []
  helper(0, target)
  return res

  function helper (start, target) {
    if (target === 0) {
      res.push(store.slice())
      return
    }
    if (target < 0) return

    for (let i = start; i < candidates.length; i++) {
      store.push(candidates[i])
      helper(i, target - candidates[i])
      store.pop()
    }
  }
};
```
