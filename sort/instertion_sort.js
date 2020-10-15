/**
 * 把未排序的序列中的元素依次插入到已经排序的序列中
 */
function insertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] < arr[j + 1]) {
                break
            }
            let tmp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = tmp
        }
    }
}
