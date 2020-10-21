// [3,0,1] => 2
// [0,1] => 2
// [9,6,4,2,3,5,7,0,1] => 8
// [0] => 1

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    // 这个解法空间复杂读O(n)，时间复杂度O(n)
    const t = []
    for (let i = 0; i < nums.length; i++) {
        t[nums[i]] = true
    }
    for (let i = 0; i < t.length; i++) {
        if (!t[i]) {
            return i
        }
    }
    return t.length
}

function swap(nums, i, j) {
    // 先取j值
    const t = nums[j]
    nums[j] = nums[i]
    nums[i] = t
}

function missingNumber2(nums) {
    // 这个解法空间复杂读O(1)，时间复杂度O(n)
    for (let i = 0; i < nums.length; i++) {
        while (i !== nums[i] && nums[i] !== undefined) {
            swap(nums, i, nums[i])
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === undefined) {
            return i
        }
    }
    return nums.length
}
