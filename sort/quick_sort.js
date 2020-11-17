/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const pivotIndex = arr.length >> 1
    const pivot = arr.splice(pivotIndex, 1)[0]
    const left = []
    const right = []
    arr.forEach(it => it <= pivot ? left.push(it) : right.push(it))
    return [...quickSort(left), pivot, ...quickSort(right)]
}
