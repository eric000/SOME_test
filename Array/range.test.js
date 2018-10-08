import test from 'ava'
import range from './range.js'

test(it => {
  it.throws(() => { range([]) }, 'Expected Number, got Array')
  it.deepEqual(range(3), [0,1,2])
  it.deepEqual(range(1,4), [1,2,3])
})