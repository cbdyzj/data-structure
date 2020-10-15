// 先序遍历
function preorderSearch(node = {}, fn = node => { }) {
    if (!node) {
        return
    }
    fn(node.data)
    preorderSearch(node.left, fn)
    preorderSearch(node.right, fn)
}

// 中序遍历
function inorderSearch(node = {}, fn = node => { }) {
    if (!node) {
        return
    }
    inorderSearch(node.left, fn)
    fn(node.data)
    inorderSearch(node.right, fn)
}


// 后序遍历
function postorderSearch(node = {}, fn = node => { }) {
    if (!node) {
        return
    }
    inorderSearch(node.left, fn)
    inorderSearch(node.right, fn)
    fn(node.data)
}

// 层次遍历
function hierarchicalSearch(root, fn = node => { }) {
    const queue = []
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