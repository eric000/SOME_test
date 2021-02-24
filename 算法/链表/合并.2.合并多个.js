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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const _mergeList = (start, end) => {
        if (start > end) return null
        if (start === end) return lists[end]
        const mid = start + ((end - start) >> 1)

        return mergeTwoLists(_mergeList(start, mid), _mergeList(mid +1 , end))
    }
    return _mergeList(0, lists.length - 1)
}