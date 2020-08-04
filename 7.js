/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = x < 0 ?  false: true;
    x = [...String(Math.abs(x))].reverse().join('');
    if(x > (2)**31) return 0
    x =  flag ? Number(x): 0 - Number(x)
    
    return x
}

var reverse = function(x) {
    let tmpX = 0
    const SAFE_NUMBER = (2)**31
    while(x != 0) {
        let lastNum = x % 10
        x =  parseInt(x / 10)
        
        if (tmpX > SAFE_NUMBER/10 || (tmpX == SAFE_NUMBER / 10 && lastNum > 7)) {
            return 0
        }
        if (tmpX < -SAFE_NUMBER/10 || (tmpX == -SAFE_NUMBER / 10 && lastNum < -8)) {
            return 0
        }
        tmpX = tmpX * 10 + lastNum
    }
    return tmpX
}