/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {

    if (!n) return []
    let map = new Map()

    const generateTreeArr = (start, end) => {
        if (end < start) return [null]
        const res = []
        const labelName = `${start}-${end}`
        if (map.has(labelName)) return map.get(labelName)
        for (let i = start; i <= end; i++) {
            const leftArr = generateTreeArr(start, i - 1)
            const rightArr = generateTreeArr(i + 1, end)
            for (let left of leftArr) {
                for (let right of rightArr) {
                    const currentNode = new TreeNode(i)
                    currentNode.left = left
                    currentNode.right = right
                    res.push(currentNode)
                }
            }
        }
        map.set(labelName, res)
        return res
    }


    return generateTreeArr(1, n)
};
