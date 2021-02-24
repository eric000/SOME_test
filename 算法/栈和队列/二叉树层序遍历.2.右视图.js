
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
var rightSideView = function (root) {
    if (!root) return []
    const quene = []
    const res = []

    quene.push(root)

    while(quene.length) {
        const curLenth = quene.length
        res.push(quene[curLenth -1].val)
        for(let i = 0; i < curLenth; i++) {
            const node = quene.shift()
            if (node.left) quene.push(node.left)
            if (node.right) quene.push(node.right)
        }
    }

    return res
}