/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if(nums1.length === 0 || nums2.length === 0)  return []
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }

  let HashMap = nums1.reduce((item, cur) => {
    let count = item[cur]
    item[cur] = count ?  count + 1 : 1
    return item
  }, {})

  return nums2.reduce((item, cur) => {
    if (HashMap[cur]) {
      HashMap[cur] -= 1
      item.push(cur)
    }
    return item
  }, []) 
};