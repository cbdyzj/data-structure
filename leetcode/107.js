/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) {
        return []
    }
    let result = [[root.val]]
    let queue = []
    queue.push(root)
    while (queue.length) {
        const tmp = []
        for (const node of queue) {
            if (node.left) { tmp.push(node.left) }
            if (node.right) { tmp.push(node.right) }
        }
        if (tmp.length) {
            result = [tmp.map(tn => tn.val), ...result]
        }
        queue = tmp
    }
    return result
};