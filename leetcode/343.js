/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
    const cache = {}

    function search(n) {
        if (!cache[n]) {
            cache[n] = search0(n)
        }
        return cache[n]
    }

    function search0(n) {
        if (n === 2) {
            return 1
        }
        if (n === 3) {
            return 2
        }
        const maybe = []
        for (let i = 2; i < n - 1; i++) {
            const res1 = i * (n - i)
            const res2 = search(i) * (n - i)
            maybe.push(res1)
            maybe.push(res2)
        }
        return Math.max(...maybe)
    }

    return search(n)
}
