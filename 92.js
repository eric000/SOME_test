/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (!head) return null
    let cur = head, pre = null
    while (m > 1) {
        pre = cur
        cur = cur.next
        m--
        n--
    }
    let con = pre, tail = cur, third = null
    while (n > 0) {
        third = cur.next
        cur.next = pre
        pre = cur
        cur = third
        n--
    }

    if (con) {
        con.next = pre
    } else {
        head = pre
    }
    tail.next = cur
    return head
};