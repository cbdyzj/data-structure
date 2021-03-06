/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b)
    const resultSet = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let j = i + 1
            let k = nums.length - 1
            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k]
                if (sum === 0) {
                    const picked = [nums[i], nums[j], nums[k]]
                    resultSet.push(picked)
                    while (j < k && nums[j] === nums[j + 1]) {
                        j++
                    }
                    while (j < k && nums[k] === nums[k - 1]) {
                        k--
                    }
                    k--
                    j++
                } else if (sum < 0) {
                    while (j < k && nums[j] === nums[j + 1]) {
                        j++
                    }
                    j++
                } else {
                    while (j < k && nums[k] === nums[k - 1]) {
                        k--
                    }
                    k--
                }
            }
        }
    }
    return resultSet
}

// 双指针
// JavaScript的Array.prototype.sort默认字典排序
