/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s[0] === '0') return 0
    let pre = 1, cur = 1
    for (let i = 1; i < s.length; i++) {
        let tmp = cur
        if (s[i] === '0') {
            if (['1', '2'].includes(s[i - 1])) {
                cur = pre
            } else {
                return 0
            }
        } else {
            if (s[i - 1] === '1' || (s[i - 1] === '2' && +s[i] >= 0 && +s[i] <= 6)) {
                cur = pre + cur
            }
            pre = tmp

        }
    }
    return cur

};