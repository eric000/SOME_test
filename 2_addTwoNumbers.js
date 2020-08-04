function ListNode(val) {
    this.val = val;
    this.next = null;
}
let a = new ListNode()
a.next = new ListNode(2)
a.next.next = new ListNode(4)
a.next.next.next = new ListNode(3)


let b = new ListNode()
b.next = new ListNode(5)
b.next.next = new ListNode(6)
b.next.next.next = new ListNode(4)

var addTwoNumbers = function(l1, l2) {
    let carrying = 0
    let list  = null
    let head = null
    while(l1 || l2 || carrying) {
        let ll1 = 0, ll2 = 0
        if (l1){
            ll1 = l1.val
            l1 = l1.next 
        }
        if (l2){
            ll2 = l2.val
            l2 = l2.next 
        }

        let tmp = ll1 + ll2 + carrying 
        if(tmp > 9) {
            tmp = tmp % 10
            carrying  = 1
        } else {
            carrying  = 0
        }
        if (!list) {
            list = new ListNode(tmp)
            head = list
        } else {
            head.next = new ListNode(tmp)
            head = head.next
        }

        
    }
    return list
};