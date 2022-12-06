语法:

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

```js
1.求和
const sum=(...res)=>res.reduce((a,b)=>a+b,res.length===0 && 0)
eg:
sum() // >0
sum(1,2,3) // >6

2.二维数组变一维化
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(( acc, cur ) => acc.concat(cur),[]);
// > [0, 1, 2, 3, 4, 5]

3.管道函数
const pipe=(...fns)=>(init)=>fns.reduce((pre,fn)=>fn(pre),init)
eg:
pipe(x=>x\*2,x=>x\*\*2)(2) // >16

//利用代理实现链式操作
let pipe = function (value) {
    let funcStack = [];
    let oproxy = new Proxy({} , {
        get : function (pipeObject, fnName) {
                if (fnName === 'get') {
                    return funcStack.reduce(function (val, fn) {
                        return fn(val);
                    },value);
                }
                funcStack.push(window[fnName]);
                return oproxy;
            }
        });
    return oproxy;
}

var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;

pipe(3).double.pow.reverseInt.get; // 63

4.统计数组重复元素个数
const nums = [1, 2, 3, 3, 2,4,5,4,3];
let count=nums.reduce((pre,num)=>{
pre[num]=(pre[num] || 0)+1
return pre
},{})
// >{1: 1, 2: 2, 3: 3, 4: 2, 5: 1}

5.按属性分组对象
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];
function groupBy(objectArray, property) {
    return objectArray.reduce( (acc, obj)=> {
        let key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
let groupedPeople = groupBy(people, 'age');
// {
// 20: [
// { name: 'Max', age: 20 },
// { name: 'Jane', age: 20 }
// ],
// 21: [{ name: 'Alice', age: 21 }]
// }
```
