/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let result = nums[0]
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (sum > 0) {
            sum += nums[i]
        } else {
            sum = nums[i]
        }
        result = Math.max(sum, result)
    }
    return result
}

// 题目背景
// Kadane's algorithm
// https://en.wikipedia.org/wiki/Maximum_subarray_problem
