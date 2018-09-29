import test from 'ava'
import _slice from './slice.js'
test(t => {
  t.deepEqual(_slice([1, 2, 6], 1, 2), [2])
  t.deepEqual(_slice([1, 2, 6], -2, -1), [2])
})
