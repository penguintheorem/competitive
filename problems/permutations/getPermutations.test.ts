import { describe, expect, it } from 'vitest'
import { getPermutations } from './getPermutations'

describe('getPermutations', () => {
  it('Returns an empty array for an empty array', () => {
    expect(getPermutations([])).toStrictEqual([])
  })

  it('Returns an array containing a single number array', () => {
    expect(getPermutations([1])).toStrictEqual([[1]])
  })

  it('Returns 2 permutations', () => {
    const permutations = getPermutations([1, 2])
    expect(permutations).toStrictEqual([
      [2, 1],
      [1, 2],
    ])
  })
})
