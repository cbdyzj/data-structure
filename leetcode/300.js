// [10,9,2,5,3,7,101,18] => 4

/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    if (!nums.length) {
        return 0
    }

    const cache = {}

    function search(index) {
        if (!cache[index]) {
            cache[index] = search0(index)
        }
        return cache[index]
    }

    function search0(index) {
        const lenList = []
        for (let i = 0; i < index; i++) {
            if (nums[i] < nums[index]) {
                lenList.push(search(i) + 1)
            }
        }
        lenList.push(1)
        return Math.max(...lenList)
    }

    const allLenList = []
    for (let i = 0; i < nums.length; i++) {
        allLenList.push(search(i))
    }
    return Math.max(...allLenList)
}
