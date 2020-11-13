function isOverflow(x) {
    return x > 2147483646 || x < -2147483647
}

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    if (isOverflow(x)) {
        return 0
    }
    const ca = String(x).split('')
    let i = ca[0] === '-' ? 1 : 0
    let j = ca.length - 1
    for (; i < j; i++ , j--) {
        const tmp = ca[i]
        ca[i] = ca[j]
        ca[j] = tmp
    }
    const reversed = Number(ca.join(''))
    return isOverflow(reversed) ? 0 : reversed
}
