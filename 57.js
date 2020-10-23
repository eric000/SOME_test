/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (!intervals.length) return [newInterval]

    let ans = []
    let i = 0
    for (; i < intervals.length; i++) {
        debugger
        if (intervals[i][1] < newInterval[0]) {
            ans.push(intervals[i])
            continue
        }

        if (newInterval[1] < intervals[i][0]) break

        newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(newInterval[1], intervals[i][1])]

    }
    ans.push(newInterval)
    Array.prototype.push.apply(ans, intervals.slice(i))
    
    return ans

    //    return ans.concat(intervals.slice(i)) 这个执行慢一点
};