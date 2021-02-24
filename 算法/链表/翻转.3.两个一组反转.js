// 24
var swapPairs = function(head) {
    if (!head || !head.next) return head
    const list  = new ListNode(null)
    list.next = head
    let tmp = list
    while(head && head.next) {
        
        const first = head
        const second = head.next

        tmp.next = second
        first.next = second.next
        second.next = first

        tmp = first
        head = first.next 
    }

    return list.next
}