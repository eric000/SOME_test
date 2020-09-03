/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let row = Array(9).fill(undefined).map(_ => new Set())
  let col = Array(9).fill(undefined).map(_ => new Set())
  let box = Array(9).fill(undefined).map(_ => new Set())

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value = board[i][j]

      if (value === '.') continue

      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

      if (row[i].has(value) || col[j].has(value) || box[boxIndex].has(value)) return false

      row[i].add(value)
      col[j].add(value)
      box[boxIndex].add(value)
    }
  }
  return true
};