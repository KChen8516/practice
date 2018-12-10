const iterativeFact = function(num) {
    let result = 1;
    for(let i=1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// console.log(iterativeFact(5));

const memoize = function(func) {
    let cache = {};

    return function(num) {
        let n = num;
        if(n in cache) {
            console.log('cached!');
            return cache[n];
        } else {
            let result = func(n);
            cache[n] = result;
            return result;
        }
    }
}

const memoFactorial = memoize(function(num) {
    if(num === 0) {
        return 1;
    } else {
        return num * memoFactorial(num - 1);
    }
});

console.log(memoFactorial(5));
console.log(memoFactorial(6));
console.log(memoFactorial(7));
console.log(memoFactorial(4));