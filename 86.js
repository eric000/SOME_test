/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const smallNode = new ListNode(0)
    const largeNode = new ListNode(0)

    let curSmallNode = smallNode
    let curLargeNode = largeNode

    while (head) {
        if (head.val < x) {
            curSmallNode.next = head
            curSmallNode = curSmallNode.next
        } else {
            curLargeNode.next = head
            curLargeNode = curLargeNode.next
        }
        head = head.next
    }
    curSmallNode.next = largeNode.next
    curLargeNode.next = null
    return smallNode.next
};