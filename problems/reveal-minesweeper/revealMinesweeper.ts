const isExistingCell = (
  board: string[][],
  row: number,
  column: number
): boolean =>
  row >= 0 && row < board.length && column >= 0 && column < board[0].length

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

export function revealMinesweeper(
  board: string[][],
  row: number,
  column: number
) {
  console.log(`START [ROW=${row};COLUMN=${column}]`)
  if (!board.length || !board[0]?.length) {
    console.log(`EMPTY`)
    return board
  }

  // you try to press on an unexisting cell
  if (!isExistingCell(board, row, column)) {
    console.log(`UNEXISTING CELL`)
    return board
  }

  if (board[row][column] === 'M') {
    console.log(`MINE FOUND`)
    board[row][column] = 'X'
    return board
  }

  // I assume board[row][column] === 'H'
  const numberOfMines = getNumberOfMinesAroundCell(board, row, column)
  console.log(`number of mines=${numberOfMines}`)
  board[row][column] = `${numberOfMines}`

  if (numberOfMines === 0) {
    console.log(`look around`)
    revealMinesweeper(board, row - 1, column - 1)
    revealMinesweeper(board, row - 1, column)
    revealMinesweeper(board, row - 1, column + 1)
    revealMinesweeper(board, row, column - 1)
    revealMinesweeper(board, row, column + 1)
    revealMinesweeper(board, row + 1, column - 1)
    revealMinesweeper(board, row + 1, column)
    revealMinesweeper(board, row + 1, column + 1)
  }

  console.log(`END [ROW=${row};COLUMN=${column}]`)
  return board
}
