+++
title = "JavaScript高级程序设计-第四章-变量、作用域和内存问题"
lastmod = 2020-05-16T10:25:24+08:00
tags = ["JavaScript", "前端"]
categories = ["JavaScript"]
draft = false
author = "devinkin"
+++
# 第四章-变量、作用域和内存问题
 
## 基本类型和引用类型
 
- `ECMAScript`变量可能包含两种不同数据类型的值：
 
  - 基本类型值：简单的数据段。
  - 引用类型值：可能由多个值构成的对象。
- 基本数据类型`Undefined`、`Null`、`Boolean`、`Number`、`String`，这5种基本类型是按值访问的，因为可以操作保存在变量中的实际的值。
- 引用类型的值是保存在内存中的对象。
- JavaScript不允许直接操作对象的内存空间。
 
### 动态的属性
 
- 对于引用类型的值，我们可以为其添加属性和方法，也可以改变和删除其属性和方法。
 
###  复制变量值
 
- 基本类型的复制是复制一个副本，两个变量互不影响。
- 引用类型的复制是复制一个指针，两个变量引用同一个对象。
 
### 传递参数
 
- `ECMAScript`中所有函数的参数都是按值传递的。
 
###  检测类型
 
- 检测基本类型的值时，使用`typeof`非常有用。
 
- 检测引用类型的值时，可以使用`instanceof`操作符。
 
- 语法
 
  ```javascript
  result = variable instanceof constructor
  ```
 
- 所有引用类型的值都是`Object`的实例。
 
## 执行环境及作用域
 
- 全局执行环境是最外围的一个执行环境.
- 在Web浏览器中，全局执行环境被认为是`window`对象。
- 全局执行环境的变量对象始终都是作用域链中的最后一个对象。
- 标识符解析是沿着作用域链一级一级地搜索标识符的过程。
 
### 延长作用域链
 
- `try-catch`语句的`catch`块
- `with`语句
 
### 没有块级作用域
 
```javascript
if (true) {
    var color = "blue";
}
alert(color);
 
for (var i = 0; i < 10; i++) {
    doSomething(i);
}
alert(i);
```
 
#### 声明变量
 
- 使用`var`声明的变量会自动添加到最接近的环境中。
  - 在函数内部，最接近的环境就是函数的局部环境。
  - 在`with`语句中，最接近的环境就是函数环境。
 
## 垃圾收集
 
### 标记清除
 
- 当变量进入环境（如在函数中声明一个变量）时，就将这个变量标记为“进入环境”。离开某个环境时，就将其标记为“离开环境”。
 
### 引用计数
 
- 引用计数策略容易触发循环引用的问题，会导致对象无法清除。
