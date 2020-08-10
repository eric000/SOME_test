/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  let count = 0
  nums = nums.sort((a,b) => a-b)
  for(let i = 0; i< nums.length -2; i++) {
    let k = i + 2
    for (let j = i + 1; j< nums.length - 1 && nums[i] != 0; j++ ) {
      while(k< nums.length && nums[i] + nums[j] > nums[k]) k++
      count += k -j -1
    }
  }  
  return count
};