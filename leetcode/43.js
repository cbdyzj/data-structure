/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
    const len = Math.min(num1.length, num2.length)
    let sum = ''
    let c = 0
    let i = 0
    for (; i < len; i++) {
        const n1 = Number(num1[num1.length - 1 - i])
        const n2 = Number(num2[num2.length - 1 - i])
        const s = n1 + n2 + c
        if (s > 9) {
            c = 1
            sum = String(s % 10) + sum
        } else {
            c = 0
            sum = String(s) + sum
        }
    }
    let rest = num1
    if (len < num2.length) {
        rest = num2
    }
    for (; i < rest.length; i++) {
        const n = Number(rest[rest.length - 1 - i])
        const s = n + c
        sum = String(s % 10) + sum
        if (s > 9) {
            c = 1
        } else {
            c = 0
        }
    }
    if (c) {
        sum = c + sum
    }
    return sum
}

function multiplyOne(num, n) {
    if (n === '0') {
        return '0'
    }
    n = Number(n)
    let c = 0
    let product = ''
    for (let i = 0; i < num.length; i++) {
        const nn = Number(num[num.length - 1 - i])
        const p = nn * n + c
        product = String(p % 10) + product
        if (p > 9) {
            c = Math.trunc(p / 10)
        } else (
            c = 0
        )
    }
    if (c) {
        product = String(c) + product
    }
    return product
}


const multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0'
    }
    let result = '0'
    for (let i = 0; i < num1.length; i++) {
        const n1 = Number(num1[num1.length - 1 - i])
        result = add(result, multiplyOne(num2, n1) + '0'.repeat(i))
    }
    return result
}
