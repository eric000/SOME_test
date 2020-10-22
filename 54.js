/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || !matrix.length || !matrix[0].length) return []
    let ans = []

    let rows = matrix.length
    let cols = matrix[0].length

    let left = 0, right = cols - 1, top = 0, bottom = rows - 1
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i])
        }
        for (let i = top + 1; i <= bottom; i++) {
            ans.push(matrix[i][right])
        }
        if (left < right && top < bottom) {
            for (let i = right - 1; i > left; i--) {
                ans.push(matrix[bottom][i])
            }

            for (let i = bottom; i > top; i--) {
                ans.push(matrix[i][left])
            }
        }
        left++
        right--
        top++
        bottom--
    }

    return ans
};