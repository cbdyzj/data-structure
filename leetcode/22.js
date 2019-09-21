/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    const theSet = [['']]
    if (n === 0) {
        return theSet[0]
    }
    for (var i = 1; i <= n; i++) {
        const curSet = []
        for (var c = 0; c < i; c++) {
            for (const left of theSet[c]) {
                for (const right of theSet[i - c - 1]) {
                    curSet.push(`(${left})${right}`)
                }
            }
        }
        theSet[i] = curSet
    }
    return theSet[n]
}

// 动态规划
