/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function findTheDifference(s, t) {
    let sSum = 0
    let i
    for (i = 0; i < s.length; i++) {
        sSum += t.charCodeAt(i)
        sSum -= s.charCodeAt(i)
    }
    return String.fromCharCode(sSum + t.charCodeAt(i))
}
