/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) return true
    
    const halfNode = findHalfNode(head)
    const reverseNode = toReverseNode(null, halfNode.next)

    for(let p=head, newP = reverseNode; newP;) {
        if (p.val != newP.val) return false
        p = p.next
        newP = newP.next
    }
    return true
};
// const toReverseNode = function(head) {
//     let pre = null
//     let cur = head
//     while(head) {
//         const tmp = cur.next
//         cur.next = pre
//         pre = cur
//         cur = tmp
//     }

//     return pre
// }

let toReverseNode = (pre, cur) => {
    if(!cur) return pre;
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
}


const findHalfNode = function(head) {
    let fast , slow
    fast =slow = head

    while(fast  && fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}