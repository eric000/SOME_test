/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let result = []
    if (k > n || k <= 0) return result
    const dfs = (begin, n, k, path) => {
        if (path.length == k) {
            result.push([...path])
            return
        }

        for (let i = begin; i <= n - (k - path.length) + 1; i++) {
            path.push(i)
            dfs(i + 1, n, k, path)
            path.pop()
        }
    }

    dfs(1, n, k, [])

    return result
};