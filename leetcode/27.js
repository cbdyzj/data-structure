/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let count = 0
    for (let i = 0; i < nums.length - count; i++) {
        let p = 0
        while (i + p < nums.length - count
            && nums[i + p] === val) {
            p++
        }
        if (p) {
            for (let j = 0; i + j + p < nums.length - count; j++) {
                nums[i + j] = nums[i + j + p]
            }
            count += p
        }
    }
    return nums.length - count
};

