/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    a = parseInt(a, 2)
    b = parseInt(b,2)
    let c, d
    while (b) {
        c = a ^ b
        d = (a & b) << 1
        b = d
        a = c
    }
    return parseInt(a).toString(2)
};