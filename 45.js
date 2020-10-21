/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let len = nums.length
    let step = 0
    let maxNum = 0
    let end = 0

    for (let i = 0; i < len - 1; i++) {
        maxNum = Math.max(maxNum, i + nums[i])

        if (end == i) {
            end = maxNum
            step++
        }
    }

    return step
};