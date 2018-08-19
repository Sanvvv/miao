## todo

101 in regexp
95
93
92
88
87 in regexp

## 102 记忆化斐波那契函数（Memoization）

```js
const fibonacci = ((memo = { 0: 0, 1: 1, length: 2 }) => n => {
  if (memo[n] === undefined) {
    let i = memo.length
    for (; i < n + 1; i++, memo.length++) {
      memo[i] = memo[i - 2] + memo[i - 1] 
    }
    return memo[i - 1]
  } else {
    return memo[n]
  }
})()
```

## 98 判断两个矩形是否重叠

```js
const isOverlap = (rect1, rect2) => {
  let r1 = rect1.x > rect2.x + rect2.width || rect1.y > rect2.y + rect2.height
  let r2 = rect2.x > rect1.x + rect1.width || rect2.y > rect1.y + rect1.height
  return !(r1 || r2);
}
```

## 91 数组拍平

```js
function *flatten2 (arr) {
  for (let i of arr) {
    Array.isArray(i) ? yield* flatten2(i) : yield i
  }
}
```

### VNode

```js
class VNode {
  constructor (tagName, props, children) {
    this.tagName = tagName
    this.props = props
    this.children = children
  }

  render() {
    let node = document.createElement(this.tagName)
    Object.entries(this.props).forEach(([key, value]) => node.setAttribute(key, value))
    this.children.forEach(c => node.appendChild(c instanceof VNode ? c.render() : document.createTextNode(c)))
    return node
  }
}

const h = (t, p, c) => {
  return new VNode(t, p, c)
}
```