/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length - count; i++) {
        let p = 0
        while (i + p + 1 < nums.length - count
        && nums[i] === nums[i + p + 1]) {
            p++
        }
        if (p) {
            for (let j = 1; i + j + p < nums.length - count; j++) {
                nums[i + j] = nums[i + j + p]
            }
            count += p
        }
    }
    return nums.length - count
}
