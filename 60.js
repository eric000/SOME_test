/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let ans = ''
    let valid = []
    let factorial = 1
    for(let i = 1; i<=n; i++) {
        factorial *= i
        valid.push(i)
    }

    k--

    while(valid.length) {
        factorial = factorial / valid.length
        let index = k / factorial | 0

        str += valid[index]
        valid.splice(index,1)

        k = k % factorial
    }
    

    return ans
};

