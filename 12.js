
// var roman2Int = function (num) {
//     if (!num) return 0
//     let tmp = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }
//     let tmpArr = Object.keys(tmp)
//     let length = num.length - 1
//     let beforeFlag = length - 1 > -1 && (tmpArr.findIndex(item => item == num[length]) - tmpArr.findIndex(item => item == num[length - 1]))
//     let total = 0
//     if(beforeFlag) {
//         total = tmp[num[length]] - (beforeFlag == 1 ? tmp[num[length]] / 5 : tmp[num[length]] / 10)
//         num = num.substr(0, length-1)
//     } else {
//         total = tmp[num[length]]
//         num = num.substr(0, length)
//     }
//     return total + roman2Int(num)
// };
/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function (num) {
//     let roman = ''
//     let index = 0
//     let obj = {
//         1: 'I',
//         5: 'V',
//         10: 'X',
//         50: 'L',
//         100: 'C',
//         500: 'D',
//         1000: 'M'
//     }
//     while (num) {
//         let item = num % 10
//         let tmp = ''
//         switch (item) {
//             case 0:
//             case 1:
//             case 2:
//             case 3:
//                 tmp = tmp.padEnd(item, obj[10 ** index])
//                 break;
//             case 4:
//                 tmp = obj[10 ** index] + obj[5 * (10 ** index)]
//                 break;
//             case 9:
//                 tmp = obj[10 ** index] + obj[10 ** (index + 1)]
//                 break
//             default:
//                 tmp = obj[5* (10 ** (index))]
//                 tmp = tmp.padEnd(item - 4, obj[10 ** index])
//         }
//         roman = tmp + roman
//         index += 1
//         num = Math.floor(num / 10)
//     }
//     return roman
// }

// var intToRoman = function (num) {
//     var Q = ["", "M", "MM", "MMM"];
//     var B = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
//     var S = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
//     var G = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
//     return Q[Math.floor(num / 1000)] + B[Math.floor((num % 1000) / 100)] + S[Math.floor((num % 100) / 10)] + G[num % 10];
// };

var intToRoman = function (num) {
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let index = 0
    let res = ''
    while (index < 13) {
        while (num >= nums[index]) {
            res += romans[index]
            num -= nums[index]
        }
        index += 1
    }

    return res
}