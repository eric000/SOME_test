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
var reverseKGroup = function(head, k) {
    let pre = null, cur = head
    p = head
    for(let i =0; i< k; i++)  {
        if (!p) return head
        p = p.next
    }

    for(let i = 0; i< k; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }

    head.next = reverseKGroup(cur, k)

    return pre
};

