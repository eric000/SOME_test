/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function (a, b) {
//     a = parseInt(a, 2)
//     b = parseInt(b,2)
//     let c, d
//     while (b) {
//         c = a ^ b
//         d = (a & b) << 1
//         b = d
//         a = c
//     }
//     return parseInt(a).toString(2)
// };
var addBinary = function (a, b) {
    let ans = ''
    let ca = 0

    for(let i=a.length -1, j =b.length-1; i>=0||j>=0; i--,j--) {
        let sum = ca
        sum += a[i] === '1' ? 1 : 0
        sum += b[j] === '1' ? 1 : 0

        ans = sum % 2 + ans

        ca =  (sum >> 1) 

    }
    console.log(ca, ans)
    ans = (ca || '') + ans


    return ans
};