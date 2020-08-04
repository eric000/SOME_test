/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
    if (!digits) return []
    var a = []
    function gener(first, other) {
        if (!other) return a.push(first)
        let digit = other[0]
        let tmpOther = other.substr(1)
        let val = getString(digit)
        for (let i = 0; i < val.length; i++) {
            gener(first + val[i], tmpOther)
        }
    }
    gener('', digits)
    return a
};



function getString(val) {
    switch (val) {
        case '0':
        case '1':
            return ''
        case '2':
            return 'abc'
        case '3':
            return 'def'
        case '4':
            return 'ghi'
        case '5':
            return 'jkl'
        case '6':
            return 'mno'
        case '7':
            return 'pqrs'
        case '8':
            return 'tuv'
        case '9':
            return 'wxyz'
    }
}