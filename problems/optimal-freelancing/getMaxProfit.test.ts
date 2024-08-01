import { describe, expect, it } from 'vitest'
import { getMaxProfit, Job } from './getMaxProfit'

describe('getMaxProfit', () => {
  it('Should exist the function getMaxProfit', () => {
    expect(getMaxProfit).toBeDefined()
  })

  it('Returns 0 when there are no available jobs', () => {
    expect(getMaxProfit([])).toBe(0)
  })

  it('Returns the max profit of 5 if there is only one job with 5 profit', () => {
    expect(getMaxProfit([{ numberOfDaysLeft: 1, profit: 5 }])).toBe(5)
  })

  it('Returns the max profit of 3', () => {
    const jobs: Job[] = [
      {
        numberOfDaysLeft: 1,
        profit: 1,
      },
      {
        numberOfDaysLeft: 2,
        profit: 1,
      },
      {
        numberOfDaysLeft: 2,
        profit: 2,
      },
    ]

    expect(getMaxProfit(jobs)).toBe(3)
  })

  it('Returns the max profit of 16', () => {
    const jobs: Job[] = [
      {
        numberOfDaysLeft: 2,
        profit: 1,
      },
      {
        numberOfDaysLeft: 1,
        profit: 4,
      },
      {
        numberOfDaysLeft: 3,
        profit: 2,
      },
      {
        numberOfDaysLeft: 1,
        profit: 3,
      },
      {
        numberOfDaysLeft: 4,
        profit: 3,
      },
      {
        numberOfDaysLeft: 4,
        profit: 2,
      },
      {
        numberOfDaysLeft: 4,
        profit: 1,
      },
      {
        numberOfDaysLeft: 5,
        profit: 4,
      },
      {
        numberOfDaysLeft: 8,
        profit: 1,
      },
    ]

    expect(getMaxProfit(jobs)).toBe(16)
  })
})
