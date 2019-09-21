/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    let i
    for (i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i
        }
    }
    return i
}

// 二分查找
