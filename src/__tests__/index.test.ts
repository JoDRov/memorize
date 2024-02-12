import { memoize } from "../index"

jest.useFakeTimers()

describe('memoize function', () => {
    it('should return the result faster on subsequent calls', () => {
        const slowFunctionMock = jest.fn((num: number) => {
            let result = 0
            for (let i = 0; i <= num; i++) {
                result = i
            }
            return result
        })
        const fastFunction = memoize(slowFunctionMock)

        console.time('firstCall')
        fastFunction(1000000)
        console.timeEnd('firstCall')

        console.time('secondCall')
        fastFunction(1000000)
        console.timeEnd('secondCall')
        jest.runAllTimers()

        expect(slowFunctionMock).toHaveBeenCalledTimes(1)
    });
});
