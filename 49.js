/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs, map ={}) {
    for(let item of strs) {
        let key = [...item].sort().join()
        if (map[key]) {
            map[key].push(item)
        } else {
            map[key] = [item]
        }
    }
    return Object.values(map)
};