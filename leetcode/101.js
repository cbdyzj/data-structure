/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function isChildTreeSymmetric(t1, t2) {
    if (!t1 && !t2) {
        return true
    }
    if (t1 && t2) {
        if (t1.val !== t2.val) {
            return false
        }
        return isChildTreeSymmetric(t1.left, t2.right)
            && isChildTreeSymmetric(t1.right, t2.left)
    }
    return false
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
    if (root === null) {
        return true
    }
    if (!root.left && !root.right) {
        return true
    }
    if (root.left && root.right) {
        return isChildTreeSymmetric(root.left, root.right)
    }
    return false
}
