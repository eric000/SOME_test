// 206
// 最简单的 有个新变量存储

function reverseList (head) {
    if (!head) return null
    let pre = null, cur = head

    while(cur) {
        let tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }
    return pre
}

function reverseList (head) {
    const reverse = (pre, cur) => {
        if (!cur) return pre
        const next = cur.next
        cur.next = pre
        return reverse(cur, next)
    }
    return reverse(null, head)
}