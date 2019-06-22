/**
 * @param {number} num
 * @return {string}
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

var chs = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

function cutNumber(ch, num) {
    var share = tb[ch]
    var count = 0
    var rest = num
    while (rest >= share) {
        rest -= share
        count++
    }
    return { count, rest }
}

var intToRoman = function (num) {
    var roman = []
    var rest = num
    for (var i = 0; i < chs.length; i++) {
        var ch = chs[i]
        var result = cutNumber(ch, rest)
        rest = result.rest
        roman.push(ch.repeat(result.count))
    }
    return roman.join('')
};
