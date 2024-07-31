import { describe, expect, it } from 'vitest'
import { getMiddleNode, LinkedList } from './getMiddleNode'

const buildList = (length: number) => {
  const headNode: LinkedList<number> = {
    value: 1,
    next: null,
  }
  let currentNode = headNode
  for (let i = 2; i <= length; i++) {
    currentNode.next = {
      value: i,
      next: null,
    }
    currentNode = currentNode.next
  }
  return headNode
}

describe('getMiddleNode', () => {
  it('Should exists the function getMiddleNode', () => {
    expect(getMiddleNode).toBeDefined()
  })

  it('Returns the head of the list when the list has length 1', () => {
    const headNode = {
      value: 1,
      next: null,
    }
    expect(getMiddleNode(headNode)).toBe(headNode)
  })

  it('Returns the (second) middle node when the list has length 2', () => {
    const headNode = {
      value: 1,
      next: {
        value: 2,
        next: null,
      },
    }
    expect(getMiddleNode(headNode)).toBe(headNode.next)
  })

  it('Returns the middle node (2nd) when the list has length 3', () => {
    const headNode = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    }
    expect(getMiddleNode(headNode)).toBe(headNode.next)
  })

  it('Returns the correct middle node when the list has length 10', () => {
    const list = buildList(10)

    expect(getMiddleNode(list)?.value).toBe(6)
  })

  it('Returns the correct middle node when the list has length 11', () => {
    const list = buildList(11)

    expect(getMiddleNode(list)?.value).toBe(6)
  })
})
