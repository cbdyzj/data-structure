export interface TreeNode<T> {
    left?: TreeNode<T>
    right?: TreeNode<T>
    data?: T
}

export type Operate<T> = (data: T) => void

// 遍历二叉树
export const Traversals = {

    preOrder<T>(node: TreeNode<T>, fn: Operate<T>) {
        if (!node) {
            return
        }
        fn(node.data)
        Traversals.preOrder(node.left, fn)
        Traversals.preOrder(node.right, fn)
    },

    inOrder<T>(node: TreeNode<T>, fn: Operate<T>) {
        if (!node) {
            return
        }
        Traversals.inOrder(node.left, fn)
        fn(node.data)
        Traversals.inOrder(node.right, fn)
    },

    postOrder<T>(node: TreeNode<T>, fn: Operate<T>) {
        if (!node) {
            return
        }
        Traversals.postOrder(node.left, fn)
        Traversals.postOrder(node.right, fn)
        fn(node.data)
    },

    levelOrder<T>(root: TreeNode<T>, fn: Operate<T>) {
        const queue: TreeNode<T>[] = []
        let node = root
        if (!node) {
            return
        }
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            fn(node.data)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }

}
