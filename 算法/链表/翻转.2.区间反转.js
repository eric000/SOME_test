var reverseBetween = function (head, m, n) {
  if (!head) return null;

  let cur = head,
    pre = null;
  while (m > 1) {
    pre = cur;
    cur = cur.next;

    m--;
    n--;
  }

  const con = pre;
  let temp = null,
    tail = cur;

  while (n) {
    // 存一下cur的后继节点
    temp = cur.next;

    // 链表反指一下
    cur.next = pre;
    // pre 变成反指的头部！
    pre = cur;

    // cur处理完毕，接着cur等于后继节点
    cur = temp;

    n--;
  }

  if (con) {
    con.next = pre;
  } else {
    head = pre;
  }

  tail.next = cur;

  return head;
};
