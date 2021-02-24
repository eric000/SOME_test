/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix[0]) return false
    const row = matrix.length
    const col = matrix[0].length
    let left = 0
    let right = row * col - 1
    while(left <= right) {
        let mid = left + (right - left >>> 1)
        let pos = matrix[mid / col | 0][mid % col]
        if (pos === target) return true
        else if (pos > target) right = mid - 1
        else left = mid + 1
    }
    return false
};