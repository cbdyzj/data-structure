/**
 * 四则运算
 *
 * @param {string} s
 */
function eval4(s) {
    const expr = []
    const opStack = []
    let numStr = ''
    for (let i = 0; i < s.length; i++) {
        const ch = s[i]
        // +, -
        if (['+', '-'].includes(ch)) {
            if (numStr) {
                expr.push(numStr)
                numStr = ''
            }
            let top = opStack.pop()
            while (['*', '/'].includes(top)) {
                expr.push(top)
                top = opStack.pop()
            }
            if (top) {
                opStack.push(top)
            }
            opStack.push(ch)
        }
        // *, /
        else if (['*', '/'].includes(ch)) {
            if (numStr) {
                expr.push(numStr)
                numStr = ''
            }
            opStack.push(ch)
        }
        // number
        else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(ch)) {
            numStr = numStr + ch
        } else {
            if (numStr) {
                expr.push(numStr)
                numStr = ''
            }
        }
    }
    if (numStr) {
        expr.push(numStr)
    }
    let top = opStack.pop()
    while (top) {
        expr.push(top)
        top = opStack.pop()
    }
    const calcStack = []
    for (let it of expr) {
        if (['+', '-', '*', '/'].includes(it)) {
            const left = Number(calcStack.pop())
            const right = Number(calcStack.pop())
            switch (it) {
                case '+': {
                    calcStack.push(left + right)
                    break
                }
                case '-': {
                    calcStack.push(left - right)
                    break
                }
                case '*': {
                    calcStack.push(left * right)
                    break
                }
                case '/': {
                    calcStack.push(left / right)
                    break
                }
            }
        } else {
            calcStack.push(it)
        }
    }
    return calcStack.pop()
}


