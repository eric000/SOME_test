
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function (x, n) {
//     if (n > (2 ** 31) - 1 || n < (-2) ** 31) return 0.0
//     return n > 0 ? quickly(x, n) : 1 / quickly(x, -n)
// };

// function quickly(x, N) {
//     let num = 1
//     ans = x
//     while (N > 0) {
//         if (N % 2 == 1) {
//             num *= ans
//         }
//         ans *= ans
//         N = N >> 1
//     }
//     return num
// }

var myPow = function (x, n) {
    if (n === 0) return 1 // n=0直接返回1
    if (n < 0) {   				//n<0时 x的n次方等于1除以x的-n次方分
        return 1 / myPow(x, -n)
    }
    if (n % 2) {    //n是奇数时 x的n次方 = x*x的n-1次方
        return x * myPow(x, n - 1)
    }
    return myPow(x * x, n / 2) //n是偶数，使用分治，一分为二，等于x*x的n/2次方 
}
