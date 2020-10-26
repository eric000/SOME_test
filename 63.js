/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let rows = obstacleGrid.length,
        cols = obstacleGrid[0].length
    let ans = Array(cols).fill(0)

    if (obstacleGrid[0][0] !== 1) ans[0] = 1

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (obstacleGrid[i][j] === 1) {
                ans[j] = 0
                continue
            }

            if (j - 1 >= 0 && obstacleGrid[i][j - 1] === 0) ans[j] += ans[j - 1]
        }
    }

    return ans.pop()
};