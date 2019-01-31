# 第6章-图片库改进版

- `onkeypress`事件处理函数是专门用来处理键盘事件的。按下键盘上任何一个按键都会触发`onkeypress`事件。
- 最好不要使用`onkeypress`事件处理函数，不同浏览器绑定按键以及返回结果不同，容易出问题。

## DOM Core和HTML-DOM

- DOM Core的方法
  - `getElementById`
  - `getElementByTagName`
  - `getAttribute`
  - `setAttribute`
- 支持DOM的任何一种程序设计语言都可以使用上面的方法。
- `onclick`，`forms`，`src`等属性属于HTML-DOM