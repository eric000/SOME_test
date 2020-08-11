/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k - 1)
};

function quickSelect(nums, start, end, index) {
  if (start > end) return

  let pos = partition(nums, start, end)

  if (pos == index) {
    return nums[pos]
  } else {
    return pos > index ? quickSelect(nums, start, pos - 1, index) : quickSelect(nums, pos + 1, end, index)
  }
}

function partition(nums, left, right) {
  let pivot = nums[left]
  let j = left
  for (let i = left + 1; i <= right; i++) {
    if (nums[i] > pivot) {
      j++
      swap(nums, i, j)
    }
  }
  swap(nums, left, j)
  return j
}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}