function isPalindrome(s, i, j) {
    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

function min(a, b) {
    return a > b ? b : a
}

var longestPalindrome = function (s) {
    if (isPalindrome(s, 0, s.length - 1)) {
        return s
    }
    var lp = ''
    for (var i = 0; i < s.length * 2 - 1; i++) {
        if (i % 2 === 0) {
            // odd
            let tm = min(i / 2, s.length - i / 2 - 1)
            for (let k = tm; k >= 0; k--) {
                if (isPalindrome(s, i / 2 - k, i / 2 + k)) {
                    if (k * 2 + 1 > lp.length) {
                        lp = s.substring(i / 2 - k, i / 2 + k + 1)
                        break
                    }
                }
            }
        } else {
            // even
            let tm = min((i + 1) / 2, s.length - (i + 1) / 2)
            for (let k = tm; k >= 0; k--) {
                if (isPalindrome(s, (i - 1) / 2 - k, (i + 1) / 2 + k)) {
                    if ((k + 1) * 2 > lp.length) {
                        lp = s.substring((i - 1) / 2 - k, (i + 1) / 2 + k + 1)
                        break
                    }
                }
            }
        }
    }
    return lp
};
