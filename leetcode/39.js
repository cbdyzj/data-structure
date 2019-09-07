
function isSameArray(a, b) {
    if (a.length !== b.length) {
        return false
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false
        }
    }
    return true
}

function mergeSet(oldOne, newOne) {
    for (const no of newOne) {
        let unique = true
        for (const oo of oldOne) {
            if (isSameArray(no, oo)) {
                unique = false
                break
            }
        }
        if (unique) {
            oldOne.push(no)
        }
    }
}

var combinationSum = function (candidates, target) {
    const resultSet = []
    for (let i = 0; i < candidates.length; i++) {
        if (target > candidates[i]) {
            const partSet = combinationSum(candidates, target - candidates[i])
            if (partSet.length) {
                const newSet = partSet.map(el => {
                    el.push(candidates[i])
                    el.sort((a, b) => a - b)
                    return el
                })
                mergeSet(resultSet, newSet)
            }
        } else if (target === candidates[i]) {
            mergeSet(resultSet, [[candidates[i]]])
        }
    }
    return resultSet
};

// 可以再用动态规划优化
