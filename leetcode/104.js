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
const maxDepth = function (root) {
    if (!root) {
        return 0
    }
    let queue = []
    queue.push(root)
    let depth = 0
    while (queue.length) {
        const tmp = []
        for (const node of queue) {
            if (node.left) {
                tmp.push(node.left)
            }
            if (node.right) {
                tmp.push(node.right)
            }
        }
        depth++
        queue = tmp
    }
    return depth
}

// 迭代

const maxDepth2 = function (root) {
    if (!root) {
        return 0
    }
    return 1 + Math.max(maxDepth2(root.left), maxDepth2(root.right))
}

// 递归方法
