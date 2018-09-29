
/**
 * 默认的匹配器
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function defaultComparator(a: number , b: number): number {
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
export default function checkSort(arr: number[], comparator: any): any {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected Array, got " + typeof arr);
  }
  comparator = comparator || defaultComparator;
  for (let i = 1, length = arr.length; i < length; ++i) {
    if (comparator(arr[i - 1], arr[i]) > 0) { return false; }
  }
  return true;
}
