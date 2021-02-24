/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    if (!unms || !nums.length) return false;

    let start = 0
    let end = nums.length - 1
    let mid
    while (start <= end) {
        mid = start + ((end - start) >> 1)

        if (nums[mid] === target) return true

        if (nums[mid] === nums[start]) {
            start++
            continue
        }

        if (nums[mid] === nums[end]) {
            end--
            continue
        }

        if (nums[mid] > nums[start]) {
            if (nums[mid] > target && nums[start] <= target) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return false
};