/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return (Number(s)===0 || !!Number(s)) && s.trim() != ''
};