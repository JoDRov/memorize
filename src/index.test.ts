describe("should memorize the function result in cache", () => {
    it ("Should memorize a result in cache", () => {
        
        const cache: number[] = []
        let timerStart: number = 0;
        
        function square (num: number): number{
            if (cache[num] !== null){
                return cache[num]
            }

            let result = 0

            for (let i = 0; i <= num; i++){
                for (let j = 0; j <= num; j++){
                    result += 1
                }
            }

            cache[num] = result
            return result
        }

        console.log(square(3000))
        expect(square(3000)).toBe(3000)
    })
})