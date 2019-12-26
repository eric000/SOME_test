/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let tmpArr = nums1.concat(nums2)
  let index = tmpArr.length >> 1
  if (tmpArr.length % 2 == 0) {
    return [quickSelect(tmpArr, index - 1), quickSelect(tmpArr, index)]
  } else {
    return [quickSelect(tmpArr, index)]
  }
};
// @lc code=end

/**
 *
 * @description 快速选择第k大
 * @param {Array} 数组
 * @param {Number} 第几大
 * 
 * @returns {Number} 返回第k大元素
 */
function quickSelect(arr, k) {
  let flag = true
  let point = 0
  let length = arr.length
  let end = length
  let ii = 0
  while (point != length - k + 1) {
    for (let i = point + 1; i < end; i++) {
      if (arr[i] < arr[point]) {
        let tmp = arr[point]
        arr[point] = arr[i]
        arr[i] = arr[++point]
        arr[point] = tmp
      }
    }
    if (point > length - k) {
      end = point
      point = 0
    } else {
      point++
    }
  }
  return arr[point - 1]
}