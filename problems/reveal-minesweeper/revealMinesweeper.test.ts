import { describe, expect, it } from 'vitest'
import { revealMinesweeper } from './revealMinesweeper'

describe('revealMinesweeper', () => {
  it('Returns the input board for empty arrays', () => {
    expect(revealMinesweeper([], 0, 0)).toStrictEqual([])
  })

  it('Returns the input board for empty columns', () => {
    expect(revealMinesweeper([[]], 0, 0)).toStrictEqual([[]])
  })

  it('Returns the input board when navigating to unexisting rows', () => {
    expect(
      revealMinesweeper(
        [
          ['H', 'H', 'H'],
          ['H', 'H', 'H'],
          ['M', 'M', 'M'],
        ],
        -5,
        0
      )
    ).toStrictEqual([
      ['H', 'H', 'H'],
      ['H', 'H', 'H'],
      ['M', 'M', 'M'],
    ])
  })

  it('Returns the input board when navigating to unexisting columns', () => {
    expect(
      revealMinesweeper(
        [
          ['H', 'H', 'H'],
          ['H', 'H', 'H'],
          ['M', 'M', 'M'],
        ],
        0,
        9
      )
    ).toStrictEqual([
      ['H', 'H', 'H'],
      ['H', 'H', 'H'],
      ['M', 'M', 'M'],
    ])
  })

  it('Uncovers hidden cells #1', () => {
    expect(
      revealMinesweeper(
        [
          ['M', 'M'],
          ['H', 'H'],
          ['H', 'H'],
        ],
        2,
        0
      )
    ).toStrictEqual([
      ['M', 'M'],
      ['2', '2'],
      ['0', '0'],
    ])
  })
})
