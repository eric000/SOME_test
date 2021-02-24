/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length
    const n = board[0].length
    const used = Create2DArray(m, n)

    const canFind = (row, col, i) => {
        if (i === word.length) {
            return true
        }

        if (row < 0 || row >= m || col >= n || col < 0) {
            return false
        }

        if (used[row][col] || board[row][col] !== word[i]) {
            return false
        }
        used[row][col] = true

        const canFindRest = canFind(row + 1, col, i + 1) || canFind(row - 1, col, i + 1) || canFind(row, col - 1, i + 1) || canFind(row, col + 1, i + 1)
        if (canFindRest) return true

        used[row][col] = false
        return false

    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && canFind(i, j, 0)) {
                return true
            }
        }
    }

    return false

};

function Create2DArray(rows, columns) {
    var x = new Array(rows);
    for (var i = 0; i < rows; i++) {
        x[i] = new Array(columns);
    }
    return x;
}