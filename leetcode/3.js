/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) {
        return 0
    }
    var len = 1
    var tmp = [s[0]]
    for (var i = 1; i < s.length; i++) {
        while (tmp.includes(s[i])) {
            tmp.shift()
        }
        tmp.push(s[i])
        if (tmp.length > len) {
            len = tmp.length
        }
    }
    return len
};