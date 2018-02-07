function partition(array: number[], low: number, high: number) {
    const pivot = array[low]
    while (low < high) {
        while (pivot <= array[high] && low < high) {
            high--
        }
        if (low < high) {
            array[low] = array[high]
        }
        while (pivot >= array[low] && low < high) {
            low++
        }
        if (low < high) {
            array[high] = array[low]
        }
    }
    array[low] = pivot
    return low
}

export function quickSort(array: number[], low: number = 0, high: number = array.length - 1) {
    if (low < high) {
        const pos = partition(array, low, high)
        quickSort(array, low, pos - 1)
        quickSort(array, pos + 1, high)
    }
}
