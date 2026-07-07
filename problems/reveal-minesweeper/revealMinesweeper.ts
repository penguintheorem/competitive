const isExistingCell = (
  board: string[][],
  row: number,
  column: number
): boolean =>
  row >= 0 && row < board.length && column >= 0 && column < board[0].length

// O(1)
const getNumberOfMinesAroundCell = (
  board: string[][],
  row: number,
  column: number
): number => {
  let numberOfMines = 0
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = column - 1; j <= column + 1; j++) {
      if (!isExistingCell(board, i, j)) {
        continue
      }

      if (i === row && j === column) {
        continue
      }

      if (board[i][j] === 'M') {
        numberOfMines += 1
      }
    }
  }

  return numberOfMines
}

/**
 *
 * |board| = N x M
 * Time complexity: O(N x M)
 * Space complexity: O(N x M) (Recursion depth)
 *
 *
 * @param board
 * @param row
 * @param column
 * @returns
 */
export function revealMinesweeper(
  board: string[][],
  row: number,
  column: number
) {
  if (!board.length || !board[0]?.length) {
    return board
  }
  // you try to press on an unexisting cell
  if (!isExistingCell(board, row, column)) {
    return board
  }
  if (board[row][column] === 'M') {
    board[row][column] = 'X'
    return board
  }

  const selectedCellAsNumber = Number(board[row][column])
  if (selectedCellAsNumber >= 0 && selectedCellAsNumber <= 8) {
    return board
  }

  // I assume board[row][column] === 'H'
  const numberOfMines = getNumberOfMinesAroundCell(board, row, column)
  board[row][column] = `${numberOfMines}`

  if (numberOfMines === 0) {
    revealMinesweeper(board, row - 1, column - 1)
    revealMinesweeper(board, row - 1, column)
    revealMinesweeper(board, row - 1, column + 1)
    revealMinesweeper(board, row, column - 1)
    revealMinesweeper(board, row, column + 1)
    revealMinesweeper(board, row + 1, column - 1)
    revealMinesweeper(board, row + 1, column)
    revealMinesweeper(board, row + 1, column + 1)
  }

  return board
}
