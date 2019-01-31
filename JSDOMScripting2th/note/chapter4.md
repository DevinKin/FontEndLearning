# 第4章-JavaScript图片库案例

## 事件处理函数

- 事件处理函数的作用是，在特定事件发生时调用特定的JavaScript代码。
- `onmouseover`事件处理函数在鼠标指针悬停在某个元素上时触发一个动作。
- `onmouseout`事件处理函数在鼠标指针离开某个元素上时触发一个动作。
- `onclick`事件处理函数在鼠标指针点击某个链接时触发一个动作。
- `this`关键字在标签中表明这个对象。
- 在`<a>`标签中`onclick`事件处理函数所触发的JavaScript代码里增加一条`return false`语句，就可以防止用户被带到目标链接窗口。

### childNodes属性

- 在一棵节点树上，`childNodes`属性可以用来获取任何一个元素的所有子元素，它是一个包含这个元素全部子元素的数组。
- 想要让函数在页面执行时加载，使用`onload`事件处理函数。`window.onload = countBodyChildren;`

### nodeType属性

- `nodeType`属性可以获取节点的类型。
- `nodeType`属性共12种可取值
  - 元素节点的`nodeType`是属性值是1。
  - 属性节点的`nodeType`是属性值是2。
  - 文本节点的`nodeType`是属性值是3。

### nodeValue属性

- `nodeValue`属性改变和获取文本节点的值。

### firstChild和lastChild属性

- `firstChild`与`node.childNodes[0]`等价。
- `lastChild`属性获取`childNodes`数组的最后一个元素。等价于`node.childNodes[node.childNodes.length - 1]`

