// 142

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast, slow
    fast = slow = head

    if (!fast || !fast.next || !fast.next.next) return null

    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if (slow == fast)  {
            let third = head
            while(third !== slow) {
                third = third.next
                slow = slow.next
            }
            return third
        }
    }

    return null
}