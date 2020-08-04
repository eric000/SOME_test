/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || strs.length == 0) return ''
    return mergeStr(strs)[0]
};

function mergeStr(strs) {
    if (strs.length < 2) {
        return strs
    }
    let mid = strs.length >> 1
    let left = strs.slice(0, mid)
    let right = strs.slice(mid,strs.length)
    return mergeCommon(mergeStr(left),mergeStr(right))
}

function mergeCommon(left, right) {
    let text = ''
    var length = Math.min(left[0].length, right[0].length)
    for (let i = 0; i < length; i++) {
        if (left[0][i] == right[0][i]) { text = text + left[0][i] } else { break }
    }
    return [text]
}