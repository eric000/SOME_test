/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  let tmpArr = []
  let len = candidates.length
  candidates = candidates.sort((a, b) => a - b)
  const backtrack = (tmpPath, target, start) => {

    if (target === 0) {
      res.push(tmpPath)
      return
    }

    for (let i = start; i < len; i++) {
      if (target < candidates[i]) break
      tmpPath.push(candidates[i])
      backtrack(tmpPath.slice(), target - candidates[i], i)
      tmpPath.pop()
    }
  }

  backtrack(tmpArr, target, 0)

  return res
};