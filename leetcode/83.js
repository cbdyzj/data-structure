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
var deleteDuplicates = function (head) {
    if (!head) {
        return null
    }
    let p = head.next
    while (p && head.val === p.val) {
        p = p.next
    }
    head.next = deleteDuplicates(p)
    return head
};

// 递归