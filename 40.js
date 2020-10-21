/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let len = candidates.length
    let tmp = []
    let res = []

    candidates = candidates.sort((a, b) => a - b)

    let dfs = (tmpPath, start, target) =>{
        if (target === 0)  {
            res.push(tmpPath)
            return 
        }
        for(let i = start; i < len; i++) {
            
            if (target < candidates[i]) {break}

            if (i > start && candidates[i] == candidates[i - 1]) {continue;}

            tmpPath.push(candidates[i])
            dfs(tmpPath.slice(), i+1, target - candidates[i])
            tmpPath.pop()
            
        }
    }

    dfs(tmp, 0, target)

    return res
};