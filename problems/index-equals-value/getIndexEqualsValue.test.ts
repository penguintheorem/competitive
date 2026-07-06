import { describe, expect, it } from 'vitest'
import { getIndexEqualsValue } from './getIndexEqualsValue'

describe('getIndexEqualsValue', () => {
  it('Should exists the function getIndexEqualsValue', () => {
    expect(getIndexEqualsValue).toBeDefined()
  })

  it('Returns -1 (it does not exist an index equals to a value within the array)', () => {
    const array = [-8, 0, 12, 5]

    const result = getIndexEqualsValue(array)

    expect(result).toBe(-1)
  })

  it('Returns 0 (the first index is equals to the value)', () => {
    const array = [0, 3, 4, 5]

    const result = getIndexEqualsValue(array)

    expect(result).toBe(0)
  })

  it('Returns 2 (the third index is equals to the value)', () => {
    const array = [-8, 0, 2, 5]

    const result = getIndexEqualsValue(array)

    expect(result).toBe(2)
  })

  it('Returns 5 (the fifth index is equals to the value)', () => {
    const array = [-8, 0, -112, 13, 99, 5]

    const result = getIndexEqualsValue(array)

    expect(result).toBe(5)
  })
})
