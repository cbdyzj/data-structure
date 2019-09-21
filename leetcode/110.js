/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function maxDepth(root) {
    if (!root) {
        return 0
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
    if (!root) {
        return true
    }
    const leftDepth = maxDepth(root.left)
    const rightDepth = maxDepth(root.right)
    return Math.abs(leftDepth - rightDepth) <= 1
        && isBalanced(root.left)
        && isBalanced(root.right)

}
