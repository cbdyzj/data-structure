/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if (needle === '') {
        return 0
    }
    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < needle.length && i + j < haystack.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                break
            } else if (j === needle.length - 1) {
                return i
            }
        }
    }
    return -1
}

// 还可以用KMP
