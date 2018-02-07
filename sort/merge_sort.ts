function merge(a: number[], b: number[]) {
    const c: number[] = []
    while (a.length && b.length) {
        if (a[0] <= b[0]) {
            c.push(a.shift())
        } else {
            c.push(b.shift())
        }
    }
    c.push(...a, ...b)
    return c
}

export function mergeSort(array: number[]) {
    if (array.length === 1) {
        return array
    }
    const mid = Math.trunc(array.length / 2)
    const a = mergeSort(array.slice(0, mid))
    const b = mergeSort(array.slice(mid, array.length))
    return merge(a, b)
}
