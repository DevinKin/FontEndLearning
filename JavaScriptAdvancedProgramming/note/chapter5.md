- [第5章-引用类型](#sec-1)
  - [Object类型](#sec-1-1)
  - [Array类型](#sec-1-2)
    - [检测数组](#sec-1-2-1)
    - [转换方法](#sec-1-2-2)
    - [栈方法](#sec-1-2-3)
    - [队列方法](#sec-1-2-4)
    - [重排序方法](#sec-1-2-5)
    - [操作方法](#sec-1-2-6)
    - [迭代方法](#sec-1-2-7)
    - [聚合方法](#sec-1-2-8)
  - [Date类型](#sec-1-3)
    - [继承的方法](#sec-1-3-1)
    - [日期格式化方法](#sec-1-3-2)
    - [日期/时间组件方法.](#sec-1-3-3)
  - [RegExp类型](#sec-1-4)
    - [RegExp实例属性](#sec-1-4-1)
    - [RegExp实例方法](#sec-1-4-2)
    - [RegExp构造函数属性](#sec-1-4-3)
  - [Function类型](#sec-1-5)
    - [函数声明与函数表达式](#sec-1-5-1)
    - [作为值的函数](#sec-1-5-2)
    - [函数内部属性](#sec-1-5-3)
    - [函数属性和方法](#sec-1-5-4)
  - [基本包装类型](#sec-1-6)
    - [Number类型](#sec-1-6-1)
    - [String类型](#sec-1-6-2)
  - [单体内置对象](#sec-1-7)
    - [Global对象](#sec-1-7-1)
    - [Math对象](#sec-1-7-2)

# 第5章-引用类型<a id="sec-1"></a>

## Object类型<a id="sec-1-1"></a>

创建 `Object` 实例的方式有两种

-   使用 `new` 操作符后跟 `Object` 构造函数.
-   使用对象字面量表示法.

```javascript
var person = new Object();
person.name = "Nicholas";
person.age = 29;

console.log(person);
console.log(person.name);
console.log(person.age);

var person = {
    name : "Nicholas",
    age : 29
};

console.log(person);
console.log(person.name);
console.log(person.age);
```

JavaScript支持方括号访问属性 `person["name"]`

## Array类型<a id="sec-1-2"></a>

ECMAScript数字的每一项都可以保存任何类型的数据, 大小可以动态调整.

创建数组有两种方式

-   使用 `Array` 构造函数, 可以忽略 `new` 操作符.
-   数组字面量创建.

```javascript
var colors = Array(3);
var names = new Array("Greg");

console.log(colors);

console.log(names);

var colors = ["red", "blue", "green"];
var names = [];
var values = [1, 2, ];
var options = [, , , , , ];

console.log(colors);
console.log(names);
console.log(values);
console.log(options);
```

数组的项数保存在 `length` 属性中, 这个属性始终会返回0或更大的值.

数组的 `length` 属性不是只读的.

```javascript
var colors = ["red", "blue", "green"];
colors.length = 2;
console.log(colors[2]);

var colors = ["red", "blue", "green"];
colors.length = 4;
console.log(colors[3]);

var colors = ["red", "blue", "green"];
colors[colors.length] = "black";
colors[colors.length] = "brown";

console.log(colors);

var colors = ["red", "blue", "green"];
colors[99] = "black"
console.log(colors.length);
```

### 检测数组<a id="sec-1-2-1"></a>

ECMAScript新增了 `Array.isArray()` 方法, 确定某个值是不是数组, 不管它是在哪个全局执行环境中创建的.

### 转换方法<a id="sec-1-2-2"></a>

```javascript
var colors = ["red", "blue", "green"];
console.log(colors.toString());
console.log(colors.valueOf());
console.log(colors);

/**
red,blue,green
[ 'red', 'blue', 'green' ]
[ 'red', 'blue', 'green' ]
*/
```

当调用数组的 `toLocaleString()` 方法时, 它也会创建一个数组值的以逗号分隔的字符串, 每一项调用的是 `toLocaleString()` 方法.

```javascript
var person1 = {
    toLocaleString : function () {
        return "Nikolaos";
    },

    toString : function () {
        return "Nicholas";
    }
};

var person2 = {
    toLocaleString : function () {
        return "Grigorios";
    },

    toString : function () {
        return "Greg";
    }
};

var people = [person1, person2];
console.log(people);
console.log(people.toString());
console.log(people.toLocaleString());

/**
[
    {
        toLocaleString: [Function: toLocaleString],
        toString: [Function: toString]
    },
    {
        toLocaleString: [Function: toLocaleString],
        toString: [Function: toString]
    }
]
Nicholas,Greg
Nikolaos,Grigorios
*/
```

数组的 `join()` 方法可以使用不同的分隔符来构建这个字符串, 只接收一个参数, 即用作分隔符的字符串, 然后返回包含所有数组项的字符.

```javascript
var colors = ["red", "green", "blue"];
console.log(colors.join("."));
console.log(colors.join("||"));

/**
   red.green.blue
   red||green||blue
   */
```

### 栈方法<a id="sec-1-2-3"></a>

`push()` 方法接受任意数量参数, 把他们逐个添加到数组尾部, 并返回修改后数组的长度.

`pop()` 方法则从数组末尾移除最后一项, 减少数组的 `length` 值, 然后返回移除项.

### 队列方法<a id="sec-1-2-4"></a>

`shift()` 方法能移动数组的第一项并返回该项, 同时将数组长度减1.

`push()` 方法接受任意数量参数, 把他们逐个添加到数组尾部, 并返回修改后数组的长度.

`unshift()` 方法能在数组前端添加任意个项并返回新数组的长度.

### 重排序方法<a id="sec-1-2-5"></a>

`reverse()` 方法会反转数组项顺序.

`sort()` 接受一个比较函数作为参数进行排序.

比较函数接收两个参数

-   第一个参数应该在第二个之前返回一个负数.
-   两个参数相等, 返回0.
-   第一个参数应该在第二个之后返回一个正数.

```javascript
function compare(value1, value2) {
    if (value1 < value2) {
        return 1;
    } else if (value1 > value2) {
        return -1;
    } else {
        return 0;
    }
}

var values = [0, 1, 5, 10, 15];
values.sort(compare);
console.log(values);
```

### 操作方法<a id="sec-1-2-6"></a>

`concat()` 方法基于当前数组中所有项创建一个新数组, 将所有接收到的参数添加到这个副本的末尾.

```javascript
var colors = ["red", "green", "blue"];

var colors2 = colors.concat("yellow", ["black", "brown"]);

console.log(colors);

console.log(colors2);
```

`slice()` 方法基于当前数组中的一或多个项创建一个新数组, 该方法接收一个或两个参数, 即要返回项起始和结束位置.

```javascript
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1, 4);

console.log(colors2);
console.log(colors3);
```

`splice()` 方法主要用途是向数组的中部插入项, 使用这种方法的方式有以下3种

-   删除: 可以删除任意数量的项, 指定两个参数, 要删除的第一项的位置和要删除的项数.
-   插入: 可以指定位置插入任意数量的项. 提供3个参数, 起始位置, 0(要删除的项数)和要插入的项. 如果要插入多个项, 可以再传入4,5,以及任意多个项.
-   替换: 可以向指定位置插入任意数量的项, 且同时删除任意数量的项, 指定3个参数, 起始位置, 要删除的项数, 要插入的任意数量的项. 插入项数和删除项数可以不必相等.

```javascript
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1);
console.log(colors);
console.log(removed);

removed = colors.splice(1, 0, "yellow", "orange");
console.log(colors);
console.log(removed);

removed = colors.splice(1, 1, "red", "purple");
console.log(colors);
console.log(removed);

/**
   [ 'green', 'blue' ]
   [ 'red' ]
   [ 'green', 'yellow', 'orange', 'blue' ]
   []
   [ 'green', 'red', 'purple', 'orange', 'blue' ]
   [ 'yellow' ]
 */
```

### 迭代方法<a id="sec-1-2-7"></a>

ECMAScript6为数组定义了5个迭代方法, 每个方法都接收两个参数

-   每一项上运行的函数, 该函数接收3个参数, 数组项的值, 该项在数组中的位置和数组对象本身.
-   运行该函数的作用域对象, 影响 `this` 的值.

5个迭代方法的作用分别是, 这些方法都不会修改数组中包含的值

-   `every()` 对数组中的每一项运行给定函数, 如果对每一项都返回 `true` , 则返回 `true` .
-   `filter()` 对数组中的每一项运行给定函数, 如果该函数会返回 `true` 的项组成的函数.
-   `forEach()` 对数组中的每一项运行给定函数. 这个方法没有返回值.
-   `map()` 对数组中的每一项运行给定函数, 返回每次函数调用的结果组成的数组.
-   `some()` 对数组中的每一项运行给定函数, 如果该函数对任一项返回 `true` , 则返回 `true` .

```javascript
var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.every(function (item, index, array) {
    return (item > 2);
});
console.log(everyResult);

var someResult = numbers.some(function (item, index, array) {
    return (item > 2);
});
console.log(someResult);

/**
   false
   true
   */

var numbers = [1,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function (item, index, array) {
    return (item > 2);
});

console.log(filterResult)
//[ 3, 4, 5, 4, 3 


var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var mapResult = numbers.map(function (item, index, array) {
    return item * 2;
});

console.log(mapResult);
/**
   [
   2, 4, 6, 8, 10,
   8, 6, 4, 2
]
 */
```

### 聚合方法<a id="sec-1-2-8"></a>

`reduce()` 和 `reduceRight()` 方法都会迭代数组的所有项, 然后构建一个最终返回的值.

-   `reduce()` 方法从数组的第一项开始, 逐个遍历到最后.
-   `reduceRight()` 则从数组的最后一项开始, 向前遍历到第一项.
-   两个方法都接收两个参数, 一个在每一项上调用的函数和(可选的)作为聚合基础的初始值.
    -   该函数接收4个参数, 前一个值, 当前值, 项的索引和数组对象.

```javascript
var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function (prev, cur, index, array) {
    return prev + cur;
});
console.log(sum);
```

## Date类型<a id="sec-1-3"></a>

`Date` 类型使用自UTC开始的毫秒数来保存日期.

`Date.UTC()` 方法返回当前时间到UTC开始的毫秒数. 参数分别是

-   年份
-   基于0的月份(一月是0,二月是1)
-   月中的哪一天(1到31)
-   小时数(0到23)
-   分钟
-   秒
-   毫秒

`Date.parse()` 方法接收一个表示日期的字符串参数, 然后尝试根据这个字符串返回相应的毫秒数.

`Date` 构造函数和 `Date.UTC()` 的参数类似, 但是日期时间都基于本地时区而非GMT来创建.

ECMAScript5添加了 `Date.now()` 方法, 返回表示调用这个方法时的日期和时间的毫秒数.

### 继承的方法<a id="sec-1-3-1"></a>

`Date` 类型的 `toLocaleString()` 方法会按照浏览器设置的地区相适应的格式返回日期和时间.

`Date` 类型的 `toString()` 方法通常返回带有时区信息的日期和时间, 一般以军用时间(小时范围为0到23)表示.

`Date` 类型的 `valueOf()` 方法, 根本不返回字符串, 而是返回日期的毫秒表示.

### 日期格式化方法<a id="sec-1-3-2"></a>

`Date` 类型有专门用于将日期格式为字符串的方法

-   `toDateString()` 以特定于实现的格式显示星期几,月,日和年.
-   `toTimeString()` 以特定于实现的格式显示时,分,秒和时区.
-   `toLocaleDateString` 以特定于实现的格式显示星期几,月,日和年.
-   `toLocaleTimeString()` 以特定于实现的格式显示时,分,秒.
-   `toUTCString()` 以特定于实现的格式完整的UTC日期.

### 日期/时间组件方法.<a id="sec-1-3-3"></a>

| 方法                   | 说明                                 |
|---------------------- |------------------------------------ |
| getTime()              | 返回表示日期的毫秒数,与valueOf()返回的值相同 |
| setTime(毫秒)          | 以毫秒设置日期,会改变整个日期        |
| getFullYear()          | 取得4位数的年份(2007)                |
| getUTCFullYear()       | 取得UTC日期4位数的年份(2007)         |
| setFullYear(年)        | 设置日期的年份,传入的年份值必须是4位数字(2007) |
| setUTCFullYear(年)     | 设置UTC日期的年份,传入的年份值必须是4位数字(2007) |
| getMonth()             | 返回日期中的月份,其中0表示一月,11表示十二月 |
| getUTCMonth()          | 获取UTC日期的月份,其中0表示一月,11表示十二月 |
| setMonth(月)           | 设置日期的月份.传入的月份必须大于0,超过11则增加年份 |
| setUTCMonth(月)        | 设置UTC日期的月份.传入的月份必须大于0,超过11则增加年份 |
| getDate()              | 返回日期月份中的天数(1到31)          |
| getUTCDate()           | 返回UTC日期月份中的天数(1到31)       |
| setDate()              | 设置日期月份中的天数.如果传入的值超过了该月中应有的天数,增加月份 |
| setUTCDate()           | 设置UTC日期月份中的天数.如果传入的值超过了该月中应有的天数,增加月份 |
| getDay()               | 返回日期中星期的星期几(0表示星期日,6表示星期六) |
| getUTCDay()            | 返回UTC日期中星期的星期几(0表示星期日,6表示星期六) |
| getHours()             | 返回日期中的小时数(0到23)            |
| getUTCHours()          | 返回UTC日期中的小时数(0到23)         |
| setHours(时)           | 设置日期中的小时数.传入的值超过23则增加月份中的天数 |
| setUTCHours(时)        | 设置UTC日期中的小时数.传入的值超过23则增加月份中的天数 |
| getMinutes()           | 返回日期中的分钟数(0到59)            |
| getUTCMinutes()        | 返回UTC日期中的分钟数(0到59)         |
| setMinutes(分)         | 设置日期中的分钟数.传入的值超过59则增加小时数 |
| setUTCMinutes(分)      | 设置UTC日期中的分钟数.传入的值超过59则增加小时数 |
| getSeconds()           | 获取日期中的秒数(0到59)              |
| getUTCSeconds()        | 获取UTC日期中的秒数(0到59)           |
| setSeconds(秒)         | 设置日期中的描述.超过了59会增加分钟数 |
| setUTCSeconds(秒)      | 设置UTC日期中的描述.超过了59会增加分钟数 |
| getMilliseconds()      | 返回日期中的毫秒数                   |
| getUTCMilliseconds()   | 返回UTC日期中的毫秒数                |
| setMilliseconds(毫秒)  | 设置日期中的毫秒数                   |
| setUTCMilliseconds(毫秒) | 设置UTC日期中的毫秒数                |
| getTimezoneOffset()    | 返回本地时间与UTC时间相差的分钟数.   |

## RegExp类型<a id="sec-1-4"></a>

ECMAScript通过 `RegExp` 类型来支持正则表达式. 创建的语法如下

```javascript
var expression = /pattern/flags;
```

其中模式(pattern)部分可以是任何简单或复杂的正则表达式, 可以包含字符类, 限定符, 分组, 向前查找以及反向引用.

每个正则表达式都可带有一或多个标志(flags), 标明正则表达式的行为.

-   `g` : 表示全局(global)模式, 即模式将被应用于所有字符串, 而非发现第一个匹配项时立即停止.
-   `i` : 表示不区分大小写(case-insensitive)模式, 即在确定匹配项时忽略模式于字符串的大小写.
-   `m` : 表示多行(multiline)模式, 即在到达一行文本末尾时还会继续查找下一行中是否存在模式匹配的项.

`RegExp` 构造函数它接收两个参数, 一个是要匹配的字符串模式, 另一个是可选标志字符串.

### RegExp实例属性<a id="sec-1-4-1"></a>

`RegExp` 的每个实例都具有下列属性

-   `global` 布尔值, 是否设置了g标志.
-   `ignoreCase` 布尔值, 是否设置了i标志.
-   `multiline` 布尔值, 表示是否设置了m标志.
-   `lastIndex` 整数, 表示开始搜索下一个匹配的字符位置, 从0算起.
-   `source` 正则表达式的字符串表示, 按照字面量形式而非传入构造函数中的字符串模式返回.

```javascript
var pattern1 = /\[bc\]at/i;

console.log(pattern1.global);
console.log(pattern1.ignoreCase);
console.log(pattern1.multiline);
console.log(pattern1.lastIndex);
console.log(pattern1.source);

var pattern2 = new RegExp("\\[bc\\]at", "i");
console.log(pattern2.global);
console.log(pattern2.ignoreCase);
console.log(pattern2.multiline);
console.log(pattern2.lastIndex);
console.log(pattern2.source);

```

### RegExp实例方法<a id="sec-1-4-2"></a>

`exec()` 方法接收一个参数, 即要应用模式的字符串, 然后返回包含第一个匹配信息的数组. 没有的情况下返回 `null` .

返回的数组是 `Array` 实例, 但包含两个额外的属性

-   `index` 表示匹配在字符串中的位置
-   `input` 表示应用正则表达式的字符串

在返回的数组中, 第一项是整个模式匹配的字符串, 其他项是与模式中的捕获组匹配的字符串.

```javascript
var text = "mom and dad and baby fuck";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
console.log(matches.index);
console.log(matches.input);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);


/**
0
mom and dad and baby fuck
mom and dad and baby
and dad and baby
and baby
*/
```

对于 `exec()` 方法而言, 即使在模式中设置了全局标志(g), 它每次也只会返回一个匹配项. 在不设置全局标志的情况下, 在同一个字符串上多次调用 `exec()` 将始终返回第一个匹配项的信息.

```javascript
var text = "cat, bat, sat, fat";
var pattern1 = /.at/;

var matches = pattern1.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern1.lastIndex);

matches = pattern1.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern1.lastIndex);

console.log();

var pattern2 = /.at/g;
var matches = pattern2.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern2.lastIndex);

matches = pattern2.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern2.lastIndex);


/**
   0
   cat
   0
   0
   cat
   0

   0
   cat
   3
   5
   bat
   8
  */
```

`test()` 方法接收一个字符串参数, 在模式与该参数匹配的情况下返回 `true` , 否则返回 `false` .

`RegExp` 实例继承的 `toLocaleString()` 和 `toString()` 方法都会返回正则表达式的字面量, 与创建正则表达式的方式无关.

### RegExp构造函数属性<a id="sec-1-4-3"></a>

`RegExp` 构造函数包含了一些属性, 这些属性适用于作用域中的所有正则表达式, 并且基于所执行的最近一次正则表达式操作而变化.

`RegExp` 构造函数的属性可以使用短属性名和长属性名访问.

| 长属性名     | 短属性名 | 说明                     |
|------------ |---- |------------------------ |
| input        | $\_  | 最近一次要匹配的字符串.  |
| lastMatch    | $&   | 最近一次的匹配项.        |
| lastParen    | $+   | 最近一次匹配的捕获组.    |
| leftContext  | $\`  | input字符串中lastMatch之前的文本. |
| multline     | $\*  | 布尔值,表示是否所有表达式都使用多行模式. |
| rightContext | $'   | input字符串中lastMatch之后的文本 |

```javascript
var text = "this has been a short summer";
var pattern = /(.)hort/g;

if (pattern.test(text)) {
    console.log(RegExp.input);
    console.log(RegExp.leftContext);
    console.log(RegExp.rightContext);
    console.log(RegExp.lastMatch);
    console.log(RegExp.lastParen);
    console.log(RegExp.multiline);
    console.log();
    console.log(RegExp.$_);
    console.log(RegExp["$`"]);
    console.log(RegExp["$'"]);
    console.log(RegExp["$&"]);
    console.log(RegExp["$+"]);
    console.log(RegExp["$*"]);
}

/**
   this has been a short summer
   this has been a 
   summer
   short
   s
   undefined

   this has been a short summer
   this has been a 
   summer
   short
   s
   undefined
 */
```

还有9个用于存储捕获组的构造函数属性, 访问这些属性的语法是 `RegExp.$num`

```javascript
var text = "this has been a short summer";
var pattern = /(..)or(.)/g

if (pattern.test(text)) {
    console.log(RegExp.$1);
    console.log(RegExp.$2);
}

/**
   sh
   t
 */
```

## Function类型<a id="sec-1-5"></a>

JavaScript的每个函数都是 `Function` 类型的实例, 而且都与其他引用类型一样具有属性和方法.

由于函数是对象, 因此函数名实际上是一个指向函数对象的指针, 不会与某个函数绑定.

使用 `Function` 构造函数, 接收任意数量的参数, 但是最后一个参数始终被看成是函数体.(不推荐)

```javascript
var sum = new Function("num1", "num2", "return num1 + num2";)
```

一个函数可能会有多个名字.

```javascript
function sum(num1,num2) {
    return num1 + num2;
}
console.log(sum(10, 10));

var anotherSum = sum;
console.log(anotherSum(10, 10));

sum = null;

console.log(anotherSum(10, 10));
```

JavaScript函数没有重载.

### 函数声明与函数表达式<a id="sec-1-5-1"></a>

解析器会率先读取函数声明, 并使其在执行任何代码之前可用(可以访问).

函数表达式必须等到解析器执行到它所在的代码行, 才会真正解释执行.

-   第二个案例, 函数是在一个初始化语句中, 而不是一个函数声明, 所以案例2中的函数未定义.

```javascript
console.log(sum(10,10));

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(10,10))
var sum = function (num1, num2) {
    return num1 + num2;
};
```

### 作为值的函数<a id="sec-1-5-2"></a>

函数作为参数

```javascript
function callSomeFunction(someFunction, someArgument) {
    return someFunction(someArgument);
}

function add10(num) {
    return num + 10;
}

var result1 = callSomeFunction(add10, 10);
console.log(result1);

function getGreeting(name) {
    return "Hello, " + name;
}

var result2 = callSomeFunction(getGreeting, "Nicholas");
console.log(result2)
```

函数作为返回值, 使用 `sort()` 函数对数组的元素的按某些属性进行排序.

```javascript
function createComparisonFunction(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}

var data = [{name : "Zachary", age: 28}, {name: "Nicholas", age : 29}];
data.sort(createComparisonFunction("name"));
console.log(data[0].name);

data.sort(createComparisonFunction("age"));
console.log(data[0].name);
```

### 函数内部属性<a id="sec-1-5-3"></a>

在函数内部, 有两个特殊的对象

-   `arguments` : 一个类数组对象, 包含着传入函数的所有参数.
-   `this` : 该对象引用的是函数据以执行的环境对象.

`arguments` 主要用途是保存函数参数, 但是这个对象还有一个名叫 `callee` 的属性, 该属性是一个指针, 指向拥有这个 `arguments` 对象的函数.

如果函数名被换了, 使用 `arguments.callee` 仍能保证递归正常调用.

```javascript
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}


// 等价写法
function factorial2(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num-1);
    }
}

console.log(factorial(10));
console.log(factorial2(10));
```

`this` 在不同执行环境输出不同, 函数只是一个包含指针的变量, 因此全局的 `sayColor()` 函数和 `o.sayColor()` 指向的仍然是同一个函数.

```javascript
window.color = "red";
var o = {color: "blue"};

function sayColor() {
    alert(this.color);
}

sayColor();

o.sayColor = sayColor;
o.sayColor();
```

函数对象的属性 `caller` , 这个属性保存着调用当前函数(inner)的函数的引用(outer).

```javascript
function outer() {
    inner();
}

function inner() {
    console.log(arguments.callee.caller);
}

outer();

// [Function: outer]
```

### 函数属性和方法<a id="sec-1-5-4"></a>

ECMAScript中函数是对象, 因此函数也有属性和方法, 每个函数都包含两个属性

-   `length` : 表示函数希望接收到的参数的个数.
-   `prototype` : 保存他们所有实例方法的真正所在. 该属性不可枚举, 使用for-in无法发现.

每个函数都包含两个非继承而来的方法, 这两个方法的用途都是在特定的作用域中调用函数

-   `apply()` 方法接收两个参数, 一个是在其中运行函数的作用域, 另一个是参数数组(可以是Array实例, 也可以是arguments对象).
-   `call()` 方法接收两个参数, 第一个参数是 `this` 值, 其余参数都直接传递给函数.

```javascript
function sum(num1, num2) {
    return num1 + num2;
}

function callSum1(num1, num2) {
    return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2]);
}

function callSum3(num1, num2) {
    return sum.call(this, num1, num2);
}

console.log(callSum1(10, 10));
console.log(callSum1(10, 10));
```

`apply()` 和 `call()` 函数可以扩充函数赖以运行的运行作用域. 对象不需要与方法任何耦合关系.

```javascript
window.color = "red";
var o = {color : "blue"};

function sayColor() {
    alert(this.color);
}

// red
sayColor.call(this);
// red
sayColor.call(window);
// blue
sayColor.call(o)
```

ECMAScript5还定义了一个方法 `bind()` . 这个方法会创建一个函数实例, 其 `this` 值会被绑定到传给 `bind()` 函数的值.

```javascript
var color = "red";
var o = {color : "blue"};

function sayColor() {
    console.log(this.color);
}

var objectSayColor = sayColor.bind(o);
objectSayColor();
```

## 基本包装类型<a id="sec-1-6"></a>

ECMAScript提供了3个特殊的引用类型: `Boolean` , `Number` 和 `String`

引用类型与基本包装类型的主要区别就是对象的生存期.

-   使用 `new` 操作符创建的引用类型的实例, 在执行流离开当前作用域之前都一直保存在内存中.
-   自动创建的基本包装类型的独享, 只存在于一行代码的执行瞬间, 然后立即被销毁.

不建议显式创建基本包装类型的对象.

```javascript
var object = new Object("some text");
alert(obj instanceof String);    // true

var value = "25";
var number = Number(value);      // 转型函数
alert(typeof number);            // "number"

var obj = new Number(value);     // 构造函数
alert(typeof obj);               // "object"
```

### Number类型<a id="sec-1-6-1"></a>

`Number` 类重写了 `valueOf()` , `toLocaleString()` 和 `toString()` 方法, 重写后的 `valueOf()` 方法返回对象表示的基本类型的数值.

`toString()` 方法传递一个表示基数的参数, 告诉它返回几进制.

`toFixed()` 方法会按照指定的小数点返回数值的字符串表示.

`toExponential()` 方法返回以指数表示法(e表示法), 接收一个指定小数位数的参数.

`toPrecision()` 方法可能返回固定大小格式, 也可能返回指数形式.

### String类型<a id="sec-1-6-2"></a>

访问字符串特定字符的方法有 `charAt` 和 `charCodeAt` , 两个方法都接收一个参数, 即基于0的字符位置, `charCodeAt` 返回字符编码.

`concat()` 方法可以将一个或多个字符串拼接起来得到新字符串.

`slice()` , `substr()` 和 `substring()` 三个方法都会返回操作字符串的一个子字符串, 而且都接收一个或两个参数.

-   第一个参数指定子字符串的开始位置
-   第二个参数(在指定情况下)表示子字符串到哪里结束, 没有指定则将字符串长度作为结束位置.
-   `slice()` 和 `substring()` 的第二个参数指定的是子字符串最后一个字符后面的位置.
-   `substr()` 的第二个参数指定的是返回的字符个数.
-   以上方法返回一个基本类型的字符串值, 对原始字符串没有任何影响.

`indexOf()` 和 `lastIndexOf()` 两个方法都是从一个字符串中搜索给定的子字符串, 然后返回子字符串的位置, 没有找到子字符串, 返回-1.

-   `indexOf()` 方法从字符串的开头向后搜索子字符串.
-   `lastIndexOf()` 方法是从字符串的末尾向前搜索子字符串.

`trim()` 方法会创建一个字符串的副本, 删除前置及后缀的所有空格, 然后返回结果.

`toLowerCase()` , `toLocaleLowerCase()` , `toUpperCase()` 和 `toLocaleUpperCase()` 方法可以将字符串转换为大写或小写.

`match()` 与 `RegExp` 的 `exec()` 方法相同, `match()` 方法只接受一个参数, 要么是一个正则表达式, 要么是一个 `RegExp` 对象.

```javascript
var text = "cat, bat, sat, fat";
var pattern = /.at/;

var matches = text.match(pattern);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);
```

`search()` 方法与 `match()` 方法的参数相同, 返回字符串中第一个匹配项的索引, 没有找到匹配项, 返回-1. `search()` 方法始终是字符串开头向后查找模式.

`replace()` 方法接收两个参数, 第一个参数可以是一个 `RegExp` 对象或者一个字符串(这个字符串不会被转换为正则表达式), 第二个参数可以是一个字符串或者函数.

-   如果第一个参数是字符串, 那么值会替换目标第一个子字符串.
-   如果想要替换所有子字符串, 唯一办法就是提供正则表达式, 并且指定全局(g)标志.

```javascript
var  text = "cat, bat, sat, fat";
var result = text.replace("at", "ond");
console.log(result);

result = text.replace(/at/g, "ond");
console.log(result);
```

`replace()` 第二个参数是字符串, 那么还可以使用一些特殊的字符序列, 将正则表达式操作得到的值插入到结果字符串中.

| 字符序列 | 替换文本                                           |
|---- |-------------------------------------------------- |
| $$   | $                                                  |
| $&   | 匹配整个模式的子字符串.与RegExp.lastMatch的值相同  |
| $'   | 匹配的子字符串之前的子字符串.与RegExp.leftContext的值相同 |
| $\`  | 匹配的子字符串之后的子字符串.与RegExp.rightContext的值相同 |
| $n   | 匹配第n个捕获组的字符串,其中n等于0~9.如果正则表达式中没有定义捕获组,则使用空字符串 |
| $nn  | 匹配第nn个捕获组的子字符串,其中nn等于01~99.如果正则表达式中没有定义捕获组,则使用空字符串 |

```javascript
var text = "cat, bat, sat, fat";
result = text.replace(/(.at)/g, "word ($1)");
console.log(result);

//word (cat), word (bat), word (sat), word (fat)
```

`replace()` 方法第二个参数可以是一个函数, 在只有一个匹配项的情况下, 会向这个函数传递三个参数

-   模式的匹配项
-   模式匹配项在字符串中的位置
-   原始字符串

```javascript
function htmlEscape(text) {
    return text.replace(/[<>"&]/g, function (match, pos, originalText) {
        switch (match) {
        case "<":
            return "&lt;";
            break;
        case ">":
            return "&gt;";
        case "&":
            return "&amp;";
        case "\"":
            return "&quot;";
        default:
            break;
        }
    });
}
alert(htmlEscape("<p class=\"greeting\">Hello World!</p>"));
// &lt;p class=&quot;greeting&quot;&gt;Hello World!&lt;/p&gt;
```

`replace()` 方法第二个参数可以是一个函数, 在正则表达式中定义了多个捕获组的情况下, 传递给函数的参数如下

-   第一个捕获组的匹配项
-   第二个捕获组的匹配项
-   最后两个参数分别是模式的匹配项在字符串的位置和原始字符串.

`split()` 基于指定的分隔符将一个字符串分割成多个子字符串, 并将结果放在一个数组中.

-   分隔符可以是一个字符串, 也可以是一个 `RegExp` 对象.
-   第二个可选的参数, 用于指定数组的大小, 以便确保返回的数组不会超过既定大小.

`localeCompare()` 方法比较两个字符串, 并返回下列值中的一个

-   如果字符串在字母表中应该排在字符串参数之前, 则返回一个负数(大多数情况下返回-1, 具体的值要视实现而定)
-   如果字符串等于字符串参数, 则返回0.
-   如果字符串在字母表中应该排在字符串参数之后, 则返回一个正数(大多数情况下返回1, 具体的值要视实现而定)

`fromCharCode()` 方法是静态方法, 这个方法的任务是接收一或多个字符编码, 然后将它们转换成一个字符串.

## 单体内置对象<a id="sec-1-7"></a>

### Global对象<a id="sec-1-7-1"></a>

`Global` 对象不属于任何其他对象的属性和方法.

所有全局作用域中定义的属性和函数, 都是 `Global` 对象的属性.

`Global` 对象的 `encodeURI()` 和 `encodeURIComponent` 方法可以对URI进行编码, 以便发送给浏览器.

```javascript
var uri = "http://www.wrox.com/illegal value.html#start";

console.log(encodeURI(uri));

console.log(encodeURIComponent(uri));

/**
   http://www.wrox.com/illegal%20value.html#start
   http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.html%23start
  */
```

`decodeURI()` 和 `decodeURIComponent()` 方法可以对使用 `encodeURI()` 和 `encodeURIComponent()` 替换的字符进行解码.

`eval()` 方法只接收一个参数, 要执行的 `ECMAScript` 字符串, 并解析参数的代码.

-   被执行的代码具有该执行环境相同的作用域链.

### Math对象<a id="sec-1-7-2"></a>

Math对象的常用属性

| 属性                   | 说明              |
|---------------------- |----------------- |
| Math.E                 | 自然对数的底数,即常量e的值 |
| Math.LN10              | 10的自然对数      |
| Math.LN2               | 2的自然对数       |
| Math.LOG2E             | 以2为底e的对数    |
| Math.LOG10E            | 以10为底e的对数   |
| Math.PI                | Π的值            |
| Math.SQRT1<sub>2</sub> | 1/2的平方根(2的平方根的倒数) |
| Math.SQRT2             | 2的平方根         |

`Math.ceil()` 执行向上舍入, 即它总是将数值向上舍入为最接近的整数.

`Math.floor()` 执行向下舍入, 即它总是将数值向下舍入为最接近的整数.

`Math.round()` 执行标准舍入, 即它总是将数值四舍五入为最接近的整数.

`Math.random()` 方法返回介于0和1之间一个随机数, 不包括0和1.
