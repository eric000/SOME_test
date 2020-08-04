/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) return s;
    if (numRows == s.length) return s
    let tmpArr = Array.apply(null, {length: numRows}).map(_ => '')
    let downFlag = false
    let index = 0
    for(let i = 0; i<s.length; i++ ) {
        tmpArr[index] += s[i];

        (index == 0 || index == numRows - 1)  && (downFlag = !downFlag)
        index += (downFlag ? 1 : -1)

    }
    return tmpArr.join('')
};