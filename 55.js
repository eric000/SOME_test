/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxPosition = 0
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (i > maxPosition) break
        maxPosition = Math.max(maxPosition, i + nums[i])
        if (maxPosition >= len - 1) {
            return true
        }
    }
    return false
};