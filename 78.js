/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = []

    const dfs = (begin, path) => {
        if (begin <= nums.length) {
            res.push([...path])
        }
        for (let i = begin; i < nums.length; i++) {
            path.push(nums[i])
            dfs(i + 1, path)
            path.pop()
        }

    }
    dfs(0, [])

    return res
};