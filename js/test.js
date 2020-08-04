// https://mp.weixin.qq.com/s/bCZ5Y1O2rRE44fbOAUqilg
// call
Function.prototype.myCall = function(context, ...arg) {
    context = context === null ?  window : new Object(context)
    const key = Symbol()
    context[key] = this
    const result = context[key](...arg)
    delete context[key]
    return result
}

// apply
Function.prototype.myApply = function(context, arg) {
    context = context === null ?  window : new Object(context)
    arg = Array.isArray(arg) ? arg : []
    const key = Symbol()
    context[key] = this
    const result = context[key](...arg)
    delete context[key]
    return result
}

// bind
Function.prototype.myBind = function(context, arg) {
    const fn = this
    const result = function(...newArg) {
        fn.call(context instanceof result ? this : context, ...arg, ...newArg)
    }
    result.prototype = Object.create(fn.prototype)
    return result
}

// new
function myNew(con, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, con.prototype)
    let result = con.apply(obj, args)
    return result instanceof Object ? result : obj
}

// instanceOf
function myInstanceOf(lefe, right) {
    let leftVal = lefe.__proto__
    let rightVal = right.prototype
    while(true) {
        if(leftVal == null) return false
        if (leftVal == rightVal) return true
        leftVal = leftVal.__proto__
    }
}


// 深拷贝
function deepClone(target, cache = new  WeakMap) {
    if (target == null || typeof target != 'object') return target
    if (cache.get(target)) return target

    const copy = Array.isArray(target) ? [] : {}
    cache.set(target, copy)
    Object.keys(target).forEach(item => copy[key] = deepClone(target[item],cache))
    return copy
}

// debounce
function debounce(fn, wait, immediate = false) {
    let result, timerId
    return function(...args) {
        timerId && clearTimeout(timerId)
        if (immediate) {
            if (!timerId) result = fn.apply(this, args)
            timerId = setTimeout(() => {
                timerId = null
            }, wait);
        } else {
            timerId = setTimeout(() => {
                result = fn.apply(this, args)
            }, wait);
        }
        return result
    }
}

// throttle 计时器

function throttle1 (fn, wait) {
    let timerId
    return function (...args) {
        if (!timerId) {
            timerId = setTimeout(() => {
                fn.apply(this, args)
                timerId = null
            }, wait); 
        }
    }
}

// throttle 时间戳

function throttle2 (fn, wait) {
    let preDate = 0
    return function (...args) {
        if (Date.now() - preDate > wait) {
            fn.apply(this, args)
        }
    }
}

//curry

function curry (fn) {
    return function _curry(...args) {
        return args.length >= fn.length ?
            fn(...args) :
            (...newArgs) => _curry(...args, ...newArgs)
    }
}

// 发布订阅
class EventEmititer {
    // #subs= {}
    event(event, ...args) {
        if(this.#subs[event] && this.#subs[event].length) {
            this.#subs[event].forEach(cb => cb(...args))
        }
    }
    on(event, cb) {
        (this.#subs[event] || (this.#subs[event] = [])).push(cb)
    }
    off(event, offCb) {
        if (offCb) {
            if(this.#subs[event] && this.#subs[event].length){
                this.#subs[event] = this.#subs[event].filter(item => item!== cb)
            }
        } else{
            this.#subs[event] = []
        }
    }
}

// es5 继承

function parent(p){
    this.name = p
}
parent.prototype.getName = function() {
    return this.name
}

function child(sex) {
    this.sex = sex
    parent.call(this)
}

child.prototype = Object.create(parent.prototype)
child.prototype.constructor = parent

