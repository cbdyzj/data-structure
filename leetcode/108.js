/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const sortedArrayToBST = function (nums, start = 0, end = nums.length - 1) {
    if (start > end) {
        return null
    }
    if (start === end) {
        return new TreeNode(nums[start])
    }
    const mid = Math.trunc((start + end) / 2)
    const node = new TreeNode(nums[mid])
    node.left = sortedArrayToBST(nums, start, mid - 1)
    node.right = sortedArrayToBST(nums, mid + 1, end)
    return node
}

// 递归
