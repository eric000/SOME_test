/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals.length) return []
    let ans = []
    let tmp = null
    intervals = intervals.sort((a,b) => a[0]- b[0])
    for(let i =0; i< intervals.length; i++){
        if (!tmp) {
            tmp = intervals[i]
        }else {
            if (tmp[1] >= intervals[i][0]) {
                tmp[1] = Math.max(intervals[i][1], tmp[1])
            } else {
                ans.push(tmp)
                tmp = intervals[i]
            }
        }
    }
    if (tmp) ans.push(tmp)

    return ans
};