/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    const len = nums.length
    const resultSet = []
    for (let i = 0; i < len - 3; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            for (let j = i + 1; j < len - 2; j++) {
                if (j === i + 1 || nums[j] !== nums[j - 1]) {
                    for (let left = j + 1, right = len - 1; left < right;) {
                        // console.log(i, j, left, right)
                        const sum = nums[i] + nums[j] + nums[left] + nums[right]
                        if (sum === target) {
                            resultSet.push([nums[i], nums[j], nums[left], nums[right]])
                            while (left < right && nums[right] === nums[right - 1]) {
                                right--
                            }
                            while (left < right && nums[left] === nums[left + 1]) {
                                left++
                            }
                            right--
                            left++
                        } else if (sum > target) {
                            while (left < right && nums[right] === nums[right - 1]) {
                                right--
                            }
                            right--
                        } else {
                            while (left < right && nums[left] === nums[left + 1]) {
                                left++
                            }
                            left++
                        }
                    }
                }
            }
        }
    }
    return resultSet
}

// 固定两个数，剩下两个数用双指针，（O(n^3)）
