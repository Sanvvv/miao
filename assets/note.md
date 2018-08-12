
# 判断类型
## 判断数组

- Array.isArray() （由 es5 提供）
- [] instanceof Array （在多 window 的情况下(跨iframe)会出现问题）
- Object.prototype.toStirng.call([1,2,3]) === '[object Array]' （最佳）

## base

- typeof：只能识别基本类型值（number、string、boolean、undefined），对于复杂类型只能识别 Function
- instanceof：无法判断基本类型（5），但是可以区分对象
- constructor：除了 undefined 和 null 无法判断，其它基本可以，但是对于构造函数生成的实例，也无法判断它的类型
- [[class]]：通过将数据强制转换成字符串来使它暴露出内部的 [[class]] 属性

```
function type(o){
    var s  = Object.prototype.toString.call(o);
    return s.slice(s.indexOf(" ")+1,s.length-1).toLowerCase();
}
```

## aruments

- 是所有非箭头函数中都可用的局部变量
- 类数组，除 length 和索引元素之外没有任何 Array 属性，但是可以被转换成一个真正的 Array
- 对 arguments 使用 slice 会阻止引擎对其优化

```js
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
```

# RegExp

[http://deerchao.net/tutorials/regex/regex.htm]

## 语法
### 声明

```js
let reg = /\d{4, 6}/

// 遇到 '\' 需要转义
let reg = new RegExp('\\d{4, 6}')
let reg = new RegExp(String.raw `\d{4, 6}`)

// 第二个参数可以覆盖 reg.flags
new RegExp(/abc/ig, 'i').flags  // 'i'
```

### 修饰符

- g
- i
- u：支持 utf-16
- y：黏连符，每次匹配必须在当前 index（lastIndex） 的开头
  - exec，replace?，split?
- m
- s：dotAll
  - . 可以匹配行终止符：换行符、回车符、行分隔符、段分隔符

### 方法

- reg.test：return true of false
- reg.exec：找到正则匹配到的项以及每个括号匹配到的项，括号如果没匹配到内容会是 - undefined（在这个括号内 {0, n} 时）
- reg.escape：转义字符串为正则构造函数可用

- str.match：基本类似 exec ，但是在正则后加上 g 可以匹配到所有的项
- str.split：
  - 'foo bar'.split(/(.)\1/) 的时候，分组捕获到的内容也会插入到结果中 -> 'f' 'o' ' bar'，这种时候可以选择非捕获分组：/(?:.)\1/
- str.replace：
  - 'AB'.replace(/(.)(.)/g, '$2$1($&)')
  - 还可以是 function
- str.search

### 属性

- reg.lastIndex
  - exec 执行一次之后，lastIndex 就会变成匹配到的 index 值
  - 可以改变 exec 开始的位置（有 g 的时候总是从 0 开始）
  - test 也会受影响
- reg.source
- reg.global
- reg.flags

### \b 匹配单词的边界

- `/\bhi\b/`.test('a, hi')

### ^ 匹配字符串的开始

### $ 匹配字符串的结束

### . 匹配除换行符以外的任何单个字符

- /.n/将会匹配 "nay, an apple is on the tree" 中的 'an' 和 'on'，但是不会匹配 'nay'

### * 匹配前一个表达式0次或多次。等价于 {0,}

- 指定*前边的内容可以连续重复使用任意次以使整个表达式得到匹配

### + 匹配前一个表达式1次或更多 {1,}

### ? 匹配前一个表达式0次或1次

### \d 匹配一个数字 [0-9]

- `0\d\d-\d\d\d\d\d\d\d\d`

### \s 匹配任意空白符

- 包括空格，制表符(Tab)，换行符，中文全角空格等

### \w 匹配字母或数字或下划线或汉字等

- 字符?

### {n} 匹配前一个表达式刚好发生了n次

- {n, m} 至少n次，至多m次

### [xyz] 一个字符集合，匹配方括号中的任意字符

- 可以使用 - 来指定字符范围

### [^xyz] 反向字符集，匹配不包含在方括号中的字符

### 分支条件 x|y，匹配 x 或者 y

### 分组/子表达式 (xy) 

- 可以用于重复多个字符
- 获取：(.)(.)\2\1 （abba）

### 非捕获分组

- `(?:exp)`
  - exec 的结果中不包含括号中的内容

### 零宽断言

- `(?=exp)`：匹配exp后面的位置
- `(?!exp)`：匹配后面不是exp的位置
- `(?<=exp)`：匹配exp前面的位置
- `(?<!exp)`：匹配前面不是exp的位置

### 贪婪与懒惰

- `*`：匹配尽量多的字符
- `*?`：重复任意次，匹配尽量少的字符
- `+?`：重复1次以上，匹配尽量少的字符
- `??`：重复0次或1次，匹配尽量少的字符
- `{n,m}?`：n-m次，尽量少
- `{n,}?`：n次以上，尽量少

## 组合
### .* 匹配任意数量的不换行字符

- `/\bhi\b.*\bLucy\b/`

## 例子

- [https://alf.nu/RegexGolf#accesstoken=Bf7caGITVXKeGVbsp79l]
- [^] 表示任意符号（包括换行）
- ^(?!.*(.)(.)\2\1) 不匹配 abba

```js
// 判断是否是 4 或 6 位数字
/^(\d{4}(\d{2})?$)/.test(pin);

// 替换 'dasdwddwadxdhkjw' 为 '############hkjw'
cc.replace(/.(?!.{0,3}?$)/g, '#')
cc.replace(/.(?=....)/g, '#')

// 去除一句话末尾的 '!!'
s.replace(/\b!+/g, '')
s.replace(/(\w)!+/g, '$1')
s.split(' ').map(char => char.replace(/!+$/, '')).join(' ')

// 去除 C 旁边的字母（大写的不能去除），和 c
organism.replace(/[a-z]?C[a-z]?|c/g, '') // 主要是 ? 的用法

// trim
String.prototype.trim = function(c = ' '){
  return this.replace(new RegExp(`^${c}+|${c}+$`, 'gi'), '')
}

// 简单的 markdown to html
// aaaawawwawwaaaaaaaaooooooeee
function format(string) {
  return (/^(\*[^*])|#/.test(string) ? string : `< p>${string}< /p>`)
  .replace(/\*\*(.+?)\*\*/g, (_, content) => 
    `< strong>${content}< /strong>`)
  .replace(/(#{1,6})(.+)/g, (_, hash, content) =>
    `< h${hash.length}>${content.trim()}< /h${hash.length}>`)
  .replace(/^\* (.+)/g, (_, content) => 
    `< li>${content}< /li>`);
}

// header 的处理很好
function format(s) {
  if (s[0] == '#') {
    let header = Math.min(s.match(/^#+/)[0].length, 6)
    s = s.slice(header).trim()
    s = `< h${header}>${s}< /h${header}>`
  }
  else if (s.slice(0, 2) == '* ') {
    s = `< li>${s.slice(2).trim()}< /li>`
  }
  else s = `< p>${s.trim()}< /p>`
  s = s.replace(/\*\*(.+?)\*\*/g, (_, x) => `< strong>${x}< /strong>`)
  return s
}

// 不包含某字串
/^(?!.*bug)/.test('aaabugaaa')

// string incrementer
function incrementString (string) {
  return string.replace(/[0-9]+$/, char => {
    let i = char.length - 1
    while (char[i]) {
      if (char[i] !== '9') return char.slice(0, i) + (char[i] - -1) + char.slice(i + 1)
      else {
        char = char.slice(0, i) + '0' + char.slice(i + 1)
        i--
      }
    }
    return '1' + char
  })
}
// kangkangbierenzmxd
function incrementString(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}
// ............
function incrementString(input) {
  return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
      return +d + 1 + ns.replace(/9/g, '0');
    });
}

// 匹配字符串中不包含 ef 的单词
/\b(?!\w*ef\w*\b)\w+/

// 1113124 -> 1,113,124
str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

// ,(?=([^"]*"[^"]*"[^"]*)*$)
右边有偶数个"的逗号

//,(?=[^"]*"[^"]*([^"]*"[^"]*"[^"]*)*$)
匹配右边有奇数个"的逗号

// 能被 4 整除
/([13579][26]|[2468][048])$/.test(num)
```

# question

1. new Array(arr) 和 Array(arr) 有什么区别?

2. js 怎么比较数组的值是否相等?

  - JSON.stringify() -> Haoma ?

3. 为什么不要使用 arguments?

4. isEqual?

5. 在数组中不使用 splice 删除元素（因为循环 + splice 是 n方）

  - two pointer（但是每次判断这个值需不需要删，用 indexOf 好像也是 O(N) * O(N) ?）

6. 本来是函数中能不能 var 一个和参数同名的变量的问题

7. 关于 forEach 里的 break 和 return

  - break 是不能用的
  - return 也无法直接跳出循环
  - forEach 的参数是一个 callback 所以导致上面的问题

8. 关于 for in 的遍历范围

  - As with other "Collections" methods, objects with a "length" property are iterated like arrays. To avoid this behavior use _.forIn or _.forOwn for object iteration

9. Object.entries 以及 forEach 的实现

  - Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）

  - 将 Object 转换为 Map

  ```js
  var map = new Map(Object.entries(obj));
  ```

  - 另一种将对象转换成数组的方法：使用 Generator 函数将对象重新包装

  ```js
  function* entries(obj) {
    for (let key of Object.keys(obj)) {
      yield [key, obj[key]];
    }
  }

  for (let [key, value] of entries(obj)) {
    console.log(key, '->', value);
  }
  ```

  - 顺便一提是 for (let i [key, value] of collection) { ... }

10. 为什么不要用 for-in 来遍历数组?

  - for-in 遍历的是可枚举的自身属性和继承属性，意味着原型链上的扩展方法都会被遍历到（Array.prototype.foo）
  - 因此不得已而使用 for-in 的话需要安全验证 （hasOwnProperty）
  - 但是用来遍历对象好像就没问题（或者 array-like objects）

11. code

  ```js
  var a = 1
  var a = a + 1 // 2
  ```

12. Object.is()

  - Same-value equality

13. 一种判断正零负零的方法

  - `1 / -0 === -Infinity`

14. 克隆数组

  - arr.concat()
  - arr.slice(0)

15. 字符串排序

  - str.split('').sort((a, b) => a.localeCompare(b))

16. a good try

  ```js
  (result[value] || (result[value] = [])).push(key)

  [4,5].concat([1,2]) // [4,5,1,2]
  ```

17. 位运算取整

  - ~~xx, xx >>> 0, xx << 0
  - 效率更高，如果需要考虑性能且确定不会超出精度时可以使用

18. Object

  - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object

19. hasOwnProperty

  - obj.hasOwnProperty(prop) （为什么不是对象也可以...）
  - 所有继承了 Object 的对象都会继承到 hasOwnProperty 方法，不会检测到原型链上的属性

20. in operator

  - usage: prop in object
  - 包括原型链上继承到的属性
  - 甚至包括不可枚举的（for-in是无法遍历到不可枚举的属性）

21. splice 用于衔接

  - 第三个属性

22. 对象枚举方法

  - for-in：包括可枚举的自身属性和继承属性，返回属性的顺序会因浏览器差异导致不同
    - 需要返回自身属性可以使用 hasOwnProperty() 过滤
  - Object.keys()：只包括可枚举的自身属性
  - Object.getOwnPropertyNames()：返回自身属性（包括不可枚举属性），但是不包括原型链上的属性
  - for-of：主要用于遍历可迭代对象（Array、Map、Set、arguments），返回属性值

23. Error

  - `new Error([message[, fileName[, lineNumber]]])`

24. try...catch

  - try...catch
  - try...finally
  - try...catch...finally

  - 无论是否有异常都会执行 finally
  - catch 子句（从句）

  ```js
  try {
   throw "myException";
  }
  catch (e) {
    logMyErrors(e);
  }
  ```

25. call 和 apply

  - 差异是参数, call 为 ...args, apply 为 args（数组）
  - thisArg 的用法：指定调用该函数的对象（或者包装对象）
    - 值为 null 或者 undefined 的时候会自动指向全局对象（window）

26. 深拷贝

  - JSON.stringify
    - 无法实现对函数、RegExp等特殊对象的克隆
    - 会抛弃对象的 constructor ，所有的构造函数会指向 Object
    - 对象有循环引用的时候会报错

    ```js
    /* 需要考虑循环引用的情况 */
    cloneDeep: value => {
      if (value === null || typeof value !== 'object') return value

      var ctor = value.constructor
      var obj

      switch (ctor) {
        case RegExp:
          obj = new ctor(value)
          break
        default:
          obj = new ctor()
      }

      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          obj[key] = sanvvv.cloneDeep(value[key])
        }
      }

      return obj
    },
    ```

27. 冒泡

  - if !swaped return
  - 内层循环递减

28. 箭头函数

  - this：箭头函数根据当前的词法作用域而不是根据this机制顺序来决定this，所以，箭头函数会继承外层函数调用的this绑定，而无论this绑定到什么
    - setTimeout 等函数内部的 this 会改变（这里是 window ），可以使用箭头函数来保证 this 不变（为外层函数调用时确定的this）
  - arguments：没有
  - prototype：没有（所以不能作为构造函数）
  - 多层嵌套函数，内层使用箭头函数可以保证 this 为外层函数中的 this

29. valueOf() toString

30. bind

  - 返回一个新函数，绑定给定的this和参数
  - 将一个方法从对象中拿出来，然后再调用，会丢失方法中的this（指向的是调用时作用域的this），需要使用bind将方法和对象绑定this
  - 另一种使用就是来给函数设定预设的初始参数
  - 如果所需要的函数中没有使用到 this，那就不需要使用bind
    - `toArr = [].slice.bind([].slice)`，这里用了bind是因为call内部实现需要

  - practice

  ```js
  function bind(f, thisArg, ...fixedArgs) {
    return function(...restArgs) {
      f.apply(thisArg, [...fixedArgs, ...restArgs])
    }
  }

  // bind 用于绑定需要特殊 this 值的函数
  function toArray(val) {
    return [].slice.call(val)
  }

  // 等同于
  var toArray = [].slice.call.bind([].slice)

  // 类似的 trick
  Array.apply(null, Array(3)).map(Function.prototype.call.bind(Number))
  ```

31. b instanceof B

  - return `b.__proto__.constructor === B` （可以继续在 `__proto__` 上查找）

33. new、instanceof、Object.create()

  - new 做了哪些操作
    - new`关键字做的主要的事情就是将实例对象的`__proto__`属性指向原型对象的prototype
    - 如果返回值不是对象的话会返回 this
    - 如果不加 new 的话 this 会被绑定到全局对象上

  - new 与 Object.create 的区别
    - `__proto__` 指向的区别，'参数'的区别
    - MDN：Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`（（已经存在的对象的新实例））
    - Object.create() 的参数应该是一个对象，如果是构造函数的话表现就会很怪异...（怪异的原因是原型指向了函数而不是对象）
      - 是对象的话就是把这个对象当做新创建的函数的 `.__proto__`，越过了构造函数直接实现继承（差异化继承）

  ```js
  function NEW (F, ...args) {
    var obj = {}
    obj.__proto__ = F.prototype // !important
    var result = F.apply(obj, args) // !important
    if (!result) {
      return obj
    } 
    if (typeof result === 'object') {
      return result
    }
    return obj
  }

  Object.create = function (proto) {
    // ...
    var F = function () {}
    F.prototype = proto // !important
    return new F()
  }

  function INSTANCEOF(val, fn) {
    if (!val) {
      return false
    }
    if (!val.__proto__) {
      return false
    }
    if (val.__proto__.constructor === fn) {
      return true
    } else {
      return INSTANCEOF(val.__proto__, fn)
    }
  }
  ```

33. 模拟 call 和 apply

  ```js
  var context = context || window;
  context.fn = this;
  context.fn()
  delete context.fn
  ```

33. 排序 series

  - https://www.cnblogs.com/wangfupeng1988/archive/2011/12/26/2302216.html

34. quickSort 快速排序

  ```js
  // simply version with O(n) extra space
  function quickSort (ary) {
    if (ary.length <= 1) return [...ary]

    var pivot = ary[Math.floor(ary.length * Math.random())]
    var left = []
    var middle = []
    var right = []

    for (var i = 0; i < ary.length; i++) {
      if (ary[i] < pivot) left.push(ary[i])
      else if (ary[i] === pivot) middle.push(ary[i])
      else right.push(ary[i])
    }

    return quickSort(left).concat(middle, quickSort(right))
  }

  // better version sort the array in place
  function quickSort2 (ary, start = 0 ,end = ary.length - 1) {
    if (end <= start) return

    var pivotIndex = Math.floor((end - start + 1) * Math.random()) + start
    var pivot = ary[pivotIndex]

    swap(ary, pivotIndex, end)

    for (var i = start - 1, j = start; j <= end; j++) {
      if (ary[j] <= pivot) {
        i++
        swap(ary, i, j)
      }
    }

    quickSort2(ary, start, i - 1)
    quickSort2(ary, i + 1, end)

    return ary
  }

  function swap(arr, a, b) {
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  ```

35. mergeSort 归并排序

  ```js
  function mergeSort (ary) {
    if (ary.length <= 1) return [...ary]

    var mid = ary.length / 2 | 0
    var left = mergeSort(ary.slice(0, mid))
    var right = mergeSort(ary.slice(mid))
    var res = []

    var i = 0, j = 0
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) res.push(left[i++])
      else res.push(right[j++])
    }

    return res.concat(left.slice(i), right.slice(j))
  }
  ```

38. dense array && sparse array

  - 创建 sparse array：给超出 length 的 index 设置值、设置一个比 array 大的length
    - for-in 和 forEach 系列高阶函数不遍历空洞，for 和 for-of 会遍历空洞（值为 undefined）
  - 创建 dense array：Array.apply(null, Array(3))，会得到一个都是 undefined 的数组（那岂不是和 fill(undefined) 差不多...）
    - 如果无法预先确定数组的长度岂不是没有办法...

39. 创建一个没有原型的对象

  - Object.create(null)
  - `obj.__proto__ = null`
  - Object.setPrototypeOf(obj, prototype)

  > 在通过 new 关键字来创建一个对象的时候，会查看 Dog.prototype 是不是一个对象，如果不是的话，就设置为 Object.prototype

40. Boolean

  - Boolean('false') === true !!!

41. IEEE754

  - float：使用1位表示符号，8位表示指数，23位表示尾数（小数部分）
  - double：使用1位表示符号，11位表示指数，52位表示尾数
  - 不会啊

42. 强制类型转换

43. 自动类型转换

44. 表达式和语句的区别

  - 表达式：产生值的操作的代码片段（句子的片段），语句：完整的句子，需要加分号，最简单的是表达式语句
  - 表达式：只可以产生值，不会对外界有影响，语句：可以产生影响
  - 一系列语句组成程序

45. 作用域

  - 收集并维护由所有声明的标识符（变量）组成的一系列查询，确定当前执行代码对变量的访问权限
  - 词法作用域：函数内部变量的可见性取决于函数在代码当中的位置，函数可以访问到定义这个函数的代码块中的所有变量和函数内部变量

46. 调用栈

  - 由于函数需要在执行结束后跳转回调用该函数的代码位置，因此计算机必须记住函数调用的上下文（执行上下文??）
  - 调用栈：存储这个上下文的区域，每当函数调用时，当前的上下文信息会被存储在栈顶，函数返回时系统会删除在栈顶的上下文信息，并使用该信息继续执行程序
  - 递归过多会导致栈存储空间过大（栈空间溢出）

48. 高阶函数

  - 操作其他函数，即将其他函数作为参数或者将函数作为返回值的函数

49. JSON

  - 所有属性名必须用双引号括起来
  - 只能使用简单的数据表达式，不能填写函数调用、变量以及任何含有实际计算过程的代码
  - 不能有注释

54. getter与setter

55. String.prototype.replace

  - str.replace(regexp|substr, newSubStr|function)
  - 可以使用 regexp 和 函数!!

56. 尾递归

  - 在函数的末尾返回值是调用一个函数的话就是尾调用

  - 尾调用作为函数的最后一步操作，它在某些场景下不需要保存外层函数的调用记录，因为这些信息不会再被用到了，所以可以取消过多的堆栈记录，这也是不会有栈溢出的原因
  - 尾递归的本质实际上就是将方法需要的上下文通过方法的参数传递进下一次调用之中，以达到去除上层依赖

  - 只有 safari 默认支持，V8 实际上已经实现了但是默认关闭（只有在严格模式下才开启? 手动在控制台输入代码开启是可以的）
  - 关闭的原因：
    - 首先，由于引擎消除尾递归是隐式的，函数是否符合尾调用而被消除了尾递归很难被程序员自己辨别（写了死循环后不会有 stack overflow 的报错）
    - 其次，尾调用优化要求除掉尾调用执行时的调用堆栈，这将导致执行流中的堆栈信息丢失（调用栈丢失）

  - 手动优化
    - 改成循环
    - 蹦床函数（因为要一直压栈出栈所以叫蹦床，展平调用）：不断调用函数直到结果不再是函数
    - 尾递归函数转循环方法：将递归函数作为参数传入，并且更改每次递归调用的是 optimize 函数，函数的作用是将每次递归的参数传入数组，再压出赋值（跟上者的区别是不用修改原函数）

    ```js
    function trampoline(f) {  
      while (f && f instanceof Function) {
        f = f()
      }
      return f
    }

    function f(n, a = 0, b = 1) {  
      if (n > 0) {
        [a, b] = [b, a + b]
        return f.bind(null, n - 1, a, b)
      } else {
        return a
      }
    }
    ```

58. js 引擎

  - LHS、RHS
    - LHS：查询在=号左边的变量，查询的是地址
    - RHS：查询在=号右边的变量，查询的是变量存储的值
    - 最好是通过取值还是取地址的区别来区分两者
  - Memory Heap、Call Stack
    - 栈：用来存储方法调用的地方（入栈 -> 调用完毕 -> 出栈），以及基础数据类型存储的地方
    - 堆：给对象分配的内存空间，基本类型变量如果存在闭包当中，也会存储在堆中（因为外部函数已经在栈中被弹出了，所以需要变量存储在堆中才能被访问到， -> 现代 JS 引擎可以通过逃逸分析知道哪些可以分配在栈上，哪些需要分配在堆上）
  - 逃逸分析
    - V8 在JavaScript 堆上分配新对象，使用逃逸分析，当 V8 分析出此对象只在函数内部起作用（和函数有相同的生命周期），则 V8 可以把对象分配到栈上，甚至可以把某些变量分配到寄存器中，把对象作为一个简单的局部变量
    - 如果对象逃逸了，则必须在堆上分配

58. Call Stack

  - 对于调用栈中的每个方法调用，都会形成（进入）自己的执行上下文（Execution Context）

58. 执行上下文 Execution Context

  - 执行函数代码之前，会先创建执行上下文，包含函数执行过程中要用到的：变量对象、作用域链、this
  - 执行环境：全局代码、函数代码、Eval 代码

  - 函数创建阶段
    - 会预先创建包含全局变量对象的作用域链，并保存在 [[Scope]] 属性中（这时候还和执行上下文无关）

  - 找到调用函数的代码并在执行代码之前的执行上下文创建阶段
    - 复制函数中的 [[Scope]] 对象，并在活动对象创建完后将其推入作用域前端
    - 创建变量对象（包括 arguments、变量、函数）
      - 创建 arguments，检查上下文，初始化参数名称和值并创建引用的复制（有值）
        - 一开始 AO 只包含 arguments，之后才加入形参、函数、变量（是这个顺序）
      - 扫描函数声明，会创建对应变量名指向该函数，如果已经存在用新的引用值覆盖
      - 扫描变量声明，同样会创建对应变量名，但这个时候值还是 undefined，如果已经存在不会进行任何操作（所以其实也不会声明两次，第二次直接忽略）
    - 决定 this 指向

  - 执行代码阶段
    - 执行环境是函数的话，变量对象会变成活动对象
    - 重新扫描一遍代码，执行代码（在这个时候给变量赋值）

  - 执行完毕
    - 上下文会被销毁，保存在其中的所有变量和函数定义也随之销毁（全局执行环境只有关闭网页才会销毁）
    
  ```js
  // 进入执行上下文时的 AO
  AO = {
    arguments: {
        a: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){},
    d: undefined
  }
  ```

58. 变量的生命周期

  - 包含三个阶段：声明阶段、初始化阶段、赋值阶段

  - var 变量的声明阶段和初始化阶段是一起的（声明之后马上初始化为 undefined）
  - 函数声明的三个阶段是一起的（声明之后马上指向函数）
  - let 变量的声明阶段和初始化阶段是分开的
    - 在进入 let variable 语句的块级作用域之后变量立即通过了声明阶段，但是在执行上下文的执行阶段解析到 let variable 语句时才会初始化（并在这个时候离开 TDZ）
    - const 和 class 和 let 有着相同的生命周期

58. Event Loop & Callback

  - 异步的支持主要依赖于运行环境（引擎本身不提供）
  - Event Loop：Event Loop只做一件事情，负责监听Call Stack和Callback Queue。当Call Stack里面的调用栈运行完变成空了，Event Loop就把Callback Queue里面的第一条事件(其实就是回调函数)放到调用栈中并执行它，后续不断循环执行这个操作
  - ECMAScript 标准并为提及 Event Loop，实际上它是由浏览器实现的

59. 为什么 var 可以重复声明

  - 其实只声明了一次，编译器每次遇见 var variable 的时候都会判断变量是否已经声明，声明了的话就忽略 var，直接拿 variable 的值来用
  - 碰到 variable = 2 的时候同样也会判断 variable 是否已经存在，或者沿着作用域查找是否存在，实在没有会声明成全局变量

59. 作用域链（scope chain）

  - 由当前环境与上层环境的一系列变量对象组成，它保证了当前执行环境对符合访问权限的变量和函数的有序访问
  - 在创建函数时会创建一个预先包含全局变量对象的作用域链，这个作用域链被保存在函数内部的 [[Scope]] 属性中
  - 执行函数的时候，会继续补充这个作用域链
  - 作用域链只引用变量对象（活动对象），从内至外，最外层是全局变量对象，保证对执行上下文有权访问的所有变量和函数的有序访问
  - 查找变量的时候，会首先从当前执行上下文的变量对象中查找，如果没有找到就会从父级执行上下文的变量对象中查找，一直向上至全局上下文的变量对象。由多个执行上下文的变量对象构成的链表就叫做作用域链
  - 本来的话，函数执行完毕之后活动对象就会被销毁，但是闭包会让内部函数的作用域链中包含外部函数的活动对象，由于仍存在引用，外部函数执行完毕后它的活动对象也不会被销毁（当然执行环境的其他东西都会被销毁）
 
  - 高程图 7-1

59. [[scope]]

  - 函数有一个内部属性 [[scope]]，当函数创建的时候就会保存所有父变量对象（非自己部分）到其中
  - 当执行函数时， [[scope]] 中的对象会参与到作用域的构建（添加到作用域中），并把当前执行环境中的活动对象添加到作用域链前端

59. 活动对象与变量对象

  - 变量对象 Variable Object，在执行上下文中创建（进入阶段），用于存放上下文中定义的形参、变量和函数（这个对象是规范上实现的，不可在 JS 环境中访问到）
  - 活动对象（激活对象） Activation Object，在执行函数（上下文执行阶段）的时候，使用函数上下文中的活动对象来表示变量对象
  - 未进入执行阶段之前，变量对象本来是不可访问的，但是进入执行阶段之后，变量对象转变为了活动对象，里面的属性都能被访问了
  - 变量对象和活动对象其实都是同一个对象, 只是处于执行上下文的不同生命周期

60. Web Worker

61. 垃圾回收

  - 语言内嵌的 “垃圾回收器” 跟踪内存的分配和使用，以便分配的内存不再使用时自动释放它，但也只能由有限制地解决一般问题
  - 引用计数：如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收
    - 对象对原型的引用是隐式的、对属性的引用是显式的
    - 所以遇到两个对象之间互相引用的情况就无法回收，这样就容易发生内存泄漏
  - 标记清除：根据对象是否可以获得来决定对象是否不再需要（现代浏览器采用）
    - 垃圾回收器定期从根（全局对象）开始，找所有从根开始引用的对象，然后找这些对象引用的对象……
  
  - 内存泄漏
    - 未将值设为 null
    - 循环引用
    - 无意的全局变量（全局变量是不会被清除的）
    - 未 clearInterval 或者 clearTimeout
    - DOM 对象容易和 javascript 之间产生循环引用

62. 双向绑定

  - 发布-订阅
  - 脏检测（Angular）
  - 数据劫持：Object.defineProperty、Proxy
  - 数据模型

64. 如何判断构造函数的调用是否是用 new 调用的

  ```js
  // 这种方法，如果传入 Person 实例也会有问题，可以通过判断 this 的 _.size === 0 来区分
  if (!this instanceof Person) return new Person(name, age)
  ```

  ```js
  // es6
  if (new.target !== Person) return new Person(name, age)
  ```

  - es6 的 class 调用时必须要有 new

66. class

  - constructor
  - static
  - super

  ```js
  class A extends Array {}
  A.prototype.__proto__ === Array.prototype
  // 继承之后子类在 constructor 的中需要调用 super()
  ```

67. try catch error

  - catch 时最好先判断一下 Error 的类型，以免是其他错误被 catch（比如拼写错误）

  ```js
  function multiply (a, b) {
    while (true) {
      try {
        return primitiveMultiply(a, b)
      } catch (e) {
        if (e instanceof xxxxxFailure) {
          continue
        } else {
          throw e
        }
      }
    }
  }
  ```

69. 异步

  - Javascript 本身并不是异步的，而 Javascript 程序是异步的，由其运行时环境提供，通过 event loop 实现
  - 当遇到 IO 调用（或者定时器），就把它丢给运行时环境处理，自身（stack）继续执行后面的代码，当 IO 调用有了结果，会将结果及回调放在一个队列（callback queue）里，Javascript 线程会在合适的时机（执行栈 为空）将回调函数取出（从头部）并执行

  - promise
    - 语法
      - resolve reject then all race
      - 如果then有多步骤的操作，那么前面步骤return的值会被当做参数传递给后面步骤的函数
      - 对于Promise中的异常处理，我们建议用catch方法，而不是then的第二个参数

    - 规范
      - 状态：pending、fulfilled、rejected，不可逆
      - Promise 必须实现 then 方法，且返回的也是 Promise

    - promise库：Q

  - Generator
    - 语法
      - 需要使用 function* 定义，生成一个 Iterator 对象
      - 生成的 Iterator 对象不会立即执行，需要用 next() 调用，但是执行完一个 yield 之后又会暂停，并返回  yield 表达式里的结果（到 value 中），最终遇到 return 结束，done 变为 true
      - next 中的参数是传给指向 '上一个已经执行完了的 yield 语句' 的变量
      - yield*：后面接一个 Generator

    - 库：配合 co（处理 callback） 实现异步
    - TODO：实现 thinkify、co

  - async await
    - 语法
      - 使用 async function 代替 function*
      - 使用 await 代替 yield，后面必须跟 Promise 对象（异步）、其他数据类型（同步）
      - 执行 async function 之后返回的也是 Promise ，并且 return 的值可以被之后的 .then() 接收到
  

69. thunk

  - 将异步函数需要的其他参数封装，返回一个只需要传入 callback 的异步函数
  - thunkify

70. 模块

  - 规范
    - AMD（Asyncchronous Module Definition）
      - 是 RequireJS 在推广过程中对模块定义的规范化的产出
      - 异步加载（适合浏览器环境），通过回调，在加载完模块后执行依赖它的语句  

    - CMD（Common Module Definition）
      - 是 SeaJS 在推广过程中对模块定义的规范化产出

    - CommonJS
      - 每个模块内部，module变量代表当前模块
      - module 的 exports 属性是对外的接口，加载某个模块，其实是加载该模块的 module.exports 属性
      - require：该方法读取一个文件并执行，最后返回文件内部的 exports 对象
      - 模块可以多次加载，但是只会在第一次加载时运行一次，之后结果就缓存了（即使在其他模块中再次 require 也只会返回第一次加载的缓存）
      - 所有模块都是 Module 的实例
      - 如果发生模块的循环加载，即A加载B，B又加载A，则B将加载A的不完整版本（只输出已经执行的部分）
      - require 的值是值拷贝，影响不到模块内部

    - ES2015 Module
      - 模块中的代码自动运行在严格模式下，其中的顶级变量不会添加到全局作用域中
      - import 会在编译期间提升到模块头部
      - 由于引擎需要静态决定 import 和 export 的内容，两者只能在顶级作用域下使用
      - import 语句只创建了只读变量（是引用的），但是 import 而来的函数可以修改与其同一个模块中定义的变量
      - 关于在浏览器中引入：使用 script 标签（type="module"，总是 defer）的 src 属性或者在 script 内联代码中 import
      - 循环加载：遇到模块加载命令 import 时（如果不是循环加载的情况就正常执行需要加载的模块），不会去执行模块，而是只生成一个引用，等到真的需要用到时，再到模块里面去取值（因为是动态引用，没有缓存值）

      ```js
      /* 模块语法 */
      export let name = 'neko'

      export function sum (a, b) {
        return a + b
      }

      function multiply (a, b) {
        return a * b
      }
      export { multiply }

      /* 重命名，import 同样可以 */
      export { sum as add }

      /* 输出默认值，只能给模块设定一个默认值，不必须命名 */
      export default function (a, b) {
        return a + b
      }
      export default sum
      export { sum as default }

      /* 类似于 const ，不可再次定义同名变量 */
      import { identifier1, identifier2 } from './example.js'

      /* 将整个模块引入，所有的输出可以以变量的形式访问 */
      import * as example from './example.js'

      /* 多次 import 同样的模块，该模块也只会执行一次，第一次 import 之后，其实例化的模块会驻留在内存中并随时可由另一个 import 语句引用 */

      /* 引入默认值，需要注意的是没有使用花括号 */
      import sum from './example.js'

      /* 同时引入 */
      import sum, { color } from "./example.js"
      import { default as sum, color} from "./example.js"

      /* 再输出 */
      export { sum } from "./example.js"

      /* 全局引入 */
      /* 一些模块可能并不输出任何内容，相反，他们只是修改全局作用域内的对象（他们是可以访问到全局作用域的） */
      Array.prototype.pushAll = function (items) {
        return this.push(...items)
      }
      /* 然后引入即可 */
      import "./example.js"

      ```

  - AMD 和 CMD 的区别
    - 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行（lazy loading?）
      - AMD 直接加载完依赖再执行回调，CMD 是在执行需要依赖的代码前再加载这个依赖

  - CommonJS 与 ES2015 Modules 的区别
    - https://www.zhihu.com/question/56820346
    - http://es6.ruanyifeng.com/#docs/module-loader
    - https://github.com/olifer655/commonJS/issues/6
    - CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用
    - CommonJS 模块是运行时加载，ES6 模块是编译时（静态编译）输出接口（ES6 入门）

  - 为什么在 webpack 中 import 和 require 都可以使用? 
    - CommonJS 由 webpack 默认支持，而 import 由 babel 支持

  - 循环依赖

  ```js
  // a.js
  console.log('a starting');
  exports.done = false;
  const b = require('./b');
  console.log('in a, b.done =', b.done);
  exports.done = true;
  console.log('a done');

  // b.js
  console.log('b starting');
  exports.done = false;
  const a = require('./a');
  console.log('in b, a.done =', a.done);
  exports.done = true;
  console.log('b done');

  // node a.js
  // 执行结果：
  // a starting
  // b starting
  // in b, a.done = false
  // b done
  // in a, b.done = true
  // a done

  // a.js
  console.log('a starting')
  import {foo} from './b';
  console.log('in b, foo:', foo);
  export const bar = 2;
  console.log('a done');

  // b.js
  console.log('b starting');
  import {bar} from './a';
  export const foo = 'foo';
  console.log('in a, bar:', bar);
  setTimeout(() => {
    console.log('in a, setTimeout bar:', bar);
  })
  console.log('b done');

  // babel-node a.js
  // 执行结果：
  // b starting
  // in a, bar: undefined
  // b done
  // a starting
  // in b, foo: foo
  // a done
  // in a, setTimeout bar: 2
  ```

71. iterator

  - Iterator对象是一个指针对象，实现类似于单项链表的数据结构，通过next()将指针指向下一个节点
  - [Symbol.iterator]
    - 拥有
      - Array
      - 类数组对象：arguments、NodeList
      - Set、Map
    - 可以生成 Iterator 对象，可以被 for-of 取值

72. Symbol

  - 

73. Object.assign

  - 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象

73.  构造字面量对象时的展开运算符语法

  - ES2018，类似 Object.assign() 但是不会触发 setters

  ```js
  b = {
    ...b,
    a: 1
  }
  ```

74. 回溯

```js
var items = []
var sum = ary => ary.reduce((a,b) => a+b)

function targetSum(ary, target, start = 0) {
  for(var i = start; i<ary.length; i++) {
    items.push(ary[i])
    if (sum(items) === target) {
      console.log(items)
    } else if (sum(items) < target) {
      targetSum(ary, target, i + 1)
    }
    items.pop()
  }
}
```

75. 编译 compiler

  - 大部分编译器的编译过程都分为三个阶段
    - 解析：将代码字符串解析成抽象语法树
    - 变换：对抽象语法树进行变换操作
    - 再建：根据变换后的抽象语法树再生成代码字符串

76. callee

```js
var data = [];

for (var i = 0; i < 3; i++) {
    (data[i] = function () {
       console.log(arguments.callee.i) 
    }).i = i;
}
```


# review

1. flattenDeep 和 flatten 合并
2. flattenDepth 和 flattenDeep 合并
3. fromPairs 能不能简写？
4. difference 和 intersection 的简写  -> ok
5. pullAt
6. sortedIndex
  - Math.floor(array.length / 2) -> ?
  - 合并
7. union
8. xor
9. zipObjectDeep
10. isEqual
11. iteratee
12. forEach
13. unionBy

# todo

null