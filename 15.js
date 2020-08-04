/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums && nums.length < 3) return []
    let sortNums = nums.sort((a, b) => a - b)
    let rtnNum = []
    for (let i = 0; i < sortNums.length; i++) {
        if (i == 0 || sortNums[i] != sortNums[i - 1]) {
            let targetVal = sortNums[i]
            let left = i + 1, right = sortNums.length - 1
            while (left < right) {
                if (targetVal + sortNums[left] + sortNums[right] == 0) {
                    rtnNum.push([sortNums[i], sortNums[left], sortNums[right]])
                    while (left < right && sortNums[left] == sortNums[left + 1]) {
                        left++
                    }
                    while (left < right && sortNums[right] == sortNums[right - 1]) {
                        right--
                    }
                    left++
                    right--
                } else if (targetVal + sortNums[left] + sortNums[right] < 0) {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    return rtnNum
};