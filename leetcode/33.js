/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch(nums, start, end, target) {
    if (start === end) {
        return nums[start] === target ? start : -1
    }
    const mid = Math.trunc((start + end) / 2)
    const left = binarySearch(nums, start, mid, target)
    const right = binarySearch(nums, mid + 1, end, target)
    return left !== -1 ? left : right
}

function mutiSearch(nums, start, end, target) {
    // situation 0
    if (nums[start] <= nums[end]) {
        return binarySearch(nums, start, end, target)
    }
    // situation 1
    const mid = Math.trunc((start + end) / 2)
    const left = mutiSearch(nums, start, mid, target)
    const right = mutiSearch(nums, mid + 1, end, target)
    return left !== -1 ? left : right
}

var search = function (nums, target) {
    if (!nums.length) {
        return -1
    }
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }
    const start = 0
    const end = nums.length - 1
    const mid = Math.trunc((start + end) / 2)
    const left = mutiSearch(nums, start, mid, target)
    const right = mutiSearch(nums, mid + 1, end, target)
    return left !== -1 ? left : right
};

// 递归
// P.S. 可以把三个函数合成一个，但是逻辑上就不清晰了