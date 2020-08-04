/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums && nums.length < 3) return []
    let sortNums = nums.sort((a, b) => a - b)
    let rtnNum = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < sortNums.length; i++) {
        if (i == 0 || sortNums[i] != sortNums[i - 1]) {
            let left = i + 1, right = sortNums.length - 1
            while (left < right) {
                let tmpVal = sortNums[i] + sortNums[left] + sortNums[right]
                if (Math.abs(target - tmpVal) < Math.abs(target - rtnNum)) {
                    rtnNum = tmpVal
                } else if (tmpVal < target) {
                    left++
                } else if (tmpVal > target){
                    right--
                } else {
                    return rtnNum
                }
            }
        }
    }
    return rtnNum
};