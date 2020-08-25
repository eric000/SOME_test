/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let left = 0,
    right = 0,
    maxLength = 0,
    slen = s.length

  for (let i = 0; i < slen; i++) {
    if (s[i] === '(') {
      left++
    } else {
      right++
    }

    if (left === right) {
      maxLength = Math.max(maxLength, left * 2)
    }
    if (right > left) {
      left = right = 0
    }
  }

  right = left = 0
  for (let i = slen - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left++
    } else {
      right++
    }

    if (left === right) {
      maxLength = Math.max(maxLength, left * 2)
    }
    if (right < left) {
      left = right = 0
    }
  }
  return maxLength
};