/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (divisor === 1) return dividend
  if (dividend === 0) return 0
  let MAXNUMBER = 2 ** 31 - 1
  if (dividend === -1) {
    if (dividend > -MAXNUMBER) return -dividend
    return -MAXNUMBER
  }


  let sign = false
  if ((dividend >> 31 ^ divisor >> 31) === 0) sign = true

  let a = Math.abs(dividend)
  let b = Math.abs(divisor)

  let res = div(a, b)

  if (sign) return res > MAXNUMBER ? MAXNUMBER : res
  return -res
};

function div(a, b) {
  if (a < b) return 0
  let count = 1
  let tmpB = b
  while (a >= (tmpB + tmpB)) {
    count += count
    tmpB += tmpB
  }
  return count + div(a - tmpB, b)
}