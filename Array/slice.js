"use strict";
exports.__esModule = true;
/**
 * 根据数组返回合适的数字
 *
 * @param {number} length
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function switchNum(length, pos, end) {
    if (pos < 0) {
        pos = Math.max(pos + length, 0);
    }
    else {
        pos = Math.min(pos, length);
    }
    return pos;
}
/**
 * 返回新的切割数组
 *
 * @export
 * @param {any[]} arr
 * @param {number} start
 * @param {number} end
 * @returns {any[]}
 */
function slice(arr, start, end) {
    if (end === void 0) { end = arr.length; }
    if (!Array.isArray(arr)) {
        throw new TypeError("params is not array");
    }
    var length = arr.length;
    var tmpArr = [];
    start = switchNum(length, start, end);
    end = switchNum(length, end, length);
    while (start < end) {
        tmpArr.push(arr[start++]);
    }
    return tmpArr;
}
exports["default"] = slice;
