const PENDING  = new Symbol('pending')

let url = "www.a.com"

let obj = {
  a: 1,
  b: 2,
  PENDING,
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

let Obj = new Proxy(obj, {
  get(object, prop) {
    return object[prop] ++
  },
  set(object, prop, value) {
    obj[prop] = value
  }  
})