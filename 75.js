/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    if (!nums || !nums.length) return
    let i = 0
    let lt = 0
    let gt = nums.length - 1
    while (i <= gt) {
        if (nums[i] === 0) {
            swap(nums, i++, lt++)
        } else if (nums[i] === 2) {
            swap(nums, i, gt--)
        } else {
            i++
        }
    }
};
var swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}