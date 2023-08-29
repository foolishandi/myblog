## 1.QLabel 文本文字 设置换行/省略号 处理方式

（1）换行显示
```c++
QLable *label = new QLabel(this);
label->adjushSize();   //自适应大小
label->setWordWrap(true); //自动换行
```
（2）设置省略形式（不完全显示）
小谈：这种形式，通常在开发中用到表格Table上的场景比较多，可以拖动表格纵轴，里面内容显示应该根据自适应显示，未完全展示的部分可以用**…** 代替显示。
```c++
//函数原型：
QString QFontMetrics::elidedText(const QString &text, Qt::TextElideMode mode, int width, int flags = 0) const
//第二个参数为文本缩略后，省略号所在的位置，可选：
Qt::ElideLeft    0     省略号应出现在文本的开头。
Qt::ElideRight    1     省略号应出现在文本的末尾。
Qt::ElideMiddle    2     省略号应出现在文本的中间。
Qt::ElideNone    3     省略号不应出现在文本中。

//示例代码：
QLable *noteLabel = new QLable(this);
QString strMsg = "我是一串乱八七糟的字符串QString";
QFontMetrics fontWidth(noteLabel->font());//得到每个字符的宽度
QString elideNote = fontWidth.elidedText(newStrMsg, Qt::ElideRight, 150);//最大宽度150像素
noteLabel->setText(elideNote);//显示省略好的字符串
noteLabel->setToolTip(newStrMsg);//设置tooltips
```

