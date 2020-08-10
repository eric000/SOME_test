/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var stack = []
var res = null
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  while(root) {
    stack.push(root)
    root = root.left
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let node = stack.pop()
  let res = node.val
  node = node.right
  while (node) {
    stack.push(node)
    node = node.left
  }

  return res
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return stack.length
};
