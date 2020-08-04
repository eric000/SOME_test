/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s == null || s.length == 0) {
        return true;
    }
    if (s.length % 2 == 1) {
        return false;
    }
    const HASHMAP = new Map([
        ["(", ")"],
        ["[", "]"],
        ["{", "}"]
    ])
    let tmpArr = []
    for(let i = 0; i< s.length; i++) {
        if(HASHMAP.has(s[i])) {
            tmpArr.push(s[i])
        } else {
            if(s[i] != HASHMAP.get(tmpArr.pop())) {
                return false
            }
        }
    }
    return !tmpArr.length
};