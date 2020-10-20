/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
function kClosest(points, K) {

    function d(point) {
        return point[0] * point[0] + point[1] * point[1]
    }

    const kHeap = []

    for (let i = 0; i < K; i++) {
        const point = points[i]
        const val = d(point)
        kHeap.push({ val, point })
    }
    kHeap.sort((a, b) => a.val - b.val)

    // 可以用二分查找优化？
    function add(point) {
        const val = d(point)
        // 替换元素
        if (kHeap[K - 1].val > val) {
            kHeap[K - 1] = { val, point }
        }
        for (let j = K - 1; j > 0; j--) {
            if (kHeap[j - 1].val < kHeap[j].val) {
                break
            }
            const tmp = kHeap[j - 1]
            kHeap[j - 1] = kHeap[j]
            kHeap[j] = tmp
        }
    }

    for (let i = K; i < points.length; i++) {
        add(points[i])
    }
    return kHeap.map(it => it.point)
}
