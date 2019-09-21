/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function childSum(node, acc, sum) {
    if (!node) {
        return false
    }
    const acc2 = node.val + acc
    if (acc2 === sum) {
        if (!node.left && !node.right) {
            return true
        }
    }
    if (!node.left && !node.right) {
        return false
    }
    return childSum(node.left, acc2, sum)
        || childSum(node.right, acc2, sum)
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function (root, sum) {
    return childSum(root, 0, sum)
}
