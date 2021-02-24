// 141
var hasCycle = function(head) {
    let set = new Set()
    let p = head
    while(p) {
        if (set.has(p)) {
            return true
        }
        set.add(p)
        p = p.next
    }
    return false
}

var hasCycle = function(head) {
    let fast, slow
    fast = slow = head

    if (!fast || !fast.next || !fast.next.next) return false

    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if (slow == fast) return true
    }

    return false
}