/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidLine(part) {
    const mark = {}
    for (const el of part) {
        if (el === '.') {
            continue
        }
        if (mark[el]) {
            return false
        }
        mark[el] = true
    }
    return true
}

function isValidSquare(board, x, y) {
    const mark = {}
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let el = board[x + i][y + j]
            if (el === '.') {
                continue
            }
            if (mark[el]) {
                return false
            }
            mark[el] = true
        }
    }
    return true
}

var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let part = board[i]
        if (!isValidLine(part)) {
            return false
        }
        part = []
        for (let j = 0; j < 9; j++) {
            part.push(board[j][i])
        }
        if (!isValidLine(part)) {
            return false
        }
    }
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!isValidSquare(board, i, j)) {
                return false
            }
        }
    }
    return true
};

// 不知道这个题目想考察什么