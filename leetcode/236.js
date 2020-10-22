function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {

    function search(node) {
        if (!node) {
            return {}
        }
        if (node.val === p.val) {
            const t = { p: 1 }
            const l = search(node.left)
            const r = search(node.right)
            if (l.q || r.q) {
                return { p: 1, q: 1, a: node }
            } else {
                return t
            }
        } else if (node.val === q.val) {
            const t = { q: 1 }
            const l = search(node.left)
            const r = search(node.right)
            if (l.p || r.p) {
                return { p: 1, q: 1, a: node }
            } else {
                return t
            }
        } else {
            const l = search(node.left)
            const r = search(node.right)
            const t = { p: l.p || r.p, q: l.q || r.q, a: l.a || r.a }
            if (t.p && t.q && !t.a) {
                t.a = node
            }
            return t
        }
    }

    return search(root).a
}
