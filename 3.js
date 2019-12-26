var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length
  let left = 0, right = 0, max = 1
  for(let i = 1; i< s.length;i++) {
    let _indexOf = diff(s, left, right, i)
    if (_indexOf != -1) {
      let tmp = right - left + 1
      max = tmp> max ? tmp : max
      left = _indexOf + 1
      right = i
    } else {
      right += 1
    }
  }
  let tmp = right - left + 1
  max = tmp> max ? tmp : max
  return max

}
function diff(str, left, right, i) {
  for(; left <= right; left++) {
    if (str[left] ==str[i]) return left
  }
  return -1
}