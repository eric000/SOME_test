/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {

    let len = nums.length
    let res = []
    let map = []
    nums = nums.sort((a,b) => a-b)
    const dfs = (path) => {

        if (path.length === len) {
            res.push(path.slice())
            return
        }

        for (let i = 0; i < len; i++) {
            if (map[i]) continue
            if (i > 0 && nums[i] === nums[i - 1] && !map[i - 1]) continue

            map[i] = true
            path.push(nums[i])
            dfs(path)
            path.pop()
            map[i] = false
        }
    }

    dfs([])
    return res

};