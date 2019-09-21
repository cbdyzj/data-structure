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
const deleteDuplicates = function (head) {
    if (!head) {
        return null
    }
    let p = head.next
    while (p && head.val === p.val) {
        p = p.next
    }
    head.next = deleteDuplicates(p)
    return head
}

// 递归
