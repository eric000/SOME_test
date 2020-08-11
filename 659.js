/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  let tail = Array(nums[nums.length - 1]).fill(0)
  let hashMap = nums.reduce((item, cur) => {
    item[cur] = item[cur] ? item[cur] + 1 : 1
    return item
  }, {})

  for (num of nums) {
    if (hashMap[num] == 0) {
      continue
    } else if (hashMap[num] > 0 && tail[num - 1] > 0) {
      tail[num]++
      hashMap[num]--
      tail[num - 1]--
    } else if (hashMap[num] > 0 && hashMap[num + 1] > 0 && hashMap[num + 2] > 0) {
      tail[num + 2]++
      hashMap[num]--
      hashMap[num + 1]--
      hashMap[num + 2]--
    } else {
      return false
    }
  }
  return true
};