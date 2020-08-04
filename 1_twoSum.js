/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum= function(nums, target) {
    let haseMap = {}
    let rtn = []
    for(let i = 0; i< nums.length; i++){
        let tmpVal = target - nums[i]
        if (Number.isInteger(haseMap[tmpVal])) {
            rtn =  [haseMap[tmpVal], i]
            break;
        }
        if (!Number.isInteger(haseMap[nums[i]])) {
            haseMap[nums[i]] = i
        }
    }
    return rtn
}

//  改良版 重复的参数
var twoSum = function(nums, target) {
    let haseMap = new Map()
    let rtn = []
    for(let i = 0; i<nums.length;i++) {
        if (haseMap.has(nums[i])) {
            let tmp = haseMap.get(nums[i])
            haseMap.set(nums[i], [...tmp, i])
        } else {
            haseMap.set(nums[i], [i])
        }
        let tmpVal = target - nums[i]
        if(haseMap.has(tmpVal)) {
            haseMap.get(tmpVal).forEach(element => {
                rtn.push([element,i])
            });
            
        }
    }
    return rtn
};