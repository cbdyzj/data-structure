/**
 * @param {string[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    const markTable = []
    const getMark = (i, j) => markTable[`${i}-${j}`]
    const setMark = (i, j) => markTable[`${i}-${j}`] = true

    function dfs(i, j) {
        if (getMark(i, j)) {
            return
        }
        if (grid[i][j] === '0') {
            return
        }
        setMark(i, j)
        if (i > 0) {
            dfs(i - 1, j)
        }
        if (j > 0) {
            dfs(i, j - 1)
        }
        if (i < grid.length - 1) {
            dfs(i + 1, j)
        }
        if (j < grid[i].length - 1) {
            dfs(i, j + 1)
        }
    }

    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (getMark(i, j)) {
                continue
            }
            if (grid[i][j] === '1') {
                dfs(i, j)
                count++
            } else {
                setMark(i, j)
            }
        }
    }
    return count
}
