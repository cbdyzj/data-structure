/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    let p = head
    let target = head
    for (var i = 0; i < n; i++) {
        p = p.next
    }
    if (p === null) {
        head = head.next
        return head
    }
    while (p.next) {
        target = target.next
        p = p.next
    }
    target.next = target.next.next
    return head
}
