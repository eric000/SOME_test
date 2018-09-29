/**
 * 根据数组返回合适的数字
 *
 * @param {number} length
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function switchNum(length: number, pos: number, end: number): number {
  if (pos < 0) {
    pos = Math.max(pos + length, 0);
  } else {
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
export default function slice(arr: any[], start: number, end: number = arr.length): any[] {
  if (!Array.isArray(arr)) {
    throw new TypeError("params is not array");
  }
  const length = arr.length;
  const tmpArr: any[] = [];
  start = switchNum(length, start, end);
  end = switchNum(length, end, length);
  while (start < end ) {
    tmpArr.push(arr[start++]);
  }
  return tmpArr;
}
