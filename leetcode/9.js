/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    var na = []
    while (x > 0) {
        na.push(x % 10)
        x = Math.trunc(x / 10)
    }
    var i = 0
    var j = na.length - 1
    while (i < j) {
        if (na[i] !== na[j]) {
            return false
        }
        i++
        j--
    }
    return true
}
