import test from 'ava'
import isSotred from './is-sorted.js'

// test('foo', t => {
//   t.pass()
// })

// test('bar', async t => {
//   const bar = Promise.resolve('bar')
//   t.is(await bar, 'bar')
// })
let comparators = {
  descending: function (a, b) { return b - a }
}

test(t => {
  t.throws(() => { isSotred(1) }, 'Expected Array, got number')
  t.throws(() => { isSotred('asdf') })
  t.is(isSotred([]), true)
  t.is(isSotred([1, 2, 3]), true)
  t.is(isSotred([-1, 0, 0, 3, 3]), true)
  t.is(isSotred([3, 1]), false)
  t.is(isSotred([3, 1], comparators.descending), true)
})
