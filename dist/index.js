"use strict";
const cache = [];
function square(num) {
    const timeStart = Date.now();
    if (cache[num] !== undefined) {
        return cache[num];
    }
    let result = 0;
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            result += 1;
        }
    }
    cache[num] = result;
    const timePassed = Date.now() - timeStart;
    return result;
}
console.log(square(90000));
setTimeout(() => {
    console.log(square(90000));
}, 500);
setTimeout(() => {
    console.log(square(90000));
}, 500);
console.log(square(90000));
console.log(square(90000));
console.log(square(90000));
//# sourceMappingURL=index.js.map