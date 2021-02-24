/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let has_zero_row = false
    let has_zero_col = false
    const row = matrix.length
    const col = matrix[0].length

    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) {
            has_zero_col = true
            break
        }
    }

    for (let i = 0; i < col; i++) {
        if (matrix[0][i] === 0) {
            has_zero_row = true
            break
        }
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[0][j] === 0 || matrix[i][0] === 0) {
                matrix[i][j] = 0
            }
        }
    }

    if (has_zero_row) {
        for (let i = 0; i < col; i++) {
            matrix[0][i] = 0
        }
    }

    if (has_zero_col) {
        for (let i = 0; i < row; i++) {
            matrix[i][0] = 0
        }
    }

    return matrix
};