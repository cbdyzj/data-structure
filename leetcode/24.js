/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head) {
        return null
    }
    let p = head
    let q = p.next
    if (!q) {
        return p
    }
    head = p.next
    p.next = q.next
    head.next = p
    p.next = swapPairs(p.next)
    return head
};

// 递归

var swapPairs = function (head) {
    if (!head) {
        return null
    }
    let p = head
    let q = p.next
    if (!q) {
        return p
    }
    head = p.next
    p.next = q.next
    head.next = p

    q = p.next
    while (p.next && q.next) {
        p.next = q.next
        q.next = p.next.next
        p.next.next = q
        p = q
        q = p.next
    }
    return head
};

// 循环