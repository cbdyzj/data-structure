/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) {
        return 0
    }
    if (!root.left) {
        return 1 + minDepth(root.right)
    }
    if (!root.right) {
        return 1 + minDepth(root.left)
    }
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};

// 根节点到最近叶子节点的最短路径上的节点数量（有个坑）