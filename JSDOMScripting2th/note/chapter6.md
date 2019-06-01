# 第6章-图片库改进版

- `onkeypress`事件处理函数是专门用来处理键盘事件的。按下键盘上任何一个按键都会触发`onkeypress`事件。
- 最好不要使用`onkeypress`事件处理函数，不同浏览器绑定按键以及返回结果不同，容易出问题。


## 共享onload事件
addLoadEvent函数将要完成的操作
- 把现有的 `window.onload` 事件处理函数的值存入变量 `oldonload` 。
- 如果在这个处理函数上还没有绑定任何函数，就像平时那样把新函数添加给它。
- 如果在这个处理函数上已经绑定了一些函数，就把新的函数追加到现有函数的末尾。

```javascript
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
```

## 键盘访问
`onkeypress`事件处理函数是专门用来处理键盘事件的。按下键盘的任何一个按键都会出发`onkeypress`事件。

如果想让`onkeypress`事件和`onclick`事件触发同样的行为，可以如下实现
```javascript
links[i].onkeypress = function () {
    return showPic(this) ? false : true;

// 或者
links[i].onkeypress = links[i].onclick;
```

## DOM Core和HTML-DOM

- DOM Core的方法
  - `getElementById`
  - `getElementByTagName`
  - `getAttribute`
  - `setAttribute`
- 支持DOM的任何一种程序设计语言都可以使用上面的方法。
- `onclick`，`forms`，`src`等属性属于HTML-DOM