/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function childSum(node, acc, sum) {
    if (!node) {
        return [[false]]
    }
    const acc2 = node.val + acc
    if (acc2 === sum) {
        if (!node.left && !node.right) {
            return [[true, node.val]]
        }
    }
    if (!node.left && !node.right) {
        return [[false]]
    }
    const leftRes = childSum(node.left, acc2, sum)
        .filter(item => item[0])
        .map(item => {
            item.push(node.val)
            return item
        })
    const rightRes = childSum(node.right, acc2, sum)
        .filter(item => item[0])
        .map(item => {
            item.push(node.val)
            return item
        })
    return [...leftRes, ...rightRes]
}

var pathSum = function (root, sum) {
    return childSum(root, 0, sum)
        .filter(item => item[0])
        .map(item => {
            item.shift()
            return item.reverse()
        })
};

// 根据112简单改一下
// 本质是DFS
