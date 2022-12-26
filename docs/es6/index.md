---
sidebar_position: 0
---

# 文档教程

:::note
[阮一峰 ES6 入门教程](https://es6.ruanyifeng.com/)
:::

## es 各版本更新以及浏览器支持情况

### es12: ECMAScript 2021

:::info
内容简介

```js
1. replaceAll //谷歌86+

2. Promise.any //谷歌85+

3. WeakRefs

4. 逻辑运算符和赋值表达式
a ||= b
//等价于
a = a || (a = b)

a &&= b
//等价于
a = a && (a = b)

a ??= b
//等价于
a = a ?? (a = b)


5. 数字分隔符

const money = 1_000_000_000;
//等价于
const money = 1000000000;

1_000_000_000 === 1000000000; // true
```

:::

### es11: ECMAScript 2020

:::info
内容简介

```js
1. Nullish coalescing Operator(空值处理) ?? :表达式在 ?? 的左侧 运算符求值为undefined或null，返回其右侧。

2. Optional chaining（可选链）
?.用户检测不确定的中间节点
let user = {}
let u1 = user.childer.name // TypeError: Cannot read property 'name' of undefined
let u1 = user.childer?.name // undefined

3. Promise.allSettled //谷歌76+

4. import():按需导入

5. globalThis
    >浏览器：window
    >worker：self
    >node：global

```

:::

### es10: ECMAScript 2019

:::infor
内容简介

```js
1.Array.prototype.flat() //谷歌69+
const numbers1 = [1, 2, [3, 4, [5, 6]]]
console.log(numbers1.flat())// [1, 2, 3, 4, [5, 6]]
const numbers2 = [1, 2, [3, 4, [5, 6]]]
console.log(numbers2.flat(2))// [1, 2, 3, 4, 5, 6]

2.Array.prototype.flatMap():深度为1 //谷歌69+
let arr = [1, 2, 3]
console.log(arr.map(item => [item * 2]).flat()) // [2, 4, 6]
console.log(arr.flatMap(item => [item * 2])) // [2, 4, 6]

3.Object.fromEntries() //谷歌73+
const object = { x: 23, y:24 };
const entries = Object.entries(object); // [['x', 23], ['y', 24]]
const result = Object.fromEntries(entries); // { x: 23, y: 24 }

4.String.trimStart 和 String.trimEnd //谷歌66+

5.String.prototype.matchAll //谷歌73+

6.try…catch:ry-catch语句中的参数变为了一个可选项
// ES10
try {
  console.log('Foobar')
} catch {
  console.error('Bar')
}

7.BigInt:BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。
// 谷歌67+
const aNumber = 111;
const aBigInt = BigInt(aNumber);
aBigInt === 111n // true
typeof aBigInt === 'bigint' // true
typeof 111 // "number"
typeof 111n // "bigint"

8.Symbol.prototype.description

9.Function.prototype.toString() //基本不支持
function sum(a, b) {
  return a + b;
}
console.log(sum.toString());
// function sum(a, b) {
//  return a + b;
// }
```

:::

### es9: ECMAScript2018

:::info
内容简介

```js
1.for await of :异步遍历器 //谷歌63+
async function test () {
  let arr = [Gen(2000), Gen(100), Gen(3000)]
  for await (let item of arr) {
    console.log(Date.now(), item)
  }
}
test()

2.Object Rest Spread //谷歌60+
const input = {
  a: 1,
  b: 2,
  c: 1
}
const output = {
  ...input,
  c: 3
}
console.log(output) // {a: 1, b: 2, c: 3}

3.Promise.prototype.finally()

4.新的正则表达式特性 //谷歌64+
 > s (dotAll) 标志
const re = /foo.bar/s // Or, `const re = new RegExp('foo.bar', 's');`.
console.log(re.test('foo\nbar')) // true
console.log(re.dotAll) // true
console.log(re.flags) // 's'

 >命名捕获组
const re = /(\d{4})-(\d{2})-(\d{2})/;
const match= re.exec('2019-01-01');
console.log(match[0]);    // → 2019-01-01
console.log(match[1]);    // → 2019
console.log(match[2]);    // → 01
console.log(match[3]);    // → 01

const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = re.exec('2019-01-01');
console.log(match.groups);          // → {year: "2019", month: "01", day: "01"}
console.log(match.groups.year);     // → 2019
console.log(match.groups.month);    // → 01
console.log(match.groups.day);      // → 01

 >Lookbehind 后行断言
let test = 'world hello'
console.log(test.match(/(?<=world\s)hello/))
// ["hello", index: 6, input: "world hello", groups: undefined]

 >Unicode属性转义:可以使用\p{Number}来匹配所有的Unicode数字
const str = '㉛';
console.log(/\d/u.test(str));    // → false
console.log(/\p{Number}/u.test(str));     // → true
```

:::

### es8：ECMAScript2017

:::info
内容简介

```js
1.Async/Await //谷歌55+

2.Object.values()，Object.entries() //谷歌54+

3.String padding //谷歌57+

4.Object.getOwnPropertyDescriptors() //谷歌54+
```

:::

### es7: ECMAScript 2016

:::info
内容简介

```js
1.Array.prototype.includes（arr，index） //谷歌41+

2.Exponentiation Operator(求幂运算符) 2 ** 3 =>8
```

:::

### es6: ECMAScript2015

:::note
`ES6`， 全称`  ECMAScript 6.0` ，即 ES6，是 ` ECMAScripts` 的第六次修订，又称 ES2015，于 2015 年 06 月发版，是 `JavaScript` 的下一个版本标准。

ES6 主要是为了解决 ES5 的先天不足，目前浏览器的 `JavaScript` 是 `ES5` 版本，大多数高版本的浏览器也支持 `ES6`，不过只实现了 `ES6` 的部分特性和功能。

:::

:::info
简要内容

```js
1. 块级作用域 => 关键字 let，常量 const
   > 如果 const 的是一个对象，对象所包含的值是可以被修改的。
   > 抽象一点儿说，就是对象所指向的地址不能改变，而变量成员 是可以修改的。


2. 对象的扩展
    >Object.keys()/Object.assign ()

3. 解构赋值

4. 展开运算符

5. 函数的扩展
    >函数的默认参数
    >箭头函数:箭头函数中的 this 始终指向箭头函数定义时的离 this 最近的一个函数，如果没有最近的函数就指向 window。

6. 模板字符串

7. for...of循环

8. Class类，有constructor、extends、super，本质上是语法糖，（对语言的功能并没有影响，但是更方便程序员使用）。
    >ES5 使用原型链实现继承

9. Map + Set + WeakMap + WeakSet

10. Math + Number + String + Array + Object 新APIs

11. proxies：使用代理（Proxy）监听对象的操作，然后可以做一些相应事情。

12. Symbol： 唯一命名

13. Promises

14. import 和 export

15. Modules:ES6的内置模块功能借鉴了CommonJS和AMD各自的优点：
    >具有CommonJS的精简语法、唯一导出出口(single exports)和循环依赖(cyclic dependencies)的特点。
    >类似AMD，支持异步加载和可配置的模块加载。
```

:::

### es5: ECMAScript 5.1

:::note
` ECMAScript 5.1` (或仅 ES5) 是 ` ECMAScript`(基于 `JavaScript` 的规范)标准的修正。 与 `HTML5` 规范进程本质类似，`ES5` 通过对现有 `JavaScript` 方法添加语句和原生 ` ECMAScript` 对象做合并实现标准化。

是` ECMAScripts`的第五次修订（第四版因为过于复杂废弃了），又称` ECMAScript2009`，于 `2009` 年完成标准化。
:::

:::danger
除了正常运行模式，` ECMAScript 5` 添加了第二种运行模式："严格模式"（`strict mode`）。顾名思义，这种模式使得 Javascript 在更严格的条件下运行。

设立"严格模式"的目的，主要有以下几个：

1：消除 `Javascript` 语法的一些不合理、不严谨之处，减少一些怪异行为。

2：消除代码运行的一些不安全之处，保证代码运行的安全。

3：提高编译器效率，增加运行速度。

4：为未来新版本的 `Javascript` 做好铺垫。

"严格模式"体现了 `Javascript` 更合理、更安全、更严谨的发展方向，包括 `IE 10` 在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。

5: 严格模式改变语法和行为
严格模式对 Javascript 的语法和行为，都做了一些改变。

- 1：全局变量显式声明。

在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，全局变量必须显式声明。因此，严格模式下，变量都必须先用 var 命令声明，然后再使用。

- 2：函数形参不允许重复。

- 3：禁止使用 with 语句。

- 4：禁止函数内部 this 关键字指向全局对象，this 指向 undefined。

- 5：函数必须声明在顶层。

> 开启方法:js 文件首行

```js
"use strict";
```

:::

:::info
简要内容:

```js
新增bind方法;

新增数组方法：
forEach、map、filter、some、every、indexOf
lastIndexOf、reduce、reduceRight、Array.isArray()

新增字符串方法：
trim()、charAt()、charCodeAt()、match()、.search()、replace()
slice()、substring()、substr(start,length)、split("分割位置",[指定的长度])
toLowerCase()、toUpperCase()

新增JSON对象方法:JSON.parse、JSON.stringify

新增Object方法：
    Object.getPrototypeOf
    Object.create
    Object.getOwnPropertyNames
    Object.defineProperty
    Object.getOwnPropertyDescriptor
    Object.defineProperties
    Object.keys
    Object.preventExtensions / Object.isExtensible
    Object.seal / Object.isSealed
    Object.freeze / Object.isFrozen

```

:::
