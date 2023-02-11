## 1.选择器直接修改

> 不能改伪元素样式

## 2.修改样式表（示例）

> 插入一个位置最后的样式表，插入样式，可以修改伪元素

```js
function insertCss(select, styles) {
  if (document.styleSheets.length === 0) {
    //如果没有style标签,则创建一个style标签
    let style = document.createElement("style");
    document.head.appendChild(style);
  }

  let styleSheet = document.styleSheets[document.styleSheets.length - 1]; //如果有style 标签.则插入到最后一个style标签中
  let str = select + " {"; //插入的内容必须是字符串,所以得把obj转化为字符串
  for (let prop in styles) {
    str +=
      prop.replace(/([A-Z])/g, function (item) {
        //使用正则把大写字母替换成 '-小写字母'
        return "-" + item.toLowerCase();
      }) +
      ":" +
      styles[prop] +
      ";";
  }
  str += "}";
  styleSheet.insertRule(str, styleSheet.cssRules.length); //插入样式到最后一个style标签中的最后面
}
```
