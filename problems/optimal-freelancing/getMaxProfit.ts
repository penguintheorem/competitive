export type Job = {
  numberOfDaysLeft: number
  profit: number
}

const getArraySum = (arr: number[]): number => {
  let sum = 0

  for (const num of arr) {
    sum += num
  }

  return sum
}

const getValidNumberOfDaysLeft = (numberOfDaysLeft: number): number => {
  const maxNumberOfDays = 7

  if (numberOfDaysLeft <= 7) {
    return numberOfDaysLeft
  }

  return maxNumberOfDays
}

/**
 * Where |jobs| = N is the number of jobs
 * Time complexity: O(N * log(N))
 * Space complexity: O(N)
 *
 * As:
 * - Cloning the jobs array takes O(N) time and space
 * - Sorting the jobs array takes O(N * log(N)) time
 * - Iterating over the jobs array takes O(N) time
 * - Iterating over the schedule array takes O(7) time
 * - Getting the sum of the schedule array takes O(7) time
 *
 * - The time complexity is O(N) + O(N * log(N)) + O(N) * O(7) = O(N * log(N))
 * - The space complexity is O(N) because of the clonedJobs array
 *
 * @param jobs
 * @returns
 */
export const getMaxProfit = (jobs: Job[]): number => {
  if (!jobs.length) {
    return 0
  }

  const clonedJobs = [...jobs]
  const jobsSortedByProfit = clonedJobs.sort((a, b) => b.profit - a.profit)
  const schedule = new Array(7).fill(0)

  for (const job of jobsSortedByProfit) {
    for (
      let i = getValidNumberOfDaysLeft(job.numberOfDaysLeft) - 1;
      i >= 0;
      i--
    ) {
      if (schedule[i] === 0) {
        schedule[i] = job.profit
        break
      }
    }
  }

  return getArraySum(schedule)
}
