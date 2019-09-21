/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    const range = [-1, -1]

    function binarySearch(nums, start, end, target) {
        if (start === end) {
            if (nums[start] === target) {
                if (range[0] === -1) {
                    range[0] = start
                    range[1] = start
                } else if (start < range[0]) {
                    range[0] = start
                } else if (start > range[1]) {
                    range[1] = start
                }
            }
            return
        }
        const mid = Math.trunc((start + end) / 2)
        if (nums[mid] > target) {
            binarySearch(nums, start, mid, target)
        } else if (nums[mid] < target) {
            binarySearch(nums, mid + 1, end, target)
        } else {
            binarySearch(nums, start, mid, target)
            binarySearch(nums, mid + 1, end, target)
        }
    }

    if (!nums.length) {
        return range
    }
    if (nums.length === 1) {
        if (nums[0] === target) {
            return [0, 0]
        }
        return range
    }
    binarySearch(nums, 0, nums.length - 1, target)
    return range
}

// 二分查找变体
