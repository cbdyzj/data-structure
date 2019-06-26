/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let sum = a ^ b
    let carry = (a & b) << 1
    if (carry) {
        return getSum(sum, carry)
    }
    return sum
};

// 考察位运算