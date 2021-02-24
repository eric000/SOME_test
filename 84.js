/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let ans = 0
    heights = [0, ...heights, 0]
    let stack = []

    for (let i = 0; i < heights.length; i++) {
        while (heights[stack[stack.length - 1]] > heights[i]) {
            const posIndex = stack.pop()
            ans = Math.max(ans, heights[posIndex] * (i - stack[stack.length - 1] - 1))
        }
        stack.push(i)
    }

    return ans
};
