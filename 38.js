/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let index = 1
  let res = '1'
  while(index < n) {
    let stack = []
    for(let i = 0; i< res.length; i++) {
      let current = stack[stack.length - 1]
      if (current && res[i] == current[0]) {
        current[1]++ 
      } else {
        stack.push([res[i], 1])
      }
    }
    res = stack.reduce((item, cur) => {
      item =  item  + cur[1]+ cur[0]
      return item
    }, '')
    index++
  }
   return res
};