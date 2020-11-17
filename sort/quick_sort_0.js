function partition(array, low, high) {
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

 function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        const pos = partition(array, low, high)
        quickSort(array, low, pos - 1)
        quickSort(array, pos + 1, high)
    }
}
