/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
    if (!arr1.length || !arr2.length) {
        return arr1
    }

    arr1.sort((a, b) => {
        const aIndex = arr2.indexOf(a)
        const bIndex = arr2.indexOf(b)
        if (aIndex >= 0 && bIndex >= 0) {
            return aIndex - bIndex
        }
        if (aIndex === -1 && bIndex >= 0) {
            return 1
        }
        if (aIndex >= 0 && bIndex === -1) {
            return -1
        }
        return a - b
    })
    return arr1
}
