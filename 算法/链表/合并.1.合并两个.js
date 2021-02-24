// 21
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}

var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2
    if (!l2) return l1
    let tmp  =new ListNode(0)
    let head = tmp
    while(l1 && l2) {
        if(l1.val > l2.val) {
            head.next = new ListNode(l2.val)
            l2 = l2.next
        } else {
            head.next = new ListNode(l1.val)
            l1 = l1.next
        }
        head = head.next
    }
    head.next =  l2 || l1 
    return tmp.next
};