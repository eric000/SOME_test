/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */var searchInsert = function(nums, target) {
  let len = nums.length
  if (!len) return -1
  if (nums[len - 1] < target) return len

  let left = 0
  let right = len -1 
  
  let res = len
  while(left <= right) {
    let mid = ((right - left) >> 1) + left
    if (target <= nums[mid]) {
      res = mid
      right = mid -1
    } else {
      left = mid + 1
    }
  }
  return res
};