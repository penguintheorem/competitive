/**
 * N: length of the input array
 * Time complexity: O(N), we need to iterate up to N items
 * Space complexity: O(1), we don't need more than a costant additional storage
 *
 * @param array
 * @returns
 */
export const getIndexEqualsValue = (array: number[]): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) {
      return i
    }
  }

  return -1
}
