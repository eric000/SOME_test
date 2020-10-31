/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) return 0

    let ans = Math.floor(Math.exp(.5 * Math.log(x)))
    return x >= (ans + 1) * (ans + 1) ? ans + 1 : ans
};