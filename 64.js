/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let rows = grid.length, cols = grid[0].length
    let ans = [grid[0][0]]

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (row == 0 && col == 0) {
                continue
            } else if (row == 0 && col != 0) {
                ans[col] = ans[col - 1] + grid[row][col]
            } else if (col == 0 && row != 0) {
                ans[col] = grid[row][col] + ans[col]
            } else {
                ans[col] = Math.min(ans[col - 1], ans[col]) + grid[row][col]
            }

        }
    }

    return ans.pop()
};