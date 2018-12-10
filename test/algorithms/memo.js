const cache = {};

const memoTimes10 = function(num) {
    if(num in cache) {
        console.log('cached');
        return cache[num];
    } else {
        cache[num] = num * 10;
    }

    return cache[num];
}

// console.log(memoTimes10(9));
// console.log(memoTimes10(9));

const memoClosureTimes10 = function() {
    const cache = {};
    return function(num) {
        if(num in cache) {
            console.log('cached');
            return cache[num];
        } else {
            cache[num] = num * 10;
        }
        return cache[num];
    }
}

const closure10 = memoClosureTimes10();
console.log(closure10(8));
console.log(closure10(8));