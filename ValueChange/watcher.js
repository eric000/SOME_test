// class

class  Watcher {
  constructor (val) {
    this._Val = val
  }
  get Val () {
    console.info(this._Val)
    return this._Val
  }
  set Val(val) {
    this.observer(this._Val,val)
    this._Val = val
  }
  observer(oldVal, newVal) {
    console.info('name属性的值从 '+ oldVal +' 改变为 ' + newVal);
  }
}
let i = new Watcher(2)
i.Val
i.Val = 1
i.Val

//proxy + reflect

let objProxy = new Proxy({}, {
  get(target, key, receiver) {
    console.log('get',key, target[key])
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    console.info('set',key)
    return Reflect.set(target, key, value, receiver)
  }
})
objProxy.count = 1
objProxy.count += 1
objProxy.count


let tmp = {
  a: 1,
  b: 2,
  1: 0
}


//es5
Object.keys(tmp).forEach((item) => {
  _val = tmp[item]
  Object.defineProperty(tmp, item, {
    enumerable: true,
    configurable: true,
    set(val) {
      console.log(_val, val, 'set')
      _val = val
    },
    get() {
      console.log(_val, 'get')
      return _val
    }
  })
})
tmp.a
tmp.a = 'aaa'