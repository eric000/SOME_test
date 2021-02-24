// map
Array.prototype.myMap = function(fn, context) {
    const arr = Array.prototype.slice.call(this)
    const tmp = []
    for(let i = 0; i< arr.length; i++) {
        if (arr[i] !== undefined) {
            tmp.push(fn.call(context, arr[i], i, this))
        }
    }
    return tmp
}

// reduce

Array.prototype.myReduce = function(fn, initialValue) {
    const arr = Array.prototype.slice.call(this)
    let res, startIndex
    const hasInitialValue = initialValue !== undefined
    res = hasInitialValue ? initialValue : arr[0]
    startIndex = hasInitialValue ? 1 : 0

    for(let i = 0; i< arr.length; i++) {
        res = fn.call(this, res, arr[i], i, this)
    }
    return res
}

// all/apply
Function.prototype.myCall = function(context = window, ...arg) {
    let func = this
    const fn = Symbol()
    context[fn] = func

    let res = context[fn](...arg)
    delete context[fn]

    return res
}

// object.create
function create(proto) {
    function f() {}

    f.prototype = proto
    f.prototype.constructor = f

    return new f()
}

// bind

Function.prototype.bind = function (context, ...args) {
    const self = this

    const fBound = function (...args2) {
        const _this = this instanceof fBound ? this : (context || window)
        const _params = [...args, ...args2]
        return context.apply(_this, _params)
    }
    fBound.prototype = Object.create(this.prototype)
    return fBound
}

// new

function myNew (fn, ...args) {
    let obj = Object.create(fn.prototype)

    let res = fn.apply(obj, args)

    return typeof res === 'object' ? res : obj
}

// instanceof

function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left)

    while(true) {
        if (proto === null) return false
        if (proto == right.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

// 单例
function getInstance(func) {
    let instance
    let handler = {
        constructor(target, args) {
            if (!instance) {
                instance = Reflect.construct(func, args)
            }
            return instance
        }
    }
    return new Proxy(handler)
}
