/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {

    function search(i, j) {
        let maxVal = nums[i]
        for (let l = i + 1; l <= j; l++) {
            if (nums[l] > maxVal) {
                maxVal = nums[l]
            }
        }
        return maxVal
    }

    const maxArray = []
    for (let i = 0; i < nums.length - k + 1; i++) {
        maxArray.push(search(i, i + k - 1))
    }
    return maxArray
}
