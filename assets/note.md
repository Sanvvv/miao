# 数组方法

- 没有注明的是 Array.prototype.function
- 大部分新提供的数组遍历方法都有包括 index

## filter

`var new_array = arr.filter(callback[, thisArg])`

callback：返回true表示保留该元素（通过测试），false则不保留。

纯函数。

ep: `array.filter(value => value)`

## forEach

```js
array.forEach(callback(currentValue, index, array){
    //do something
}, this)
```

效果类似 for of，但是它的 callback 有三个参数：currentValue, index, array

## map

使用函数处理一个数组内的项

## indexOf && includes

...

## 判断数组

- Array.isArray() （由 es5 提供）
- [] instanceof Array （在多 window 的情况下(跨iframe)会出现问题）
- Object.prototype.toStirng.call([1,2,3]) === '[object Array]' （最佳）

# 判断类型
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

```
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
```

# RegExp

[http://deerchao.net/tutorials/regex/regex.htm]

## 语法
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

### 后向引用

- 用于重复搜索前面某个分组匹配的文本（以小括号分组）

### 零宽断言

- `(?=exp)`：匹配exp前面的位置
- `(?<exp)`：匹配exp后面的位置
- `(?!exp)`：匹配后面不是exp的位置
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

27. 冒泡

  - if !swaped return
  - 内层循环递减

28. 箭头函数

  - this：箭头函数根据当前的词法作用域而不是根据this机制顺序来决定this，所以，箭头函数会继承外层函数调用的this绑定，而无论this绑定到什么
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

36. 排序的稳定性

  - 

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

  - 词法作用域：函数内部变量的可见性取决于函数在代码当中的位置，函数可以访问到定义这个函数的代码块中的所有变量和函数内部变量

46. 调用栈

  - 由于函数需要在执行结束后跳转回调用该函数的代码位置，因此计算机必须记住函数调用的上下文（执行上下文??）
  - 调用栈：存储这个上下文的区域，每当函数调用时，当前的上下文信息会被存储在栈顶，函数返回时系统会删除在栈顶的上下文信息，并使用该信息继续执行程序
  - 递归过多会导致栈存储空间过大（栈空间溢出）

47. 闭包

  - 包装了一些局部变量的函数，因此不需要担心变量的生命周期问题

48. 高阶函数

  - 操作其他函数，即将其他函数作为参数或者将函数作为返回值的函数

49. JSON

  - 所有属性名必须用双引号括起来
  - 只能使用简单的数据表达式，不能填写函数调用、变量以及任何含有实际计算过程的代码
  - 不能有注释

50. 继承

  - RTextCell.prototype = Object.create(TextCell.prototype)
  - `B.prototype.__proto__ = A.prototype`
  - Object.setPrototypeof(B.prototype, A.prototype)
  - B.prototype = new A()
  - 其他可以参见 js语言精粹：继承
  - es5 的继承
  - 多级继承

51. 原型

52. 原型链

53. 无原型对象

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

57. js 运行原理? （javascript 是如何工作的）

  - 引擎：
    - 调用栈（Call Stack）、Memory Heap
  - web environment：
    - 运行上下文（Runtime）、事件循环（Event Loop）

  - 引擎负责整个代码的编译以及运行，编译器则负责词法分析、语法分析、代码生成等工作而作用域则如我们熟知的一样，负责维护所有的标识符（变量）

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

58. Runtime

  - Web APIs：DOM、XHR、setTimeout() & Node APIs

58. Call Stack

  - 对于调用栈中的每个方法调用，都会形成（进入）自己的执行上下文（Execution Context）

58. Execution Context

  - 执行上下文会确定这个函数执行期间用到的诸如 this，变量，对象以及定义的方法等

  - 执行环境：全局代码、函数代码、Eval 代码

  - 执行函数代码之前，会先创建执行上下文
  - 创建阶段
    - 创建作用域链 scope chain
    - JS 解析器扫描一遍代码，创建 variables，functions 和 arguments（三个称之为 variable Object， 变量对象）
      - 对于声明的函数，会创建对应变量名指向该函数，如果已经存在用新的引用值覆盖
      - 对于变量，同样会创建对应变量名，但这个时候值还是 undefined
    - 决定 this 指向
  - 执行阶段
    - 重新扫描一遍代码，执行代码（在这个时候给变量赋值）

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



60. Web Worker 提供多线程?

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

63. 严格模式 strict mode

  - 必须要事先声明变量
  - 直接使用函数调用（不是作为方法）的时候，this 是 undefined （而不是 window）
  - 禁止给函数提供多个相同的参数
  - 去除了 with 语句
  - 会使引起静默失败的赋值语句抛出错误
  - 禁止八进制数字语法（在 es6 中需要在数字前面加上 0o）
  - 禁止设置 primitive 值的属性
  - eval 不再为上层范围引入新变量（eval 不会在当前作用域中声明变量（虽然 eval 能访问到当前作用域），仅为运行的代码创建变量）
    - eval 具有某种意义上的动态作用域
    - 将 eval 赋值给其他变量，调用的时候是在全局的作用域中执行（而不是当前）
  - 禁止删除变量声明 （var x; delete x;）
  - 在非严格模式中 arguments 和函数参数完全绑定在一起，会一起修改，严格模式下不会（符合对指针的理解）
  - 不再支持 arguments.callee（指向当前正在进行的函数）和 func.caller
  - this 不再会被强制转换为对象（包装对象），并且未指定的 this 会变成 undefined
  - 禁止了不在脚本或者函数层面的函数声明（在条件、循环语句中声明）

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