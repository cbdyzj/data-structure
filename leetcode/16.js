/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    let diff = Number.MAX_SAFE_INTEGER
    let closest = 0
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const curNum = nums[i] + nums[j] + nums[k]
                const curDiff = Math.abs(curNum - target)
                if (curDiff < diff) {
                    diff = curDiff
                    closest = nums[i] + nums[j] + nums[k]
                }
            }
        }
    }
    return closest
}

// 应该用双指针（O(n^2)），但是三重循环（O(n^3)）也AC了😳
