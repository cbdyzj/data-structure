/**
 * @param {string} s
 * @return {boolean}
 */

var brackets = {
    ')': '(',
    ']': '[',
    '}': '{'
}
var isValid = function (s) {
    const stack = []
    for (const ch of s) {
        switch (ch) {
            case '(':
            case '[':
            case '{':
                stack.push(ch)
                break
            case ')':
            case ']':
            case '}':
                if (stack.pop() !== brackets[ch]) {
                    return false
                }
                break
        }
    }
    return stack.length === 0
}
