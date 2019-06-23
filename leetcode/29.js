/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let sign = 1
    if (dividend < 0 && divisor > 0
        || dividend > 0 && divisor < 0) {
        sign = -1
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let count = 0

    const tb = []
    let time = 1
    tb.push({ divisor, time })
    while (dividend >= divisor) {
        const top = tb.length - 1
        if (dividend >= tb[top].divisor) {
            dividend -= tb[top].divisor
            count += tb[top].time
            if (dividend > tb[top].divisor + tb[top].divisor) {
                tb.push({
                    divisor: tb[top].divisor + tb[top].divisor,
                    time: tb[top].time + tb[top].time
                })
            }
            continue
        } else {
            tb.pop()
        }
    }
    const result = sign > 0 ? count : 0 - count
    if (result < -2147483648 || result > 2147483647) {
        return 2147483647
    }
    return result
};
