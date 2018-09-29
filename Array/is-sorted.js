"use strict";
exports.__esModule = true;
/**
 * 默认的匹配器
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function defaultComparator(a, b) {
    return a - b;
}
/**
 * 检查数组是否排序
 *
 * @export
 * @param {number[]} arr
 * @param {Function} comparator
 * @returns {*}
 */
function checkSort(arr, comparator) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Expected Array, got " + typeof arr);
    }
    comparator = comparator || defaultComparator;
    for (var i = 1, length_1 = arr.length; i < length_1; ++i) {
        if (comparator(arr[i - 1], arr[i]) > 0) {
            return false;
        }
    }
    return true;
}
exports["default"] = checkSort;
