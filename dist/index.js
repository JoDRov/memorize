"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = args.join(',');
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = func(...args);
        cache[key] = result;
        return result;
    };
}
exports.memoize = memoize;
const slowFunction = (num) => {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result = i;
    }
    return result;
};
