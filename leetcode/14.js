/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return ''
    }
    const cur = strs.shift()
    let cIndex = cur.length - 1
    while (strs.length) {
        const pStr = strs.shift()
        for (let i = 0; i < cIndex + 1; i++) {
            if (cur[i] !== pStr[i]) {
                cIndex = Math.min(i - 1, cIndex)
                break
            }
        }
    }
    if (cIndex < 0) {
        return ''
    }
    return cur.substring(0, cIndex + 1)
}
