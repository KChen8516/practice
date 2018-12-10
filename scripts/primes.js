function printPrimes(min, max) {
    // loop through all possible int values
    // let nums = Number.MAX_SAFE_INTEGER;
    for(i= min; i < max+1; i++) {
        // rules for prime #s
        // No even #s greater than 2
        let upper = Math.sqrt(i);
        for(k = 2; k < upper; i++) {
            console.log(i, k, upper);
            if(i % k === 0) break
            else console.log(i)
        }
    }
}

printPrimes(0,10);
