# 第5章-最佳实践

## 平稳退化

- JavaScript使用window对象的`open()`方法来创建新的浏览器窗口。语法格式为`window.open(url, name, features)`

  - 第一个参数`url`是想在新窗口里打开的网页的URL地址。
  - 第二个参数`name`是新窗口的名字。可以在代码里通过这个名字于新窗口进行通信。
  - 第三个参数`features`是一个以逗号分隔的字符串，其内容是新窗口的各种属性。

- 平稳退化的例子，即使JavaScript被禁用了（或者遇到爬虫机器人），链接仍然可用。

  ```html
  <a href="http://www.example.com/" onclick="popUP(this.href); return false;">Example</a>
  ```

  

### “javascript:”伪协议

- `javascript:`伪协议让我们通过一个链接来调用JavaScript函数。
- 不推荐这样做，禁用JavaScript功能的浏览器可能什么也不做。

## 分离JavaScript

- HTML文档全部加载完毕时将触发一个`window.onload`事件。
- 当window对象触发`onload`事件时，document对象已经存在。

## 性能考虑

- 尽量少访问DOM和尽量减少标记
- 合并和放置脚本。
- 压缩脚本。