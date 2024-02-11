export const memoize = (func: Function) => {
    const cache: { [key: string]: any } = {}
    return function (...args: number[]) {
        const key = args.join(',')
        if (cache[key]) {
            return cache[key]
        }
        const result = func(...args)
        cache[key] = result
        return result
    }
}


const slowFunction: Function = (num: number) => {
    let result = 0;
    for (let i = 0; i <= num; i++){
        result = i
    }
    return(result)
}

const fastFunction = memoize(slowFunction)
console.time()
console.log(fastFunction(2000000000))
console.timeEnd()
console.time()
console.log(fastFunction(2000000000))
console.timeEnd()
console.time()
console.log(fastFunction(2000000000))
console.timeEnd()
console.time()
console.log(fastFunction(2000000000))
console.timeEnd()


//slowFunction(20000)