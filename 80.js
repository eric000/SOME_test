/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1
    let len = 1
    for(let i = 1; i< nums.length; i++) {
        if (nums[i] === nums[i -1]) {
            count ++ 
        } else {
            count = 1
        }

        if (count <= 2) {
            nums[len ++] = nums[i]
        }
    }
    return len
};