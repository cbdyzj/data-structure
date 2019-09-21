/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (!s) {
        return 0
    }
    let len = 1
    const tmp = [s[0]]
    for (let i = 1; i < s.length; i++) {
        while (tmp.includes(s[i])) {
            tmp.shift()
        }
        tmp.push(s[i])
        if (tmp.length > len) {
            len = tmp.length
        }
    }
    return len
}
