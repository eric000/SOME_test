/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if ([num1, num2].includes('0')) return '0'
    let res = []; // 结果数组

    for (let i = num1.length - 1; i >= 0; i--) {
        let pro = 0
        for (let j = num2.length - 1; j >= 0; j--) {
            let sum = parseInt(num1[i]) * parseInt(num2[j]) + pro
            pro = Math.floor(sum / 10)
            sum %= 10

            if (!res[i + j]) {
                res[i + j] = sum
            } else {
                res[i + j] += sum
                if (res[i + j] >= 10) {
                    pro += Math.floor(res[i + j] / 10)
                    res[i + j] %= 10
                }
            }
        }
        if (pro > 0) {
            if (i - 1 >= 0) {
                res[i - 1] = pro
            } else {
                res.unshift(pro)
            }
        }
    }

    return res.join('')
};

