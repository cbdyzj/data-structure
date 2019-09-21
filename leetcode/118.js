/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    if (!numRows) {
        return []
    }
    if (numRows === 1) {
        return [[1]]
    }
    const lastResultSet = generate(numRows - 1)
    const lastLine = lastResultSet[numRows - 2]
    const next = [lastLine[0]]
    for (let i = 0; i < lastLine.length - 1; i++) {
        next.push(lastLine[i] + lastLine[i + 1])
    }
    next.push(lastLine[lastLine.length - 1])
    lastResultSet.push(next)
    return lastResultSet
}
