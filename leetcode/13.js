/**
 * @param {string} s
 * @return {number}
 */
var tb = {
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
var romanToInt = function (s) {
    var intNum = 0
    for (var i = 0; i < s.length;) {
        var ch = s.substring(i, i + 2)
        if (tb[ch]) {
            intNum += tb[ch]
            i += 2
        } else if (tb[s[i]]) {
            intNum += tb[s[i]]
            i++
        }
    }
    return intNum
};
