// 邻接矩阵
export type AdjacencyMatrix = number[][]

// 邻接表节点
export interface AdjacencyListNode<T> {
    data: T
    adjacent: AdjacencyListNode<T>[]
}

export type Operate<T> = (data: T) => void

// 广度优先遍历
function bfs<T>(start: AdjacencyListNode<T>, fn: Operate<T>) {
    const queue: AdjacencyListNode<T>[] = []
    const visited = new Map<AdjacencyListNode<T>, boolean>()
    queue.push(start)
    while (queue.length) {
        const current = queue.shift()
        if (!visited.get(current)) {
            fn(current.data)
            visited.set(current, true)
            queue.push(...current.adjacent)
        }
    }
}
