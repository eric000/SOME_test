/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    let ans = Array(n).fill(1)

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++)
            ans[j] += ans[j - 1]
    }

    return ans[n- 1]
};