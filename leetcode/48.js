function doRotate(matrix, i, j, size) {
    const up = matrix[i][j]
    const right = matrix[j][size - 1 - i]
    const down = matrix[size - 1 - i][size - 1 - j]
    const left = matrix[size - 1 - j][i]
    matrix[j][size - 1 - i] = up
    matrix[size - 1 - i][size - 1 - j] = right
    matrix[size - 1 - j][i] = down
    matrix[i][j] = left
}


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    if (!matrix.length) {
        return
    }
    const size = matrix.length
    const half = Math.trunc(size / 2)
    for (let i = 0; i < half; i++) {
        for (let j = i; j < size - i - 1; j++) {
            doRotate(matrix, i, j, size)
        }
    }
}
