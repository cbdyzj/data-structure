function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
    if (!head) {
        return head
    }

    const oddHead = head
    const evenHead = head.next

    let pOdd = oddHead
    let pEven = evenHead

    if (!pEven) {
        return pOdd
    }

    let p = pEven.next

    let isOdd = true
    while (p) {
        if (isOdd) {
            pOdd.next = p
            pOdd = p
        } else {
            pEven.next = p
            pEven = p
        }
        isOdd = !isOdd
        p = p.next
    }
    pOdd.next = evenHead
    pEven.next = null
    return oddHead
}
