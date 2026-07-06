const add = <T>(array: T[], newItem: T, index: number): T[] => {
  const firstHalf = array.slice(0, index)
  const secondHalf = array.slice(index, array.length)

  return [...firstHalf, newItem, ...secondHalf]
}

const generateLongerPermutation = (
  permutation: number[],
  newNumber: number
): number[][] => {
  const targetLength = permutation.length + 1
  const fullPermutations: number[][] = []
  for (let i = 0; i < targetLength; i++) {
    const newPermutation = add(permutation, newNumber, i)
    fullPermutations.push(newPermutation)
  }

  return fullPermutations
}

/**
 * N: array length
 *
 * time = O(N * N!) = O((N-1)! * N^2)
 * space = O(N * N!) = O((N-1)! * N^2), total number of items you collect in permutations array
 */
export const getPermutations = (array: number[]): number[][] => {
  if (!array?.length) {
    return []
  }
  if (array.length === 1) {
    return [[array[0]]]
  }

  const partialPermutations = getPermutations(array.slice(0, array.length - 1))
  const permutations: number[][] = []
  for (const partialPermutation of partialPermutations) {
    permutations.push(
      ...generateLongerPermutation(partialPermutation, array[array.length - 1])
    )
  }

  return permutations
}
