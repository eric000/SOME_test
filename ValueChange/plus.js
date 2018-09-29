function _plus (a, b) {
  while(a !== 0 && b !== 0) {
    let _a = a ^ b
    let _b = (a & b) << 1
    a = _a
    b = _b
  }
  return a === 0 ? b : a
}
console.log(_plus(11,10))

function _subtract (a, b) {
  b = ~b
  return _plus(_plus(a,b),1)
}
console.log(_subtract(11,40))