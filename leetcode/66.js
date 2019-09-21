/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let carry = 1
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry
        if (digits[i] > 9) {
            digits[i] = digits[i] % 10
        } else {
            return digits
        }
    }
    if (carry) {
        return [1, ...digits]
    }
}
