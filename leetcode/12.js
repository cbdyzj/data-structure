/**
 * @param {number} num
 * @return {string}
 */
const tb = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
}

const chs = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

function cutNumber(ch, num) {
    const share = tb[ch]
    let count = 0
    let rest = num
    while (rest >= share) {
        rest -= share
        count++
    }
    return { count, rest }
}

const intToRoman = function (num) {
    const roman = []
    let rest = num
    for (let i = 0; i < chs.length; i++) {
        const ch = chs[i]
        const result = cutNumber(ch, rest)
        rest = result.rest
        roman.push(ch.repeat(result.count))
    }
    return roman.join('')
}
