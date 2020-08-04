/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     let rep = new RegExp(`^${p}$`)
//     return rep.test(s)
// };

var isMatch = function (s, p) {
    const sLength = s.length
    const pLength = p.length
    const dp = new Array(sLength + 1)
    for (let i = 0; i < sLength + 1; i++) {
        dp[i] = new Array(pLength + 1)
    }
    dp[sLength][pLength] = true

    for (let i = sLength; i >= 0; i--) {
        for (let j = pLength - 1; j >= 0; j--) {
            let firstMatch = i < sLength && (p[j] == s[i] || p[j] == '.')
            if (j + 1 < pLength && p[j + 1] == '*') {
                dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j])
            } else {
                dp[i][j] = firstMatch && dp[i + 1][j + 1]
            }
        }
    }
    return dp[0][0] || false
};