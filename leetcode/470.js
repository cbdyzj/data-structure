const map = (function () {
    const arr = []
    for (let i = 1; i < 8; i++) {
        for (let j = 1; j < 8; j++) {
            arr.push(`${i}${j}`)
        }
    }
    const m = {}
    for (let i = 0; i < 40; i++) {
        m[arr[i]] = (i % 10) + 1
    }
    return m
})()

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
function rand10() {
    while (true) {
        // noinspection JSUnresolvedFunction
        const [i, j] = [rand7(), rand7()]
        const r10 = map[`${i}${j}`]
        if (r10) {
            return r10
        }
    }
}
