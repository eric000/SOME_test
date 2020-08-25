/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let len = nums.length
  if (!len) return -1
  if (len ===  1) return target === nums[0] ? 0 : -1
  let left = 0,
  right = len - 1

  while(left <= right) {
    let mid = (left + right) >> 1
    if (nums[mid] === target) return mid

    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (target> nums[mid] && target <= nums[len - 1]) {
        left = mid + 1 
      } else {
        right = mid - 1
      }
    }
  }

  return -1
};