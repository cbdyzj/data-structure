if (!ListNode) {
    function ListNode(val) {
        this.val = val
        this.next = null
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    let v3 = l1.val + l2.val
    let c = 0
    if (v3 > 9) {
        v3 -= 10
        c = 1
    }
    const l3 = new ListNode(v3)
    let l3p = l3
    l1 = l1.next
    l2 = l2.next
    while (l1 && l2) {
        l3p.next = new ListNode(l1.val + l2.val + c)
        if (l3p.next.val > 9) {
            l3p.next.val -= 10
            c = 1
        } else {
            c = 0
        }
        l1 = l1.next
        l2 = l2.next
        l3p = l3p.next
    }
    let rest = l1 || l2
    while (rest) {
        l3p.next = new ListNode(rest.val + c)
        if (l3p.next.val > 9) {
            l3p.next.val -= 10
            c = 1
        } else {
            c = 0
        }
        rest = rest.next
        l3p = l3p.next
    }
    if (c) {
        l3p.next = new ListNode(c)
    }
    return l3
}
