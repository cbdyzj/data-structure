/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    if (numRows === 1) {
        return s
    }
    const lineCount = (numRows - 1) * 2
    let lines = []
    for (let i = 0; i < s.length; i += lineCount) {
        lines.push(s.substring(i, i + lineCount))
    }
    const converted = []
    let restCount = numRows - 2

    lines = lines.map(line => {
        converted.push(line[0])
        return line.substring(1, line.length)
    })
    const mid = (numRows - 1) * 2 / 2 - 1
    while (restCount > 0) {
        lines.forEach(line => {
            if (line[mid - restCount]) {
                converted.push(line[mid - restCount])
            }
            if (line[mid + restCount]) {
                converted.push(line[mid + restCount])
            }
        })
        restCount--
    }
    lines.forEach(line => {
        if (line[mid]) {
            converted.push(line[mid])
        }
    })
    return converted.join('')
}
