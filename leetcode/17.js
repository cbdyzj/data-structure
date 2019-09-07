/**
 * @param {string} digits
 * @return {string[]}
 */
var phoneTable = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

var letterCombinations = function (digits) {
    var resultSet = []
    for (var i = 0; i < digits.length; i++) {
        var dgtChs = phoneTable[digits[i]]
        if (!resultSet.length) {
            dgtChs.forEach(e => resultSet.push(e))
        } else {
            var newResultSet = []
            dgtChs.forEach(ch => newResultSet.push(...resultSet.map(e => e + ch)))
            resultSet = newResultSet
        }
    }
    return resultSet
}
