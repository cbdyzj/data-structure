/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let x0 = 1
    let x1 = 0.5 * (x0 + x / x0)
    while (Math.trunc(x0) !== Math.trunc(x1)) {
        x0 = x1
        x1 = 0.5 * (x0 + x / x0)
    }
    return Math.trunc(x1)
};


// 牛顿法