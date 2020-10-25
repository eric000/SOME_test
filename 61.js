/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if (!head) return null
    if (!head.next) return head

    let oldHead = head
    let n = 1
    while(oldHead.next) {
        n++
        oldHead = oldHead.next
    }
    oldHead.next = head

    let newTail = head

    for(let i = 0; i < n-(k%n) -1; i++) {
        newTail = newTail.next
    }
    let newHead = newTail.next
    newTail.next = null

    return newHead
};