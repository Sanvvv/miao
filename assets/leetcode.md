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