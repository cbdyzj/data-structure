/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return ''
    }
    var cur = strs.shift()
    var cIndex = cur.length - 1
    while (strs.length) {
        var pStr = strs.shift()
        for (var i = 0; i < cIndex + 1; i++) {
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
};