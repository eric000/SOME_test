import test from 'ava'
import dedupe from './dedupe.js'
let myDate = new Date(2017, 0, 1)
test(it => {
  it.throws(() => { dedupe(1) }, 'Expected Array, got Number')
  it.deepEqual(dedupe([1,2,3,1,2,1,0]), [1,2,3,0])
  it.deepEqual(dedupe([{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}, {a: 3, b: 4}], value => value.a),[{a: 1, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}])
  it.deepEqual(dedupe([{a: 1}, {a: 2}, {a: 3}, {a: 3}]),[{a: 1}, {a: 2}, {a: 3}])
  it.deepEqual(dedupe([myDate, myDate, myDate]),[myDate])
})