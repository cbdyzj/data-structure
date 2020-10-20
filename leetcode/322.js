/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    if (amount === 0) {
        return 0
    }

    const cache = {}

    function getCombination(amount) {
        if (!cache[amount]) {
            cache[amount] = getCombination0(amount)
        }
        return cache[amount]
    }

    function getCombination0(amount) {
        const next = []
        for (let coin of coins) {
            if (coin === amount) {
                return 1
            } else if (coin < amount) {
                next.push(coin)
            }
        }
        if (!next.length) {
            return Number.MAX_SAFE_INTEGER
        }
        return 1 + Math.min(...next.map(it => getCombination(amount - it)))
    }

    const combination = getCombination(amount)
    if (combination >= Number.MAX_SAFE_INTEGER) {
        return -1
    }
    return combination
}
