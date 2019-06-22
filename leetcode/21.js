/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const l3 = new ListNode()
    let l3p = l3
    while (l1 && l2) {
        if (l1.val < l2.val) {
            l3p.next = l1
            l1 = l1.next
        } else {
            l3p.next = l2
            l2 = l2.next
        }
        l3p = l3p.next
    }
    let p = l1 || l2
    l3p.next = p
    return l3.next
};
