```js
// 基本类型、数组、对象{}判等函数
const objectEq = (obj1, obj2) => {
  // 类型判断
  if (
    Object.prototype.toString.call(obj1) !==
    Object.prototype.toString.call(obj2)
  ) {
    return false;
  }
  // 判断长短
  if (
    obj1.length !== obj2.length ||
    Object.keys(obj1).length !== Object.keys(obj2).length
  ) {
    return false;
  }

  if (Array.isArray(obj1) || typeof obj1 === "object") {
    // 深度比较
    for (const [key1, value1] of Object.entries(obj1)) {
      if (typeof obj2[key1] === "undefined" || !objectEq(value1, obj2[key1])) {
        return false;
      }
    }
    // 通过测试则为真
    return true;
  } else {
    // 基本类型直接比较
    return obj1 === obj2;
  }
};
```
