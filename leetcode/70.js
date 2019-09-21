/**
 * @param {number} n
 * @return {number}
 */
const cache = {}
const climbStairs = function (n) {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    if (!cache[n]) {
        cache[n] = climbStairs(n - 1) + climbStairs(n - 2)
    }
    return cache[n]
}

// 背景：斐波那契数列
// 到达n阶的方法有
// 1. 先到达n-1阶，再上1阶
// 2. 先到达n-2阶，再上2阶
