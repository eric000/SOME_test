// 20
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (!s || !len) return true;
  if (s % 2 === 1) return false;

  const hashTable = new Map([
    ["[", "]"],
    ["(", ")"],
    ["{", "}"],
  ]);

  const stack = [];

  for (let i = 0; i < len; i++) {
    const char = s[i];
    if (hashTable.has(char)) {
      stack.push(hashTable.get(char));
    } else {
      const validChar = stack.pop();
      if (validChar !== char) return false;
    }
  }

  return !stack.length;
};
