/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let head = 1
    const result = [0]
    for (let i = 0; i < n; i++) {
        for (let j = result.length - 1; j >= 0; j--) {
            result.push(result[j] + head)
        }

        head = head << 1
    }

    return result
};