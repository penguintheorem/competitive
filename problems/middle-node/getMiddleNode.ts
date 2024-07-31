export class LinkedList<T> {
  value: T
  next: LinkedList<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

const getListLength = <T>(headNode: LinkedList<T>): number => {
  if (!headNode.next) {
    return 1
  }

  return 1 + getListLength(headNode.next)
}

/**
 * Where |L| = N is the length of the list, the time complexity of this function is O(N), calculated as follows:
 * - The function calls getListLength, which has a time complexity of O(N).
 * - The function then iterates over the list to find the middle node, which has a time complexity of O(N/2).
 * Therefore, the overall time complexity of this function is O(N) + O(N/2) = O(N).
 *
 * @param headNode
 * @returns
 */
export const getMiddleNode = <T>(
  headNode: LinkedList<T>
): LinkedList<T> | null => {
  if (!headNode.next) {
    return headNode
  }

  const listLength = getListLength(headNode)
  const middleIndex = Math.floor(listLength / 2)
  let currentNode: LinkedList<T> | null = headNode
  for (let i = 0; i < middleIndex; i++) {
    currentNode = currentNode ? currentNode.next : null
  }

  return currentNode
}
