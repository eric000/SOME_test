/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let left = 0, right = n - 1, top = 0, bottom = n - 1
    let ans = Array(n).fill('').map(_ => [])
    let index = 0
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            ans[top][i] = ++index
        }

        for (let i = top + 1; i <= bottom; i++) {
            ans[i][right] = ++index
        }

        if (left < right && top < bottom) {
            for (let i = right - 1; i > left; i--) {
                ans[bottom][i] = ++index
            }
            for (let i = bottom; i > left; i--) {
                ans[i][left] = ++index
            }
        }
        left++
        right--
        top++
        bottom--

    }

    return ans
};