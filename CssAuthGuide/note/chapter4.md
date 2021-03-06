- [第4章-值和单位](#sec-1)
  - [数字](#sec-1-1)
  - [函数式RGB颜色](#sec-1-2)
  - [长度单位](#sec-1-3)
    - [绝对长度单位](#sec-1-3-1)
    - [相对长度单位](#sec-1-3-2)
  - [URL](#sec-1-4)
  - [inherit](#sec-1-5)
  - [CSS2单位](#sec-1-6)

# 第4章-值和单位<a id="sec-1"></a>

## 数字<a id="sec-1-1"></a>

CSS中有两类数字:

-   整数
-   实数

## 函数式RGB颜色<a id="sec-1-2"></a>

```css
rgb(100%, 100%, 100%)
rgb(0%, 0%, 0%)
rgb(255, 255,255)
rgb(0, 0,0)
```

## 长度单位<a id="sec-1-3"></a>

长度单位可以划归为两类

-   绝对长度单位
-   相对长度单位

### 绝对长度单位<a id="sec-1-3-1"></a>

有5种绝对长度单位, Web设计中很少使用

-   英寸(in)
-   厘米(cm)
-   毫米(mm)
-   点(pt)
-   派卡(pc), 1派卡等于12点

### 相对长度单位<a id="sec-1-3-2"></a>

有3种相对长度单位

-   em(em-height)
-   ex(x-height)
-   px(像素)

在CSS中, 一个 `em` 定义为一种给定字体的 `font-size` 的值.

-   如果一个元素的 `font-size` 为14像素, 那么对于该元素, 1em就等于14像素.

一般情况 `1ex` 等于 `0.5em`.

## URL<a id="sec-1-4"></a>

使用 `@import` 导入外部样式表, URL一般格式为

```css
url(protocol://server/pathname)
```

如果URL指向一个相对位置, 一般格式为

```css
url(pathname)
```

## inherit<a id="sec-1-5"></a>

CSS2.1中有一个关键字是所有属性共有的, 这就是 `inherit`. `inherit` 使一个属性的值与其父元素的值相同.

-   大多情况不需要指定继承, 默认使用继承.

## CSS2单位<a id="sec-1-6"></a>

CSS2还包含另外几个单位, 所有这些单位都与声音样式表有关.

-   角度值: 度(deg), 梯度(grad)和弧度(rad)
-   时间值(毫秒和秒)
-   频率值(赫兹和兆赫)
