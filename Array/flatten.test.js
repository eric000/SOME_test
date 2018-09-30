import test from 'ava'
import flatten from './flatten.js'

test(t => {
  // t.throws(() => { flatten(1) }, 'Expected Array, got number')
  t.deepEqual(flatten(['a', 'b', ['c'], 'd', ['e']]), ['a', 'b', 'c', 'd', 'e'])
  t.deepEqual(flatten(['a', [[[[[[[['b', [['c']]]]]], 'd', ['e']]]]]]), ['a', 'b', 'c', 'd', 'e'])
})
