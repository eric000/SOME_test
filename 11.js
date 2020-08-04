/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let left = 0, right = height.length - 1
    while(left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left))
        height[left] > height[right] ? right-- : left++
    }
    return max
};