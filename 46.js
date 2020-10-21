/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []
    let useMap = {}
    let len = nums.length

    const dfs = (path) => {
        if (path.length === len) {
            res.push(path.slice())
            return
        }

        for(key of nums){
        // for (let i = 0; i < len; i++) {
        //     let key = nums[i]
            if (useMap[key]) continue

            useMap[key] = true
            path.push(key)

            dfs(path)
            path.pop()
            useMap[key] = false
        }
    }

    dfs([])

    return res
};