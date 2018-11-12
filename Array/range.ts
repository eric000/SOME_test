import TYPECHECK from "./../TYPECHECK.js";

/**
 * 新建数组
 * 长度为end - start, 开始值为start
 * @param {number} [start=0]
 * @param {number} [end]
 * @returns {number[]}
 */
function newArr(start: number = 0, end?: number): number[] {
  TYPECHECK(start, "Number");
  if (!end) {
    [start, end] = [0, start];
  }
  const len = end - start;
  const tmpArr = [len];
  if (!len) {
    throw new Error("数组长度必须大于0");
  }
  for (let i = 0, cStart = start; i < len; ++i, ++cStart) {
    tmpArr[i] = cStart;
  }
  return tmpArr;
}
export default newArr;
