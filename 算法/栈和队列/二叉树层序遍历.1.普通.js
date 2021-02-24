
//  102
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    const quene = []
    const res = []

    quene.push(root)

    while(quene.length) {
        const curLenth = quene.length
        res.push([])
        const resLen = res.length
        // 102 103的唯一区别
        const method = resLen % 2 === 0 ? 'unshift' : 'push'
        for(let i = 0; i < curLenth; i++) {
            const node = quene.shift()
            res[resLen - 1][method](node.val)
            if (node.left) quene.push(node.left)
            if (node.right) quene.push(node.right)
        }
    }

    return res
}