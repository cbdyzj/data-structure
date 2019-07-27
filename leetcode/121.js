/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let result = 0
    let i, j
    for (i = 0; i < prices.length - 1;) {
        for (j = i + 1; j < prices.length;) {
            const diff = prices[j] - prices[i]
            if (diff > result) {
                result = diff
            }
            if (j + 1 < prices.length && prices[j + 1] > prices[j]) {
                while (j + 1 < prices.length && prices[j + 1] > prices[j]) {
                    j++
                }
            } else {
                j++
            }

        }
        if (i + 1 < j && prices[i] > prices[i + 1]) {
            while (i + 1 < j && prices[i] > prices[i + 1]) {
                i++
            }
        } else {
            i++
        }
    }
    return result
};