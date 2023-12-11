1. 中文排序

```js
let arrUsername = [
  "陈坤",
  "邓超",
  "杜淳",
  "冯绍峰",
  "韩庚",
  "胡歌",
  "黄晓明",
  "贾乃亮",
  "李晨",
  "李易峰",
  "鹿晗",
  "井柏然",
  "刘烨",
  "陆毅",
  "孙红雷",
];

arrUsername.sort(new Intl.Collator("zh").compare);
// 结果是：["陈坤", "邓超", "杜淳", "冯绍峰", "韩庚", "胡歌", "黄晓明", "贾乃亮", "井柏然", "李晨", "李易峰", "刘烨", "陆毅", "鹿晗", "孙红雷"]
//
```

2. 数字 3 位分组

```js
new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 4,
}).format(12345.6789);
// 结果是："12,345.6789"
```
