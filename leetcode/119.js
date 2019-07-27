/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1]
    }
    const lastLine = getRow(rowIndex - 1)
    const next = [lastLine[0]]
    for (let i = 0; i < lastLine.length - 1; i++) {
        next.push(lastLine[i] + lastLine[i + 1])
    }
    next.push(lastLine[lastLine.length - 1])
    return next
};
