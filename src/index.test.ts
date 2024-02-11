import { memoize } from "./index";

describe('memoize function', () => {
  it('should return the result faster on subsequent calls', () => {
    const slowFunctionMock = jest.fn((num: number) => {
      let result = 0
      for (let i = 0; i <= num; i++) {
        result = i
      }
      return result
    })

    const fastFunction: Function = memoize(slowFunctionMock)
    console.time('firstCall')
    fastFunction(2000000000)
    const endTime = Number(console.timeEnd('firstCall'))

    console.time('secondCall')
    fastFunction(2000000000)
    const endTime1 = Number(console.timeEnd('secondCall'))

    expect(endTime1).toBeLessThan(endTime)
    expect(slowFunctionMock).toHaveBeenCalledTimes(1)
  })
})