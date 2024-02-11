"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
const memoize = (func) => {
    const cache = {};
    return function (...args) {
        const key = args.join(',');
        if (cache[key]) {
            return cache[key];
        }
        const result = func(...args);
        cache[key] = result;
        return result;
    };
};
exports.memoize = memoize;
const slowFunction = (num) => {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result = i;
    }
    return (result);
};
const fastFunction = (0, exports.memoize)(slowFunction);
console.time();
console.log(fastFunction(2000000000));
console.timeEnd();
console.time();
console.log(fastFunction(2000000000));
console.timeEnd();
console.time();
console.log(fastFunction(2000000000));
console.timeEnd();
console.time();
console.log(fastFunction(2000000000));
console.timeEnd();
//slowFunction(20000)
//# sourceMappingURL=index.js.map