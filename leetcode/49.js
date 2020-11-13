// ["eat", "tea", "tan", "ate", "nat", "bat"]
// =>
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const groups = {}

    function getSortedStr(s) {
        return s.split('').sort().join('')
    }

    for (let str of strs) {
        const goodStr = getSortedStr(str)
        if (!groups[goodStr]) {
            groups[goodStr] = []
        }
        groups[goodStr].push(str)
    }
    return Object.values(groups)
}

/**
 * 大佬思路：用质数表示26个字母，把字符串的各个字母相乘，这样可保证字母异位词的乘积必定是相等的
 */
function getPrimeNumber(n) {
    function isPrime(num) {
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }

    const primeNumbers = [2]

    let num = 3;
    while (primeNumbers.length < n) {
        if (isPrime(num)) {
            primeNumbers.push(num)
        }
        num += 2
    }
    return primeNumbers
}
