/**
 * Low to high
 * 
 * @param arr Array to sort
 */
function insertionSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        let low = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[low] > arr[j]) {
                low = j
            }
        }
        if (low != i) {
            let tmp = arr[low]
            for (let k = low; k > i; k--) {
                arr[k] = arr[k - 1]
            }
            arr[i] = tmp
        }
    }
    return arr
}
