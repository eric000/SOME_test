/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let m = s.length
    let n = p.length
    let dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(false));
    dp[0][0] = true

    for (let i = 1; i <= n; i++) {
        if (p[i - 1] == '*') {
            dp[0][i] = dp[0][i - 1];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
            }
            if (p[j - 1] == '?' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            }
        }
    }

    return dp[m][n]
};

