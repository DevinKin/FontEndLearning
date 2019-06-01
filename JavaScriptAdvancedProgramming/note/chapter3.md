# 第三章-基本概念
 
## 关键字和保留字
 
```javascript
break    do    instanceof    typeof
case    else    new        var
catch     finally    return     void
continue    for        switch    while
debugger    function    this    with
default        if        throw   
delete        in        try
```
 
## 变量
 
- ECMAScript的变量是松散型的，可以用来保存任何类型的数据。
- 定义变量时要使用`var`关键字。
- 变量没有经过初始化会保存一个特殊的值`undefined`。
- 使用`var`操作符定义的变量将称为定义该变量的作用域中的局部变量。
 
## 数据类型
 
- ECMAScript有5种简单数据类型
  - `Undefined`
  - `Null`
  - `Boolean`
  - `Number`
  - `String`
- ECMAScript有1种复杂的数据类型
  - `Object`
 
### typeof操作符
 
- `typeof`操作符用于检测给定变量的数据类型，返回的结果字符串如下
  - `undefined`如果这个值未定义
  - `boolean`如果这个值是布尔值
  - `string`如果这个值是字符串
  - `number`如果这个值是数值
  - `object`如果这个值是对象或null
  - `function`如果这个值是函数
- `typeof`操作符返回`undefined`值时，该变量没有被声明。
 
### Null类型
 
- `null`值表示一个空对象指针。
- 如果定义的变量准备再将来用于保存对象，那么最好将该变量初始化为`null`而不是其他值。
- `undefined`值是派生自`null`值的，因此相等性测试要返回`true`。
 
### Boolean类型
 
- Boolean类型是只有两个字面值
 
  - true
  - false
 
- 要将一个值转换为其对应的Boolean值，可以调用转型函数`Boolean()`，转换规则如下
 
  | 数据类型  |        转换为true的值        | 转换为false的值 |
  | :-------: | :--------------------------: | :-------------: |
  |  Boolean  |             true             |      false      |
  |  String   |       任何非空的字符串       | ""（空字符串）  |
  |  Number   | 任何非零数字值（包括无穷大） |     0和NaN      |
  |  Object   |           任何对象           |      null       |
  | Undefined |             n/a              |    undefined    |
 
### Number类型
 
- 在进行算术计算时，所有八进制和十六进制表示的数值最终都将被转换成十进制数值。
 
#### 浮点数值
 
- 用e表示法表示数值等于e前面的数值乘以10的指数次幂。
 
#### 数值范围
 
- ECMAScript能够表示最小数值保存在`Number.MIN_VALUE`，最大数值保存在`Number.MAX_VALUE`。
- 如果某次计算的结果得到了一个超出JavaScript数值范围的值，那么这个数值将被自动转换成特殊的`Infinity`值。
- 想要确认一个数值是不是有穷的，可以使用`isFinite()`函数。
 
#### NaN
 
- `NaN`即非数值（Not a Number）是一个特殊的数值，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况。
- 任何涉及`NaN`的操作都会返回`NaN`。
- `NaN`与任何值都不相等，包括`NaN`本身。
- `isNaN()`接收一个任意类型的参数，确认该参数是否“不是数值”。
 
数值转换
 
- 有3个函数可以把非数值转换为数值
  - `Number()`：将任何数据类型转换为数值类型。
  - `parseInt()`：将字符串转换成数值。第一个参数为要转换的值，第二个参数为转换使用的基数（即多少进制）。
  - `parseFloat()`：将字符串转换为数值。
- Number ()函数的转换规则如下。
  - 如果是Boolean值，true和false将分别被转换为1和0。
  - 如果是数字值，只是简单的传人和返回。
  - 如果是null值，返回0。
  - 如果是 undefined，返回NaN。
  - 如果是字符串，遵循下列规则：
    - 如果字符串中只包含数字（包括前面带正号或负号的情况），则将其转换为十进制数值，即“1”会变成1, -123"会变成123，而“011”会变成11（注意：前导的零被忽略了）；
    - 如果字符串中包含有效的浮点格式，如“1.1”，则将其转换为对应的浮点数值（同样，也会忽略前导零)；
    - 如果字符串中包含冇效的十六进制格式，例如“0xf”，则将其转换为相同大小的十进制整 数值；
    - 如果字符串是空的（不包含任何宇符），则将其转换为0;
    - 如粜字符串中包含除上述格式之外的字符，则将其转换为NaN。
  - 如果是对象，则调用对象的`valueOf`方法，然后依照前面的规则转换返回的值。如果转换 的结果是`NaN`,则调用对象的`toString()`方法，然后再次依照前面的规则转换返回的字符串值。
 
### String类型
 
- String类型用于表示由零或多个16位`Unicode`字符组成的字符序列，即字符串。
- 字符串可以由双引号（“）或单引号（'）表示。
 
#### 字符串的特点
 
- ECMAScript中的字符串是不可变的，也就是说，字符串一旦创建，他们的值就不能改变。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。
 
#### 转换为字符串
 
- 几乎每个值都有`toString()`方法
- `null`和`undefined`值没有这个方法。
- `toString`方法可以传入一个基数参数，输出为二进制，八进制，十六进制乃至任意有效进制格式表示的字符串。
- 转型函数`String()`，这个函数能够将任何类型的值转换为字符串。
- `String()`函数遵循下列转换规则
  - 如果值有`toString()`方法，则调用该方法（没有参数）并返回相应的结果。
  - 如果值是`null`，则返回"null"。
  - 如果值是`undefined`，则返回"undefined"
 
### Object类型
 
- ECMAScript中的对象其实就是一组数据和功能的集合。
- 对象可以通过执行new操作符后跟要创建的对象类型的名称来创建。
- `Object`类型所具有的任何属性和方法也同样存在于更具体的对象中。
- `Object`的每个实例都具有下列属性和方法
  - `Constructor`：保存着用于创建当前对象的函数。构造函数（constructor）就是`Object()`。
  - `hasOwnProperty(propertyName)`：用于检查给定的属性在爱当前对象实例中（而不是在实例的原型中）是否存在。
  - `isPrototypeOf(object)`：用于检查传入的对象是否是另一个对象的原型。参数必须是字符串形式指定。
  - `propertyIsEnumerable(propertyName)`：用于检查给定的属性是否能够使用`for-in`语句来枚举。参数必须是字符串形式指定。
  - `toLocaleString()`：返回对象的字符串表示，该字符串与执行环境的时区对应。
  - `tostring()`：返回对象的字符串表示。
  - `valueOf()`：返回对象的字符串、数值或布尔值表示。
 
## 操作符
 
- 无符号右移`>>>`
- 全等操作符`===`：比较值和类型。
 
## 语句
 
### for-in语句
 
```javascript
for (var propName in window) {
    document.write(propName);
}
```
 
### label语句
 
- 使用`label`语句可以在代码中添加标签，以便将来使用。
 
- 语法
 
  ```javascript
  label : statement
  ```
 
- 实例
 
  ```javascript
  var num = 0;      
  outermost:
      for (var i = 0; i < 10; i++) {
          if (i == 5 && j == 5) {
              break outermost;
          }
          num++;
          alert(num);
      }
  ```
 
### with语句
 
- `with`语句的作用是将代码的作用域设置到一个特定的对象中。
 
- 语法
 
  ```javascript
  with (expression) statement;
  ```
 
- 使用示例
 
  ```javascript
  with(location) {
      var qs = search.substring(1);
      var hostName = hostName;
      var url = href;
  }
  ```
 
- 由于大量使用with语句会导致性能下降，同时也会给调试代码造成困难，因此避免使用with语句。
 
## 函数
 
- 严格模式对函数有一些限制
  - 不能把函数命名为`eval`或者`arguments`
  - 不能把参数命名为`eval`或者`arguments`
  - 不能出现两个命名参数同名的情况。
 
### 理解参数
 
- 函数体内可以通过`arguments`对象访问参数数组。
 
- `ECMAScript`函数的命名的参数只提供便利，但不是必需的。调用的时候可以与函数签名不一致。
 
  ```javascript
  function sayHi() {
      alert("Hello " + arguments[0] + ", " + arguments[1]);
  }   
  sayHi("king", "oliver")
  ```
 
### 没有重载
 
- `ECMAScript`函数没有签名，因为其参数是由包含零个或多个值的数组来表示的。