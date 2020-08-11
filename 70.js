/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, a = 1, b = 2) {
  if (n == 1) {
    return a
  }
  return climbStairs(n - 1, b, a + b)
};

var climbStairs2 = function(n) {
  let sqrt5 = Math.sqrt(5);
  let fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
  return Math.round(fibn / sqrt5);
}