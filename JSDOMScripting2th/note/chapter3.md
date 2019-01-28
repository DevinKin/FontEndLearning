# 第3章-DOM

- JavaScript语言里面的对象可以分为三种类型
  - 用户自定义对象（user-defined object）：由程序员自行创建的对象。
  - 内建对象（native object）：内建在JavaScript语言里的对象，如`Array`，`Math`和`Date`等。
  - 宿主对象（host object）：由浏览器提供的对象。

## 节点

- DOM的原子是元素节点（Element node）。
- DOM中节点有
  - 元素节点。
  - 文本节点。
  - 属性节点。

## 获取元素

- 有3种DOM方法可以获取元素节点
  - `getElementById`通过元素ID获取元素。
  - `getElementsByTagName`通过标签名称获得一个对象数组。
  - `getElementsByClassName`通过类名获得一个具有相同类名元素的数组。
    - 要指定多个类名，在字符串参数中用空格分隔类名即可。类名的顺序没有特别的要求。
- 一份文档就是一棵节点树。
- 节点分为不同的类型：元素节点，属性节点和文本节点等。
- 每个节点都是一个对象。

## 获取和设置属性

### getAttribute

- `getAttribute`是一个函数。它只有一个参数，查询的属性的名字。
  - `object.getAttribute(attribute)`
- `getAttribute`方法不属于document对象。

