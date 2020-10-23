/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(' ')
    do {
        
        tmp = s.pop();
    } while(tmp === '' && s.length)
    
    return tmp ? tmp.length : 0
};