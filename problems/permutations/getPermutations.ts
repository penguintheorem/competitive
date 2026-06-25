const add = <T>(array: T[], newItem: T, index: number): T[] => {
  const firstHalf = array.slice(0, index)
  const secondHalf = array.slice(index, array.length)

  return [...firstHalf, newItem, ...secondHalf]
}

const getLongerPermutation = (
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
 * P = number of permutations = N!
 *
 * time = O(N! * N^2)
 * space = O(N * N!)
 */
export const getPermutations = (array: number[]): number[][] => {
  if (!array?.length) {
    return []
  }
  if (array.length === 1) {
    return [[array[0]]]
  }

  // how much array.slice costs?
  const partialPermutations = getPermutations(array.slice(0, array.length - 1))
  const permutations: number[][] = []
  // O(p)
  for (const partialPermutation of partialPermutations) {
    // O(k^2)
    permutations.push(
      ...getLongerPermutation(partialPermutation, array[array.length - 1])
    )
  }

  return permutations
}
