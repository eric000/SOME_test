/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return []
    let rtnArr = []
    const sortNums = nums.sort((a, b) => a - b)
    for (let i = 0; i < sortNums.length; i++) {
        if (i == 0 || sortNums[i] != sortNums[i - 1]) {
            for (let mid = i + 1; mid < sortNums.length - 2; mid++) {
                if (mid > i + 1 && nums[mid] == nums[mid - 1]) continue
                let left = mid + 1
                let right = sortNums.length - 1
                while (left < right) {
                    let val = sortNums[i] + sortNums[mid] + sortNums[left] + sortNums[right]
                    if (val == target) {
                        rtnArr.push([sortNums[i], sortNums[mid], sortNums[left], sortNums[right]])
                        while (left < right && sortNums[left] == sortNums[left + 1]) {
                            left++
                        }
                        while (left < right && sortNums[right] == sortNums[right - 1]) {
                            right--
                        }
                        left++
                        right--
                    } else if (val < target) {
                        left++
                    } else {
                        right--
                    }
                }
            }
        }
    }
    return rtnArr
};