/**
 * @param {number} x
 * @return {number}
 */
function isOverflow(x) {
    return x > 2147483646 || x < -2147483647
}

var reverse = function (x) {
    if (isOverflow(x)) {
        return 0
    }
    var ca = String(x).split('')
    var i = ca[0] === '-' ? 1 : 0
    var j = ca.length - 1
    for (; i < j; i++ , j--) {
        var tmp = ca[i]
        ca[i] = ca[j]
        ca[j] = tmp
    }
    var reversed = Number(ca.join(''))
    return isOverflow(reversed) ? 0 : reversed
};
