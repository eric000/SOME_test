/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const result = []
    nums = nums.sort((a, b) => a - b)
    const dfs = (start, tmp) => {
        result.push([...tmp])
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i - 1] === nums[i]) {
                continue
            }

            tmp.push(nums[i])
            dfs(i + 1, tmp)
            tmp.pop()
        }
    }
    dfs(0, [])
    return result
};