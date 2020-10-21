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

    const cache = {}

    function search(index) {
        if (!cache[index]) {
            cache[index] = search0(index)
        }
        return cache[index]
    }

    function getLongest(lenCountList) {
        let count = 0
        let maxLen = 1
        for (let it of lenCountList) {
            if (it[0] > maxLen) {
                maxLen = it[0]
                count = it[1]
            } else if (it[0] === maxLen) {
                count += it[1]
            }
        }
        return [maxLen, count]
    }

    // [len,count]
    function search0(index) {
        const lenCountList = []
        for (let i = 0; i < index; i++) {
            if (nums[i] < nums[index]) {
                const [len, count] = search(i)
                lenCountList.push([len + 1, count])
            }
        }
        lenCountList.push([1, 1])
        return getLongest(lenCountList)
    }

    const lenCountList = []
    for (let i = 0; i < nums.length; i++) {
        lenCountList.push(search(i))
    }
    return getLongest(lenCountList)[1]
}

// 在第300题的基础上稍微改进一下
