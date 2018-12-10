const isUnique = function(arr) {
    // memoize with a map to accomplish O(N) TC
    const map = {};
    let result = true;

    for(let i=0; i<arr.length; i++) {
        if(map[arr[i]]) return false;
        else map[arr[i]] = true;
    }

    return result;
}

const uniqSort = function(arr) {
    const map = {};
    const result = [];

    for(let i=0; i<arr.length; i++) {
        if(!map[arr[i]]) {
            // only push unique values
            result.push(arr[i]);
            map[arr[i]] = true;
        }
    }

    return result.sort((a,b) => a - b);
}

const sorted1 = uniqSort([2,2,2,3]);
console.log(sorted1);
console.log(uniqSort([4,5,6,6,7,7,4,1,4,7]));