// [1,3,5,4,7] => 2
// [2,2,2,2,2] => 5

/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumberOfLIS(nums) {
    if (!nums.length) {
        return 0
    }
    // len, index
    let searchSet = [
        [1, 0],
        [0, -1]
    ]
    let maxLen = 1
    for (let i = 1; i < nums.length; i++) {
        const newSearchSetSet = []
        for (let j = 0; j < searchSet.length; j++) {
            const current = searchSet[j]
            if (!current[0]) {
                if (1 + nums.length - i > maxLen) {
                    newSearchSetSet.push([1, i])
                }
            } else if (nums[current[1]] < nums[i]) {
                const len = current[0] + 1
                if (maxLen < len) {
                    maxLen = len
                }
                if (len + nums.length - i > maxLen) {
                    newSearchSetSet.push([len, i])
                }
            }
            if (current[0] + nums.length - i > maxLen) {
                newSearchSetSet.push(current)
            }
        }
        searchSet = newSearchSetSet;
    }
    let count = 0
    for (let item of searchSet) {
        if (item[0] === maxLen) {
            count++
        }
    }
    return count
}
// timeout
