/**
 * @param {string} s
 * @return {number}
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
const romanToInt = function (s) {
    let intNum = 0
    for (let i = 0; i < s.length;) {
        const ch = s.substring(i, i + 2)
        if (tb[ch]) {
            intNum += tb[ch]
            i += 2
        } else if (tb[s[i]]) {
            intNum += tb[s[i]]
            i++
        }
    }
    return intNum
}
