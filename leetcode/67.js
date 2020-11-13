function add(a, b, c) {
    const sum = Number(a) + Number(b) + Number(c)
    switch (sum) {
        case 0: return ['0', '0']
        case 1: return ['0', '1']
        case 2: return ['1', '0']
        case 3: return ['1', '1']
    }
}

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
    const len = Math.min(a.length, b.length)
    let carry = '0'
    let result = ''
    let i = 0
    for (; i < len; i++) {
        const once = add(a[a.length - 1 - i], b[b.length - 1 - i], carry)
        carry = once[0]
        result = once[1] + result
    }
    let rest = a
    if (len === a.length) {
        rest = b
    }
    for (; i < rest.length; i++) {
        const once = add(rest[rest.length - 1 - i], carry, '0')
        carry = once[0]
        result = once[1] + result
    }
    if (carry === '1') {
        result = carry + result
    }
    return result
}
