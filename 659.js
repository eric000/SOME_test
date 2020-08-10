/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  let hashMap = nums.reduce((item, cur) =>{
    item[cur] = item[cur] ? item[cur] + 1 : 1
    return item
  }, {})
  
};