# javascript 类型检查

## [JavaScript 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

## 判断数据类型常见方法

- [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)
  只能鉴别 6 种原始类型（ Null 会被识别为 Object ）及 function 和 object
- [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
  用于测试构造函数的 prototype 属性是否出现在对象的原型链中的 `任何位置` (字符串、{}等虽然原型未定义，但 instanceof Object 返回 true。)
- [constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
  返回创建实例对象的 Object 构造函数的引用（手动设置或更新构造函数可能会导致不同且有时令人困惑的后果。为了防止它，只需在每个特定情况下定义构造函数的角色。在大多数情况下，不使用构造函数，并且不需要重新分配构造函数。）
- [toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
  toString() 返回 "[object type]"，其中type是对象的类型。（为了每个对象都能通过 Object.prototype.toString() 来检测，需要以 Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用，传递要检查的对象作为第一个参数，称为thisArg。）

---

PS.1 拓展 Object.prototype.toString(https://es5.github.io/#x15.2.4.2)

When the toString method is called, the following steps are taken:

1. If the this value is undefined, return "[object Undefined]".

2. If the this value is null, return "[object Null]".

3. Let O be the result of calling ToObject passing the this value as the argument.

4. Let class be the value of the [[Class]] internal property of O.

5. Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".

## 判断数据类型实例

- [阮一峰 电子书的 toString() 的应用：判断数据类型](https://javascript.ruanyifeng.com/stdlib/object.html#toc9)

  ```js

  var type = function (o){
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
  };

  type({}); // "object"
  type([]); // "array"
  type(5); // "number"
  type(null); // "null"
  type(); // "undefined"
  type(/abcd/); // "regex"
  type(new Date()); // "date"

  // 添加类型判断方法
  ['Null',
  'Undefined',
  'Object',
  'Array',
  'String',
  'Number',
  'Boolean',
  'Function',
  'RegExp'
  ].forEach(function (t) {
    type['is' + t] = function (o) {
      return type(o) === t.toLowerCase();
    };
  });

  type.isObject({}) // true
  type.isNumber(NaN) // true
  type.isRegExp(/abc/) // true

  ```

- JavaScript权威指南(p139~140) 方法

  > 很多对象继承的toString()方法重写了，为了能调用正确的toString()版本，必须间接地调用Function.call()方法（参照8.7.3节）
  > 这个函数包含了对null和undefined的特殊处理（在ECMAScript 5中不需要对这些特殊情况做处理）

  ```js

  function classof(o) {
      if (o === null) return "Null";
      if (o === undefined) return "Undefined";
      return Object.prototype.toString.call(o).slice(8,-1);
  }

  classof(null)//=＞"Null"
  classof(1)//=＞"Number"
  classof("")//=＞"String"
  classof(false)//=＞"Boolean"
  classof({})//=＞"Object"
  classof([])//=＞"Array"
  classof(/./)//=＞"Regexp"
  classof(new Date())//=＞"Date"
  classof(window)//=＞"Window"(这是客户端宿主对象)
  function f(){};//定义一个自定义构造函数
  classof(new f());//=＞"Object"

  ```

- [JQ源码实现](https://github.com/jquery/jquery/blob/2.2-stable/src/core.js)

  ```js

  // class2type 在var文件下定义的 {}

  // 来源 https://github.com/jquery/jquery/blob/2.2-stable/src/core.js#L471
  // Populate the class2type map
  jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
  function( i, name ) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase();
  } );

  //toString 来源 https://github.com/jquery/jquery/blob/2.2-stable/src/var/toString.js
  function toString( class2type ) {
    return class2type.toString;
  }

  // 来源 https://github.com/jquery/jquery/blob/2.2-stable/src/core.js#L258
   function type( obj ) {
    if ( obj == null ) {
      return obj + "";
    }

    // Support: Android<4.0, iOS<6 (functionish RegExp)
    return typeof obj === "object" || typeof obj === "function" ?
      class2type[ toString.call( obj ) ] || "object" :
      typeof obj;
  }

  ```
