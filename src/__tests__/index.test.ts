function memoize(func: Function): any {
    const cache: { [key: string]: any } = {}
    return function (...args: number[]) {
        const key = args.join(',')
        if (cache[key] !== undefined) {
            return cache[key]
        }
        const result = func(...args)
        cache[key] = result
        return result
    }
}

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

        // Create memoized function
        const memoizedFunction = memoize(slowFunctionMock)

        console.time('firstCall')
        const result1 = memoizedFunction(2000000000)
        console.log(result1)
        console.timeEnd('firstCall')

        console.time('secondCall')
        const result2 = memoizedFunction(2000000000)
        console.log(result2)
        console.timeEnd('secondCall')

        console.time('thirdCall')
        const result3 = memoizedFunction(2000000000)
        console.log(result3)
        console.timeEnd('thirdCall')

        jest.runAllTimers()

        expect(slowFunctionMock).toHaveBeenCalledTimes(1)
        expect(result1).toEqual(result2)
        expect(result2).toEqual(result3)
    })
})
