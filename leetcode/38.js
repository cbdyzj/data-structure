/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return '1'
    }
    const last = countAndSay(n - 1)
    let say = ''
    let p = last[0]
    let count = 0
    for (let i = 0; i < last.length; i++) {
        if (p === last[i]) {
            count++
        } else {
            say += count
            say += p
            p = last[i]
            count = 1
        }
    }
    say += count
    say += p
    return say
};

// 递归