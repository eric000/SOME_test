/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    let res = 0
    let left = 0
    let maxLeft = 0
    let right = height.length - 1
    let maxRight = 0

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] < maxLeft) {
                res += (maxLeft - height[left])
            } else {
                maxLeft = height[left]
            }
            left++
        } else {
            if (height[right] < maxRight) {
                res += (maxRight - height[right])
            } else {
                maxRight = height[right]
            }
            right--
        }
    }
    return res
};