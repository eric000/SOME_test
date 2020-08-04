/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let mid, tail;
    mid = tail = head
    while(n) {
        tail = tail.next
        n--
        if(!tail) return head.next
    }
    while(tail && tail.next) {
        mid = mid.next
        tail = tail.next
    }
    mid.next = mid.next ? mid.next.next : null
    return head
};