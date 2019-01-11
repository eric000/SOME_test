# 函数式编程小记(学习函数式是为了写出更简洁可读性好的代码啊~)

+ [资源](https://github.com/ikcamp/Functional-Light-JS/blob/zh-cn/ch1.md#%E8%B5%84%E6%BA%90)

+ ES5（特别是严格模式下）的 arguments 不被一些人认同，很多人尽可能地避免使用。ES6下推荐用`...`运算符

## 名词

+ `高阶函数`,一个函数如果可以接受或返回一个甚至多个函数
+ `纯函数`,没有副作用的函数也有一个特殊的名称（副作用是引起程序意外状态改变的原因，同时也可能会带来意想不到的惊喜）
+ `取反辅助函数`,在函数式编程库中又被称作 complement(..)
+ `偏应用`是用来减少函数的参数数量 —— 一个函数期望接收的实参数量 —— 的技术，它减少参数数量的方式是创建一个预设了部分实参的新函数。
+ `柯里化`是偏应用的一种特殊形式，其参数数量降低为 1
  + 很直接的解决类似问题 `["1","2","3"].map( parseInt )`
    ```js
      ["1","2","3"].map( parseInt ) // [1, NaN, NaN]
      function constant(v) {
        return function value(a){
          return v(a);
        };
      }
      ["1","2","3"].map( constant(parseInt) ) //[1, 2, 3]
    ```
+ `隐性编程（tacit programming）`，一般则称作 “无形参（point-free）
    ```js
      // 函数式编程库中又被称作 complement(..)

      // 替代if
      function when (judgment,fn) {
        return function(...args) {
          if (judgment(...args)) {
            return fn(...args)
          }
        }
      }

      // 替代逆判断
      function not (judgment) {
        return function (...args) {
          return !judgment(...args)
        }
      }

      function out(msg) {
        console.log(msg)
      }
      function judgmentTest(value) {
        return Number.isNaN(value)
      }
      let b = when(not(judgmentTest), out)
      b(1) // 1
      b(NaN) // undefined
    ```
+ 闭包是穷人的对象，对象是穷人的闭包
+ 列表操作（for;reduce;链式调用/函数嵌套），递归(尾递归优化[其实编译器最后优化成怎样 有点难说])，异步

```javaScript

  // partial 偏函数
  function partial (fn, ...preArgs) {
    return (...nextArgs) => fn (...preArgs, ...nextArgs)
  }

  ```

  ```js
  // 柯里化函数1
  function curry (fn, args = fn.length) {
    return (function nextCurry (preArgs) {
      return function curried (nextArgs) {//松散的柯里化curried的参数改为 ...nextArgs 
        var tmpArgs = preArgs.concat([nextArgs])
        return tmpArgs.length >= args ? fn(...tmpArgs) : nextCurry(tmpArgs)
      }
    })([])
  }


  // 反柯里化
  function uncurry(fn) {
    return (...args) => {
      let ret = fn
      for(let i = 0; i < args.length; i++) {
        ret = ret(args[i])
      }
      return ret
    }
  }

  // 测试函数
  function add (...args) {
    let sum = 0
    for(let i = 0; i < args.length; i++) {
      sum += args[i]
    }
    return sum
  }

  add(1,2,3,4,5) //15

  var curriedSum = curry( add, 5 );
  var uncurriedSum = uncurry( curriedSum );

  curriedSum( 1 )( 2 )( 3 )( 4 )( 5 ); // 15

  uncurriedSum( 1, 2, 3, 4, 5 ); // 15
  uncurriedSum( 1, 2, 3 )( 4 )( 5 );

  // 组合函数
  function pipe(..fns) {
    return functon (result) {
      let list = funs.slice()
      while(list.length) {
        result = list.shift()(result)
      }
      return result
    }
  }
  // 形同 管道操作符
  // foo(bar(baz('hello world')))
  // 'hello world' |> baz |> bar |>foo

```