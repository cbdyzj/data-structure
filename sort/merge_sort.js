function merge(left, right) {
    const merged = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return [...merged, ...left, ...right]
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }
    const mid = arr.length >> 1
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid, arr.length))
    return merge(left, right)
}

