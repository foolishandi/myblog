```js
JSON.stringify(value[, replacer [, space]])
```

```js
将要序列化成 一个 JSON 字符串的值。

1.replacer可选
可以为数组或函数

如果为数组：则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中
2.replacer 作 key 值（这个在讲实例的时候就知道这个 key 是干嘛的了，先记住就好）
如果为函数：则把系列化后的每一个对象（记住是每一个）传进方法里面进行处理

3.space可选
指定缩进用的空白字符串
如果省略的话，那么显示出来的值就没有分隔符。直接输出来
如果是一个数字的话，那么它就定义缩进几个字符，范围是：0 到 10（数字小于 1，则默认为 0，大于 10，则默认为 10）
如果是一些转义字符，比如“\t”，表示回车，那么它每行一个回车。
如果仅仅是字符串，就在每行输出值的时候把这些字符串附加上去就 OK。当然，最大长度也是 10 个字符

第三个参数就是用来缩进或者直接添加字符串在序列化对象的前面，注意最多只能 10 个缩进或字符
```

```js
JSON.stringify({ a: 2 }, null, " ");
// 输出结果：{\n "a": 2\n}

JSON.stringify({ uno: 1, dos : 2 }, null, '\t')
/_ 输出结果：
{
"uno": 1,
"dos": 2
}
_/

let students = new Object();
students.name = "pika";
students.age = 19;
students.qq = "12345678";
let stu= new Array();
stu[0] = "name";
stu[1] = "qq";
let json = JSON.stringify(students,stu,"test")
/_ 输出结果：
{
test"name": "pika",
test"qq": "12345678"
}
_/
```
