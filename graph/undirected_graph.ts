// 广度优先遍历
function breadthFirstSearch(start: { data: {}, adjacent: [] }, fn = node => { }) {
    const queue = []
    const visited = new Map
    queue.push(start)
    while (queue.length) {
        const current = queue.shift()
        if (!visited.get(current)) {
            fn(current.data)
            visited.set(current, true)
            queue.push(...current.adjacent.filter(c => !visited.get(c)))
        }
    }
}

// 深度优先遍历
function DepthFirstSearch(start: { data: {}, adjacent: [] }, fn = node => { }) {
    const stack = []
    const visited = new Map
    stack.push(start)
    while (stack.length) {
        const current = stack.pop()
        if (!visited.get(current)) {
            fn(current.data)
            visited.set(current, true)
            stack.push(...current.adjacent.filter(c => !visited.get(c)))
        }
    }
}
