/**
 * Low to high
 * 
 * @param arr Array to sort
 */
function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, k = 1; k < arr.length - i; j++ , k++) {
            if (arr[j] > arr[k]) {
                let tmp = arr[j]
                arr[j] = arr[k]
                arr[k] = tmp
            }
        }
    }
    return arr
}
