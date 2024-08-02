import { describe, it, expect } from 'vitest'
import { areBracketsBalanced } from './areBracketsBalanced'

describe('areBracketsBalanced', () => {
  it('Should exist the function areBracketsBalanced', () => {
    expect(areBracketsBalanced).toBeDefined()
  })

  it('Returns true for an empty string', () => {
    expect(areBracketsBalanced('')).toBe(true)
  })

  it('Returns true for a string with no brackets', () => {
    expect(areBracketsBalanced('hello')).toBe(true)
  })

  it('Returns false for a string with one opening bracket', () => {
    expect(areBracketsBalanced('(')).toBe(false)
  })

  it('Returns false for a string with one closing bracket', () => {
    expect(areBracketsBalanced(')')).toBe(false)
  })

  it('Returns true for a string with a correct number of matching enclosing and closing brackets (1)', () => {
    expect(areBracketsBalanced('()')).toBe(true)
  })

  it('Returns true for a string with a correct number of matching enclosing and closing brackets (2)', () => {
    expect(areBracketsBalanced('()[]{}')).toBe(true)
  })

  it('Returns true for a string with a correct number of matching enclosing and closing brackets (3)', () => {
    expect(areBracketsBalanced('{[()()]}')).toBe(true)
  })

  it('Returns true for a string with a correct number of matching enclosing and closing brackets (4)', () => {
    expect(areBracketsBalanced('([])(){}(())()()')).toBe(true)
  })

  it('Returns false for a string with a wrong number of matching enclosing and closing brackets (1)', () => {
    expect(areBracketsBalanced('([])(){)}(())()()')).toBe(false)
  })

  it('Returns false for a string with a wrong number of matching enclosing and closing brackets (2)', () => {
    expect(areBracketsBalanced('{([])(){}{}(([))()()}')).toBe(false)
  })

  it('Optional characters that are not brackets are just ignored', () => {
    expect(areBracketsBalanced('([])()ab{}(d())e()()')).toBe(true)
  })
})
