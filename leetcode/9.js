/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    const na = []
    while (x > 0) {
        na.push(x % 10)
        x = Math.trunc(x / 10)
    }
    let i = 0
    let j = na.length - 1
    while (i < j) {
        if (na[i] !== na[j]) {
            return false
        }
        i++
        j--
    }
    return true
}
