/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

  let len = nums.length -1
  let i = len-1
  while(i>=0 &&  nums[i+1] <= nums[i]) {
    i--
  }

  if (i >= 0) {
    let j = len
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    swap(nums, i, j)
  }
  reverse(nums, i + 1)
};

function reverse(arr, start) {
  let len = arr.length -1
  let index = start
  while (index < len) {
    swap(arr, index, len)
    index++
    len--
  }
}

function swap(arr, i , j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}